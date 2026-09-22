'use client';
import { WhatsAppIcon, FileTextIcon } from './Icons';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

export default function FloatingContactButtons({ onOpenQuoteModal }) {
  const { openQuoteModal } = useQuoteModal();

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      openQuoteModal();
    }
  };

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
        <WhatsAppIcon size={30} />
      </a>

      {/* Sticky Mobile Action Bar */}
      <div className="sticky-cta-bar" role="region" aria-label="Acciones rápidas de contacto">
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#F1F5F9' }}>Agua Al Toque</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleQuoteClick}
            className="btn btn-primary"
            style={{ padding: '8px 14px', fontSize: '0.85rem', minHeight: '44px' }}
          >
            <FileTextIcon size={14} /> Cotizar
          </button>
          <a
            href={getWhatsAppLink('Hola, deseo cotizar agua en cisterna')}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => handleDirectWhatsAppClick(e, 'sticky_mobile_bar', 'Hola, deseo cotizar agua en cisterna')}
            className="btn btn-whatsapp"
            style={{ padding: '8px 14px', fontSize: '0.85rem', minHeight: '44px' }}
          >
            <WhatsAppIcon size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
