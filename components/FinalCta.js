'use client';
import { FileTextIcon, WhatsAppIcon } from './Icons';

export default function FinalCta({ onOpenQuoteModal }) {
  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', textAlign: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>


          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginTop: '16px', marginBottom: '16px' }}>
            ¿Necesitas abastecimiento de agua?
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: '36px', lineHeight: 1.6 }}>
            Cuéntanos qué necesitas y te ayudaremos a encontrar la solución adecuada de transporte, abastecimiento o alquiler de cisternas.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenQuoteModal} className="btn btn-primary btn-large">
              <FileTextIcon size={20} /> Solicitar Cotización
            </button>
            <a
              href="https://wa.me/51999999999?text=Hola,%20deseo%20solicitar%20abastecimiento%20de%20agua%20en%20cisterna"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-large"
            >
              <WhatsAppIcon size={20} /> Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
