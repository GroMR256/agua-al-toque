'use client';
import { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
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

  // Cada vez que se abre, el servicio refleja el botón que lo abrió
  useEffect(() => {
    if (isOpen) setService(defaultService);
  }, [isOpen, defaultService]);

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
        <button type="button" onClick={handleReset} aria-label="Cerrar" className="modal-close">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <div style={{ marginBottom: '24px' }}>
          <h3 id="quote-modal-title" className="display modal-title">
            Solicitar cotización
          </h3>
          <p className="muted-on-paper" style={{ marginTop: '10px' }}>
            Déjanos tus datos y te enviamos la propuesta por WhatsApp o por teléfono.
          </p>
        </div>

        {submitted ? (
          <div className="form-success" role="status">
            <h4>Solicitud registrada</h4>
            <p>Recibimos tus datos. Te contactamos en breve; si es urgente, sigue por WhatsApp.</p>
            <a
              href={whatsappUrl || fallbackWaUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-large"
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'quote_modal_success' })}
            >
              <WhatsAppIcon size={20} /> Continuar por WhatsApp
            </a>
            <button type="button" onClick={handleReset} className="btn btn-ghost">
              <span>Cerrar</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="hp_field"
              value={hpField}
              onChange={(e) => setHpField(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {errorMsg && (
              <div className="form-error" role="alert">
                {errorMsg}
              </div>
            )}

            <div className="modal-form-grid">
              <div>
                <label htmlFor="quote-name" className="field-label">Nombre completo</label>
                <input
                  id="quote-name"
                  className="input"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="quote-phone" className="field-label">Teléfono o WhatsApp</label>
                <input
                  id="quote-phone"
                  className="input"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Ej. 987 654 321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="quote-company" className="field-label">Empresa (opcional)</label>
              <input
                id="quote-company"
                className="input"
                type="text"
                autoComplete="organization"
                placeholder="Nombre de la empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="quote-service" className="field-label">Servicio</label>
              <input
                id="quote-service"
                className="input"
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="quote-message" className="field-label">Lugar de entrega o detalle (opcional)</label>
              <textarea
                id="quote-message"
                className="input"
                rows={2}
                placeholder="Distrito, obra o fundo, y para cuándo"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-large">
                {isSubmitting ? 'Enviando…' : 'Enviar Cotización'}
              </button>
              <a
                href={fallbackWaUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'quote_modal_direct' })}
                className="btn btn-whatsapp btn-large"
              >
                <WhatsAppIcon size={20} /> WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
