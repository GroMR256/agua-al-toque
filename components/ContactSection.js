'use client';
import { useState } from 'react';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, FileTextIcon } from './Icons';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `¡Hola! Deseo solicitar información/cotización:\n\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `${company ? `• Empresa: ${company}\n` : ''}` +
      `${message ? `• Requerimiento: ${message}` : ''}`;

    window.open(`https://wa.me/51999999999?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section" style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Solicitar Cotización o Información
          </h2>
          <p className="section-subtitle" style={{ margin: '10px auto 0 auto' }}>
            Déjanos tus datos básicos y te responderemos de inmediato.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
          <div style={{ backgroundColor: 'var(--bg-light)', padding: '36px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
            {submitted && (
              <div style={{ padding: '14px 18px', borderRadius: '8px', backgroundColor: 'rgba(5, 150, 105, 0.1)', border: '1px solid var(--accent-emerald)', color: 'var(--accent-emerald)', marginBottom: '20px', fontWeight: 600, fontSize: '0.9rem' }}>
                ✓ Redirigiendo a atención directa por WhatsApp...
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="[NÚMERO DE TELÉFONO]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa o particular"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  ¿Cómo podemos ayudarte? (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ej. Requiero una cisterna de 10 m³ en [UBICACIÓN] para mañana..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical', backgroundColor: '#FFFFFF' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button type="submit" className="btn btn-primary btn-large" style={{ flex: 1 }}>
                  <FileTextIcon size={18} /> Enviar Cotización
                </button>
                <a
                  href="https://wa.me/51999999999?text=Hola,%20deseo%20cotizar%20servicio%20de%20agua%20en%20cisterna"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-large"
                  style={{ flex: 1 }}
                >
                  <WhatsAppIcon size={18} /> WhatsApp
                </a>
              </div>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card-pro">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px' }}>
                Atención Directa
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Central Telefónica:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>[NÚMERO DE TELÉFONO]</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>WhatsApp Directo:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>[NÚMERO DE TELÉFONO]</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Base Operativa:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>[ZONA DE COBERTURA / CIUDAD]</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
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
