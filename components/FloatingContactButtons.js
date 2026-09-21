'use client';
import { WhatsAppIcon, FileTextIcon } from './Icons';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';

export default function FloatingContactButtons({ onOpenQuoteModal }) {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink('Hola, deseo solicitar información sobre suministro de agua y cisternas')}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => handleDirectWhatsAppClick(e, 'floating_button', 'Hola, deseo solicitar información sobre suministro de agua y cisternas')}
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
            href={getWhatsAppLink('Hola, deseo cotizar agua en cisterna')}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => handleDirectWhatsAppClick(e, 'sticky_mobile_bar', 'Hola, deseo cotizar agua en cisterna')}
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
