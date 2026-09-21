'use client';
import { useState, useEffect } from 'react';
import { FileTextIcon, WhatsAppIcon } from './Icons';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { getStoredUtmData } from '@/lib/utmTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

export default function QuoteModal({ isOpen, onClose, defaultService = 'Suministro de Agua' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [hpField, setHpField] = useState(''); // Honeypot anti-spam

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('no-scroll');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (onClose) onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleReset = () => {
    setName('');
    setPhone('');
    setCompany('');
    setMessage('');
    setIsSubmitting(false);
    setSubmitted(false);
    setErrorMsg('');
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg('');

    const utmData = getStoredUtmData();

    const payload = {
      name,
      phone,
      company,
      service,
      message,
      source: 'quote_modal',
      hp_field: hpField,
      ...utmData
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setWhatsappUrl(resData.whatsappUrl || getWhatsAppLink(`Hola, envié una cotización de ${service}`));
        trackEvent(ANALYTICS_EVENTS.QUOTE_SUBMITTED, { service });
      } else {
        setErrorMsg(resData.message || 'No pudimos registrar tu solicitud. Puedes intentarlo de nuevo o usar WhatsApp.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMsg('Ocurrió un error al enviar la solicitud. Por favor intenta contactar por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackWaUrl = getWhatsAppLink(
    `¡Hola! Deseo cotizar rápido:\n• Nombre: ${name || 'N/A'}\n• Teléfono: ${phone || 'N/A'}\n• Servicio: ${service}`
  );

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="modal-content">
        <button
          onClick={handleReset}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#F1F5F9',
            border: 'none',
            color: '#475569',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '20px', paddingRight: '30px' }}>
          <span className="badge-pro" style={{ marginBottom: '8px' }}>
            <FileTextIcon size={14} /> Cotización Rápida
          </span>
          <h3 id="quote-modal-title" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            Solicitar Cotización de Servicio
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
            Ingresa tus datos de contacto y te enviaremos una propuesta formal a la brevedad.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              fontSize: '3rem',
              color: 'var(--accent-emerald)',
              marginBottom: '12px'
            }}>
              ✓
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
              ¡Solicitud Registrada con Éxito!
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.5 }}>
              Hemos recibido tus datos y nuestro equipo comercial te contactará inmediatamente.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={whatsappUrl || fallbackWaUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-large"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'quote_modal_success' })}
              >
                <WhatsAppIcon size={20} /> Continuar Atención por WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="btn"
                style={{ background: '#F1F5F9', color: '#334155', width: '100%', padding: '12px' }}
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="text"
              name="hp_field"
              value={hpField}
              onChange={(e) => setHpField(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {errorMsg && (
              <div style={{
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #EF4444',
                color: '#B91C1C',
                fontSize: '0.88rem'
              }}>
                ⚠️ {errorMsg}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Nombre completo *
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                placeholder="Ej. 987 654 321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Empresa (opcional)
              </label>
              <input
                type="text"
                placeholder="Nombre de la empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Servicio Requerido
              </label>
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Mensaje o Ubicación (opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Indica la ubicación o cantidad requerida..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <div className="modal-actions">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-large"
                style={{ flex: 1, opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer', justifyContent: 'center' }}
              >
                <FileTextIcon size={18} /> {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
              </button>
              <a
                href={fallbackWaUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'quote_modal_direct' })}
                className="btn btn-whatsapp btn-large"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

