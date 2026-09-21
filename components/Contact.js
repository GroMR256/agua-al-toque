'use client';
import FadeIn from './FadeIn';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

export default function Contact({ onOpenQuoteModal }) {
  const handleWhatsAppClick = () => {
    trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contact_b2b_banner' });
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <FadeIn className="contact-cta">
          <span className="badge-glass" style={{ marginBottom: '16px' }}>💼 Área Corporativa & Licencias</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }} className="text-gradient">
            ¿Requieres suministro masivo para tu empresa?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 30px auto' }}>
            Nuestros ingenieros comerciales están listos para preparar un plan tarifario personalizado y visitar las instalaciones de tu obra, planta o proyecto.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onOpenQuoteModal()} className="btn btn-primary btn-large">
              💼 Solicitar Cotización B2B (Atención Inmediata)
            </button>
            <a
              href={getWhatsAppLink('Hola, deseo cotizar suministro de agua B2B para mi empresa')}
              target="_blank"
              rel="noreferrer"
              onClick={handleWhatsAppClick}
              className="btn btn-secondary btn-large"
            >
              📱 WhatsApp Corporativo B2B
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
