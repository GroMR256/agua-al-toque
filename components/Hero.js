'use client';
import { FileTextIcon, WhatsAppIcon, ShieldCheckIcon } from './Icons';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div>

            <h1 className="hero-title" style={{ marginTop: '16px' }}>
              Agua cuando la necesitas, <span style={{ color: 'var(--accent-sky)' }}>donde la necesitas.</span>
            </h1>

            <p className="hero-subtitle">
              Abastecimiento y transporte de agua mediante camiones cisterna para empresas, agricultura, construcción, minería y hogares.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenQuoteModal} className="btn btn-primary btn-large">
                <FileTextIcon size={20} /> Solicitar Cotización
              </button>
              <a
                href="https://wa.me/51999999999?text=Hola,%20deseo%20contactarme%20para%20un%20servicio%20de%20agua%20en%20cisterna"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-large"
              >
                <WhatsAppIcon size={20} /> Contactar por WhatsApp
              </a>
            </div>

            <div style={{ display: 'flex', gap: '24px', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent-emerald)' }}>✓</span> Flota Propia Sanitizada
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent-emerald)' }}>✓</span> Despachos Programados y Urgencias
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            {/* Realistic high quality tanker truck image */}
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
              alt="Camión cisterna de agua listo para despacho industrial"
            />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              color: '#FFFFFF',
              padding: '16px 20px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontWeight: 700 }}>Operación Logística Garantizada</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Cisternas de 10 m³, 15 m³ y 30 m³</div>
              </div>
              <span style={{ backgroundColor: 'var(--accent-sky)', padding: '4px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700 }}>
                Atención 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
