'use client';
import { getWhatsAppLink, PUBLIC_CONFIG } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

const WA_MESSAGE = 'Hola, deseo contactarme para un servicio de agua en cisterna';

export default function Hero({ onOpenQuoteModal }) {
  const { openQuoteModal } = useQuoteModal();

  const handleQuoteClick = () => {
    trackEvent(ANALYTICS_EVENTS.QUOTE_MODAL_OPENED, { location: 'hero' });
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      openQuoteModal();
    }
  };

  return (
    <section id="inicio" className="hero" data-ink="light">
      <div className="frame" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h1 className="display hero-title">
          <span className="hero-in">Agua</span>
          <span className="hero-in ink-dark" style={{ '--reveal-delay': '90ms' }}>al toque</span>
        </h1>

        <div className="hero-foot">
          <p className="hero-lead hero-in" style={{ '--reveal-delay': '220ms' }}>
            Agua cuando la necesitas, donde la necesitas. Camiones cisterna de 10, 15 y 30 m³ para obras, fundos, minas, hoteles y hogares en {PUBLIC_CONFIG.serviceArea}, las 24 horas.
          </p>

          <div className="hero-actions hero-in" style={{ '--reveal-delay': '300ms' }}>
            <button type="button" onClick={handleQuoteClick} className="btn btn-dark btn-large">
              Solicitar cotización
            </button>
            <a
              href={getWhatsAppLink(WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => handleDirectWhatsAppClick(e, 'hero', WA_MESSAGE)}
              className="link"
            >
              o escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
