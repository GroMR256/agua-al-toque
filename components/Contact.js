'use client';
import FadeIn from './FadeIn';

export default function Contact({ onOpenOrderModal }) {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <FadeIn className="contact-cta">
          <span className="badge-glass" style={{ marginBottom: '16px' }}>⚡ Hidratación Inmediata</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }} className="text-gradient">
            ¿Listo para probar la máxima pureza?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 30px auto' }}>
            Haz tu pedido ahora y recibe tu agua purificada por ósmosis inversa en minutos con envío gratis a tu zona.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenOrderModal} className="btn btn-primary btn-large">
              📲 Pedir por WhatsApp (Atención 24/7)
            </button>
            <a href="tel:+51999999999" className="btn btn-secondary btn-large">
              📞 Llamar a Central: 999 999 999
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
