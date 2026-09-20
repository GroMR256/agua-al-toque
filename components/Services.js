'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Services({ onOpenQuoteModal }) {
  const [sector, setSector] = useState('Minería & Obras');
  const [volM3, setVolM3] = useState(50);
  const [freq, setFreq] = useState('Semanal');

  const basePricePerM3 = sector === 'Minería & Obras' ? 28 : sector === 'Agroindustria' ? 22 : 25;
  const discountMultiplier = freq === 'Diario' ? 0.80 : freq === 'Semanal' ? 0.90 : 1;
  const totalEst = volM3 * basePricePerM3 * discountMultiplier;

  return (
    <section id="servicios" className="section">
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Servicios Corporativos</span>
          <h2 className="section-title">Soluciones Integrales de <span className="text-gradient">Agua a Gran Escala</span></h2>
          <p className="section-subtitle">
            Infraestructura logística sólida y plantas de tratamiento adaptadas a los estándares técnicos de cada industria.
          </p>
        </FadeIn>

        <div className="grid-4" style={{ marginBottom: '60px' }}>
          <FadeIn delay={100} className="glass-card product-card">
            <div>
              <span className="product-tag">Flota Pesada</span>
              <div className="product-icon-wrap">🚚</div>
              <h3 className="product-title">Suministro en Cisternas</h3>
              <p className="product-desc">
                Cisternas de 10 m³, 15 m³ y 30 m³ de acero inoxidable sanitizado. Transporte seguro para frentes de obra y campamentos.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">Desde 10 m³</span>
              <button onClick={() => onOpenQuoteModal('Suministro en Cisternas')} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Cotizar
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="glass-card product-card">
            <div>
              <span className="product-tag">Tratamiento In Situ</span>
              <div className="product-icon-wrap">⚙️</div>
              <h3 className="product-title">Plantas Móviles de Ósmosis</h3>
              <p className="product-desc">
                Módulos de desalación y potabilización sobre remolque para operaciones mineras y agrícolas en zonas alejadas.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">A Medida</span>
              <button onClick={() => onOpenQuoteModal('Plantas Móviles')} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Cotizar
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="glass-card product-card">
            <div>
              <span className="product-tag">Almacenamiento</span>
              <div className="product-icon-wrap">🛢️</div>
              <h3 className="product-title">Tanques Estáticos Industrial</h3>
              <p className="product-desc">
                Alquiler e instalación de tanques flexibles y reservorios de 10,000L a 50,000L con bombas de alta presión.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">10k - 50k L</span>
              <button onClick={() => onOpenQuoteModal('Tanques Estáticos')} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Cotizar
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={400} className="glass-card product-card">
            <div>
              <span className="product-tag">Calidad Acreditada</span>
              <div className="product-icon-wrap">📑</div>
              <h3 className="product-title">Certificación & Ensayos</h3>
              <p className="product-desc">
                Ensayos fisicoquímicos y microbiológicos periódicos para fiscalizaciones de DIGESA, OEFA y Sunafil.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">Informes ISO</span>
              <button onClick={() => onOpenQuoteModal('Certificación')} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Cotizar
              </button>
            </div>
          </FadeIn>
        </div>

        {/* B2B Volume Quote Calculator */}
        <div id="cotizador">
          <FadeIn className="calc-wrapper">
            <div className="calc-grid">
              <div>
                <h3 className="calc-title text-gradient">🧮 Estimador de Suministro Industrial en m³</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Simula la capacidad requerida para tu proyecto y obtén una tasa de volumen preferencial para contratos corporativos.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                    Sector Industrial:
                  </label>
                  <div className="option-selector">
                    {['Minería & Obras', 'Agroindustria', 'Hoteles & Hospitality', 'Plantas Industriales'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`opt-btn ${sector === item ? 'active' : ''}`}
                        onClick={() => setSector(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                    Frecuencia de Abastecimiento:
                  </label>
                  <div className="option-selector">
                    {[
                      { label: 'Suministro Diario (-20%)', value: 'Diario' },
                      { label: 'Suministro Semanal (-10%)', value: 'Semanal' },
                      { label: 'Despacho Puntual', value: 'Puntual' }
                    ].map((f) => (
                      <button
                        key={f.value}
                        type="button"
                        className={`opt-btn ${freq === f.value ? 'active' : ''}`}
                        onClick={() => setFreq(f.value)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                    Volumen Requerido (m³):
                  </label>
                  <div className="qty-control">
                    <button type="button" className="qty-btn" onClick={() => setVolM3(Math.max(10, volM3 - 10))}>-</button>
                    <span className="qty-val" style={{ minWidth: '80px' }}>{volM3} m³</span>
                    <button type="button" className="qty-btn" onClick={() => setVolM3(volM3 + 10)}>+</button>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    * 1 m³ = 1,000 Litros (Equivalente a {(volM3 / 10).toFixed(0)} cisterna(s) de 10 m³)
                  </span>
                </div>
              </div>

              <div className="summary-box">
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: 700 }}>Resumen de Requerimiento</h4>
                  <div className="summary-row">
                    <span>Sector:</span>
                    <strong style={{ color: 'white' }}>{sector}</strong>
                  </div>
                  <div className="summary-row" style={{ marginTop: '8px' }}>
                    <span>Volumen estimado:</span>
                    <strong style={{ color: 'white' }}>{volM3} m³ ({volM3 * 1000} L)</strong>
                  </div>
                  <div className="summary-row" style={{ marginTop: '8px' }}>
                    <span>Frecuencia:</span>
                    <strong style={{ color: 'white' }}>{freq}</strong>
                  </div>
                </div>

                <div>
                  <div className="summary-total">
                    <span>Tarifa Est. Proyecto:</span>
                    <span>S/ {totalEst.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => onOpenQuoteModal()}
                    className="btn btn-primary btn-large" 
                    style={{ width: '100%', marginTop: '16px' }}
                  >
                    💼 Solicitar Cotización Formal
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
