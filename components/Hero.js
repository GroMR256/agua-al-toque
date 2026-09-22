'use client';
import Image from 'next/image';
import { FileTextIcon, WhatsAppIcon } from './Icons';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

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
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title" style={{ marginTop: '8px' }}>
              Agua cuando la necesitas, <span style={{ color: 'var(--accent-sky)' }}>donde la necesitas.</span>
            </h1>

            <p className="hero-subtitle">
              Abastecimiento y transporte de agua mediante camiones cisterna para empresas, agricultura, construcción, minería y hogares.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flexDirection: 'row' }} className="hero-ctas">
              <button onClick={handleQuoteClick} className="btn btn-primary btn-large" style={{ flex: '1 1 240px', justifyContent: 'center' }}>
                <FileTextIcon size={20} /> Solicitar Cotización
              </button>
              <a
                href={getWhatsAppLink('Hola, deseo contactarme para un servicio de agua en cisterna')}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleDirectWhatsAppClick(e, 'hero', 'Hola, deseo contactarme para un servicio de agua en cisterna')}
                className="btn btn-whatsapp btn-large"
                style={{ flex: '1 1 240px', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={20} /> Contactar por WhatsApp
              </a>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px 24px',
              marginTop: '32px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>✓</span> Flota Propia Sanitizada
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>✓</span> Despachos Programados y Urgencias
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
              alt="Camión cisterna de agua listo para despacho industrial"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              right: '12px',
              backgroundColor: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#FFFFFF',
              padding: '12px 16px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontWeight: 700, lineHeight: 1.3 }}>Operación Logística Garantizada</div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Cisternas de 10 m³, 15 m³ y 30 m³</div>
              </div>
              <span style={{ backgroundColor: 'var(--accent-sky)', padding: '4px 10px', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>
                Atención 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
