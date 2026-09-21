import { NextResponse } from 'next/server';
import { saveLeadToDatabase } from '@/lib/supabase';
import { SERVER_CONFIG, getWhatsAppLink } from '@/lib/contactConfig';
import { logger } from '@/lib/logger';
import { Resend } from 'resend';

// Simple In-Memory Rate Limiter (Max 5 requests por 15 minutos por IP)
const ipCache = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const userRecord = ipCache.get(ip) || { count: 0, startTime: now };

  if (now - userRecord.startTime > RATE_LIMIT_WINDOW_MS) {
    userRecord.count = 1;
    userRecord.startTime = now;
  } else {
    userRecord.count += 1;
  }

  ipCache.set(ip, userRecord);
  return userRecord.count > MAX_REQUESTS_PER_WINDOW;
}

// Auxiliar para limpiar strings de caracteres peligrosos / HTML
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // Eliminar etiquetas HTML
    .trim();
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  try {
    // 1. Rate Limiting
    if (isRateLimited(ip)) {
      logger.warn('RATE_LIMIT_EXCEEDED', { ip });
      return NextResponse.json(
        {
          success: false,
          message: 'Has realizado demasiadas solicitudes en poco tiempo. Por favor contáctanos directamente por WhatsApp.'
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Honeypot check
    if (body.hp_field) {
      logger.warn('HONEYPOT_TRIGGERED', { ip, body });
      return NextResponse.json(
        { success: false, message: 'Solicitud rechazada.' },
        { status: 400 }
      );
    }

    // 3. Sanitización de campos
    const name = sanitizeInput(body.name);
    const phone = sanitizeInput(body.phone);
    const email = sanitizeInput(body.email);
    const company = sanitizeInput(body.company);
    const location = sanitizeInput(body.location);
    const service = sanitizeInput(body.service || 'Suministro de Agua');
    const quantity = sanitizeInput(body.quantity);
    const frequency = sanitizeInput(body.frequency);
    const start_date = sanitizeInput(body.start_date);
    const message = sanitizeInput(body.message);
    const source = sanitizeInput(body.source || 'web_unknown');

    // UTMs
    const utm_source = sanitizeInput(body.utm_source);
    const utm_medium = sanitizeInput(body.utm_medium);
    const utm_campaign = sanitizeInput(body.utm_campaign);
    const utm_content = sanitizeInput(body.utm_content);
    const utm_term = sanitizeInput(body.utm_term);
    const referrer = sanitizeInput(body.referrer);

    // 4. Validación de Schema
    const errors = {};
    if (!name || name.length < 2) {
      errors.name = 'El nombre completo es requerido (mínimo 2 caracteres).';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phone || cleanPhone.length < 7 || cleanPhone.length > 15) {
      errors.phone = 'El teléfono o WhatsApp debe contener entre 7 y 15 dígitos numéricos.';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'El formato de correo electrónico no es válido.';
    }

    if (Object.keys(errors).length > 0) {
      logger.warn('VALIDATION_FAILED', { errors, ip });
      return NextResponse.json(
        {
          success: false,
          message: 'Por favor verifica los campos ingresados.',
          errors
        },
        { status: 400 }
      );
    }

    // 5. Preparar registro de lead
    const leadRecord = {
      name,
      phone,
      email: email || null,
      company: company || null,
      location: location || null,
      service,
      quantity: quantity || null,
      frequency: frequency || null,
      start_date: start_date || null,
      message: message || null,
      source,
      status: 'NEW',
      email_sent: false,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_content: utm_content || null,
      utm_term: utm_term || null,
      referrer: referrer || null,
      ip_address: ip
    };

    // 6. Persistencia en Base de Datos (Supabase)
    const { data: savedLead, error: dbError } = await saveLeadToDatabase(leadRecord);

    if (dbError) {
      logger.error('DATABASE_SAVE_FAILED', dbError);
      return NextResponse.json(
        {
          success: false,
          message: 'No pudimos registrar tu solicitud debido a un problema temporal de servidor. Por favor contáctanos por WhatsApp.'
        },
        { status: 500 }
      );
    }

    // 7. Notificación por Email (Resend)
    let emailSent = false;
    if (SERVER_CONFIG.resendApiKey && SERVER_CONFIG.contactEmail) {
      try {
        const resend = new Resend(SERVER_CONFIG.resendApiKey);

        const emailHtml = `
          <h2>💧 Nueva Solicitud de Cotización - Agua Al Toque</h2>
          <p><strong>Origen:</strong> ${source}</p>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono/WhatsApp:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
          <p><strong>Servicio:</strong> ${service}</p>
          ${quantity ? `<p><strong>Volumen / Cantidad:</strong> ${quantity}</p>` : ''}
          ${frequency ? `<p><strong>Frecuencia:</strong> ${frequency}</p>` : ''}
          ${location ? `<p><strong>Ubicación:</strong> ${location}</p>` : ''}
          ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
          <hr />
          <p><small>Enviado desde el sitio web Agua Al Toque (${new Date().toLocaleString()})</small></p>
        `;

        await resend.emails.send({
          from: 'Agua Al Toque Web <onboarding@resend.dev>',
          to: SERVER_CONFIG.contactEmail,
          subject: `💧 Nueva Cotización [${service}]: ${name} ${company ? `(${company})` : ''}`,
          html: emailHtml
        });

        emailSent = true;
        logger.info('EMAIL_NOTIFICATION_SENT', { to: SERVER_CONFIG.contactEmail, leadId: savedLead?.id });
      } catch (emailErr) {
        logger.error('EMAIL_NOTIFICATION_FAILED', emailErr, { leadId: savedLead?.id });
        // No fallamos la respuesta si el email falla; el lead ya está a salvo en la DB.
      }
    }

    // 8. Construir enlace de WhatsApp pre-estructurado
    const waText = `¡Hola Agua Al Toque! 💧 He enviado una solicitud de cotización:\n\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `${company ? `• Empresa: ${company}\n` : ''}` +
      `• Servicio: ${service}\n` +
      `${location ? `• Ubicación: ${location}\n` : ''}` +
      `${message ? `• Detalles: ${message}` : ''}`;

    const whatsappUrl = getWhatsAppLink(waText);

    return NextResponse.json(
      {
        success: true,
        message: '¡Solicitud registrada con éxito! Nos comunicaremos a la brevedad.',
        leadId: savedLead?.id,
        emailSent,
        whatsappUrl
      },
      { status: 200 }
    );

  } catch (err) {
    logger.error('API_QUOTE_UNHANDLED_EXCEPTION', err);
    return NextResponse.json(
      {
        success: false,
        message: 'Ocurrió un error inesperado al procesar tu solicitud.'
      },
      { status: 500 }
    );
  }
}
