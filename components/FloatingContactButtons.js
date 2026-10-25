'use client';
import { WhatsAppIcon } from './Icons';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

const FLOATING_MESSAGE = 'Hola, deseo solicitar información sobre suministro de agua y cisternas';
const BAR_MESSAGE = 'Hola, deseo cotizar agua en cisterna';

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
      {/* Botón flotante de WhatsApp (escritorio) */}
      <a
        href={getWhatsAppLink(FLOATING_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => handleDirectWhatsAppClick(e, 'floating_button', FLOATING_MESSAGE)}
        className="floating-whatsapp"
        aria-label="Escribir por WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>

      {/* Barra fija inferior (móvil) */}
      <div className="sticky-cta-bar" role="region" aria-label="Contacto rápido">
        <button type="button" onClick={handleQuoteClick} className="btn btn-primary">
          Cotizar
        </button>
        <a
          href={getWhatsAppLink(BAR_MESSAGE)}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => handleDirectWhatsAppClick(e, 'sticky_mobile_bar', BAR_MESSAGE)}
          className="btn btn-whatsapp"
        >
          <WhatsAppIcon size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
}
