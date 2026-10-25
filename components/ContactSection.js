'use client';
import { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { getWhatsAppLink, formatPhone, PUBLIC_CONFIG } from '@/lib/contactConfig';
import { getStoredUtmData } from '@/lib/utmTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [hpField, setHpField] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

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
      service: 'Contacto General / Cotización',
      message,
      source: 'contact_section',
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
        setWhatsappUrl(resData.whatsappUrl || getWhatsAppLink(`Hola, envié una consulta desde la web`));
        trackEvent(ANALYTICS_EVENTS.CONTACT_SUBMITTED);
      } else {
        setErrorMsg(resData.message || 'No pudimos procesar tu solicitud. Inténtalo por WhatsApp.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setErrorMsg('Error de conexión al enviar. Por favor contáctanos por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackWaUrl = getWhatsAppLink('Hola, deseo cotizar servicio de agua en cisterna');

  return (
    <section id="contacto" className="chapter chapter--coal" data-ink="paper">
      <div className="frame grid contact">
        <div className="contact-lead">
          <h2 className="display section-heading" data-reveal>Pide tu cisterna</h2>
          <p className="section-intro muted-on-coal" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Dinos dónde, cuánta agua y para cuándo. Te respondemos por WhatsApp o por teléfono.
          </p>

          <a
            href={fallbackWaUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contact_section_number' })}
            className="display contact-number tabular"
            aria-label={`Escribir por WhatsApp al ${formatPhone()}`}
            data-reveal
            style={{ '--reveal-delay': '140ms' }}
          >
            {formatPhone()}
          </a>

          <ul className="contact-facts" data-reveal style={{ '--reveal-delay': '200ms' }}>
            <li><strong>Teléfono y WhatsApp:</strong> {formatPhone()}</li>
            <li><strong>Correo:</strong> <a className="link" href={`mailto:${PUBLIC_CONFIG.contactEmail}`}>{PUBLIC_CONFIG.contactEmail}</a></li>
            <li><strong>Horario:</strong> 24 horas, también emergencias</li>
            <li><strong>Base:</strong> {PUBLIC_CONFIG.serviceArea}</li>
          </ul>
        </div>

        <div className="contact-form-wrap" data-reveal style={{ '--reveal-delay': '120ms' }}>
          {submitted ? (
            <div className="form-success" role="status">
              <h3>Recibimos tu solicitud</h3>
              <p>Te escribimos en breve al número que dejaste. Si es urgente, sigue la conversación por WhatsApp.</p>
              <a
                href={whatsappUrl || fallbackWaUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contact_section_success' })}
                className="btn btn-whatsapp btn-large"
              >
                <WhatsAppIcon size={20} /> Continuar por WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <h3>Solicitar cotización</h3>
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

              <div>
                <label htmlFor="contact-name" className="field-label">Nombre completo</label>
                <input
                  id="contact-name"
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
                <label htmlFor="contact-phone" className="field-label">Teléfono o WhatsApp</label>
                <input
                  id="contact-phone"
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

              <div>
                <label htmlFor="contact-company" className="field-label">Empresa (opcional)</label>
                <input
                  id="contact-company"
                  className="input"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nombre de tu empresa o particular"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="field-label">¿Qué necesitas? (opcional)</label>
                <textarea
                  id="contact-message"
                  className="input"
                  rows={3}
                  placeholder="Ej. Una cisterna de 10 m³ para mañana en la obra..."
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
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contact_section_direct' })}
                  className="btn btn-whatsapp btn-large"
                >
                  <WhatsAppIcon size={20} /> WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
