'use client';
import { useState } from 'react';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, FileTextIcon } from './Icons';
import { getWhatsAppLink, PUBLIC_CONFIG } from '@/lib/contactConfig';
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
    <section id="contacto" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px auto' }}>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            Solicitar Cotización o Información
          </h2>
          <p className="section-subtitle" style={{ margin: '10px auto 0 auto' }}>
            Déjanos tus datos básicos y te responderemos de inmediato.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '32px', alignItems: 'flex-start' }}>
          <div style={{
            backgroundColor: 'var(--bg-light)',
            padding: 'clamp(20px, 4vw, 36px)',
            borderRadius: '16px',
            border: '1px solid var(--border-light)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--accent-emerald)', marginBottom: '8px' }}>✓</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px' }}>
                  Un asesor comercial procesará tus datos y se comunicará a la brevedad.
                </p>
                <a
                  href={whatsappUrl || fallbackWaUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contact_section_success' })}
                  className="btn btn-whatsapp btn-large"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <WhatsAppIcon size={18} /> Continuar por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Nombre completo *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Ej. 987 654 321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Empresa (opcional)
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Nombre de tu empresa o particular"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    ¿Cómo podemos ayudarte? (opcional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Ej. Requiero una cisterna de 10 m³ para mañana..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical', backgroundColor: '#FFFFFF' }}
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
                    onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contact_section_direct' })}
                    className="btn btn-whatsapp btn-large"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card-pro" style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px' }}>
                Atención Directa
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0, flexShrink: 0 }}>
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Central Telefónica:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+{PUBLIC_CONFIG.whatsappNumber}</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', flexShrink: 0 }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>WhatsApp Directo:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+{PUBLIC_CONFIG.whatsappNumber}</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0, flexShrink: 0 }}>
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Base Operativa:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Despachos Urbanos e Industriales</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0, flexShrink: 0 }}>
                    <ClockIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Horario de Atención:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Atención 24/7 y Emergencias</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

