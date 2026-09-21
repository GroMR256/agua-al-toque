import { NextResponse } from 'next/server';
import { saveLeadToDatabase } from '@/lib/supabase';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { logger } from '@/lib/logger';

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  try {
    const body = await request.json().catch(() => ({}));

    const location = sanitizeInput(body.location || 'direct_button');
    const customMessage = sanitizeInput(body.message || '');

    // UTMs
    const utm_source = sanitizeInput(body.utm_source);
    const utm_medium = sanitizeInput(body.utm_medium);
    const utm_campaign = sanitizeInput(body.utm_campaign);
    const utm_content = sanitizeInput(body.utm_content);
    const utm_term = sanitizeInput(body.utm_term);
    const referrer = sanitizeInput(body.referrer);

    const leadRecord = {
      name: `Prospecto WhatsApp (${location})`,
      phone: 'Por identificar en chat',
      email: null,
      company: null,
      location: null,
      service: 'Contacto Directo WhatsApp',
      quantity: null,
      frequency: null,
      start_date: null,
      message: customMessage || `El usuario inició chat directo de WhatsApp desde: ${location}`,
      source: `whatsapp_${location}`,
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

    const { data: savedLead, error: dbError } = await saveLeadToDatabase(leadRecord);

    if (dbError) {
      logger.error('WHATSAPP_CLICK_DB_SAVE_FAILED', dbError);
    } else {
      logger.info('WHATSAPP_CLICK_LEAD_SAVED', { leadId: savedLead?.id, location });
    }

    const whatsappUrl = getWhatsAppLink(customMessage);

    return NextResponse.json({
      success: true,
      leadId: savedLead?.id || null,
      whatsappUrl
    });

  } catch (err) {
    logger.error('WHATSAPP_CLICK_UNHANDLED_EXCEPTION', err);
    return NextResponse.json(
      { success: true, whatsappUrl: getWhatsAppLink() },
      { status: 200 }
    );
  }
}
