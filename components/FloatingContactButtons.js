'use client';
import { WhatsAppIcon, FileTextIcon } from './Icons';

export default function FloatingContactButtons({ onOpenQuoteModal }) {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51999999999?text=Hola,%20deseo%20solicitar%20información%20sobre%20suministro%20de%20agua%20y%20cisternas"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Contacto por WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>

      {/* Sticky Mobile Action Bar */}
      <div className="sticky-cta-bar">
        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Logística & Cisternas</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={onOpenQuoteModal}
            className="btn btn-primary"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            <FileTextIcon size={14} /> Cotizar
          </button>
          <a
            href="https://wa.me/51999999999?text=Hola,%20deseo%20cotizar%20agua%20en%20cisterna"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            <WhatsAppIcon size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
