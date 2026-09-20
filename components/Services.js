'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Services({ onOpenOrderModal }) {
  // Interactive Calculator State
  const [calcProduct, setCalcProduct] = useState('Bidón 20L Retornable');
  const [calcQty, setCalcQty] = useState(2);
  const [calcFreq, setCalcFreq] = useState('Única');

  const prices = {
    'Bidón 20L Retornable': 15,
    'Pack Personal (12x625ml)': 20,
    'Pack Familiar 7L': 24,
    'Dispensador Smart': 180
  };

  const discount = calcFreq === 'Semanal' ? 0.15 : calcFreq === 'Quincenal' ? 0.10 : 0;
  const basePrice = (prices[calcProduct] || 15) * calcQty;
  const finalPrice = basePrice * (1 - discount);

  return (
    <section id="productos" className="section">
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Catálogo de Hidratación</span>
          <h2 className="section-title">Productos de <span className="text-gradient">Máxima Pureza</span></h2>
          <p className="section-subtitle">
            Formatos adaptados a cada necesidad. Todos nuestros envases cumplen con los más altos estándares ecológicos e higiénicos.
          </p>
        </FadeIn>

        <div className="grid-4" style={{ marginBottom: '60px' }}>
          <FadeIn delay={100} className="glass-card product-card">
            <div>
              <span className="product-tag">Más Vendido</span>
              <div className="product-icon-wrap">💧</div>
              <h3 className="product-title">Bidón 20L Retornable</h3>
              <p className="product-desc">
                Ideal para el hogar y oficina. Agua purificada de 7 etapas con cero residuos de microplásticos.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">S/ 15.00</span>
              <button onClick={onOpenOrderModal} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Pedir
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="glass-card product-card">
            <div>
              <span className="product-tag">Portátil</span>
              <div className="product-icon-wrap">🥤</div>
              <h3 className="product-title">Pack Personal (12x625ml)</h3>
              <p className="product-desc">
                12 botellas ergonómicas con tapa deportiva. Perfectas para entrenar, viajar o la oficina.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">S/ 20.00</span>
              <button onClick={onOpenOrderModal} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Pedir
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="glass-card product-card">
            <div>
              <span className="product-tag">Familiar</span>
              <div className="product-icon-wrap">🪣</div>
              <h3 className="product-title">Pack 7L (3 Unidades)</h3>
              <p className="product-desc">
                Botellones prácticos descartables 100% reciclables con caño dispensador integrado.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">S/ 24.00</span>
              <button onClick={onOpenOrderModal} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Pedir
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={400} className="glass-card product-card">
            <div>
              <span className="product-tag">Equipamiento</span>
              <div className="product-icon-wrap">⚡</div>
              <h3 className="product-title">Dispensador Smart</h3>
              <p className="product-desc">
                Enfriamiento por compresor de alta eficiencia y calentador rápido para infusiones instantáneas.
              </p>
            </div>
            <div className="product-footer">
              <span className="product-price">S/ 180.00</span>
              <button onClick={onOpenOrderModal} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Pedir
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Interactive Order Calculator */}
        <div id="calculadora">
          <FadeIn className="calc-wrapper">
            <div className="calc-grid">
              <div>
                <h3 className="calc-title text-gradient">🧮 Calculadora de Consumo & Descuentos</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Elige tu plan de hidratación recurrente y obtén hasta <strong>15% de descuento</strong> automático en tus entregas programadas.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                    Selecciona el Producto:
                  </label>
                  <div className="option-selector">
                    {['Bidón 20L Retornable', 'Pack Personal (12x625ml)', 'Pack Familiar 7L', 'Dispensador Smart'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`opt-btn ${calcProduct === item ? 'active' : ''}`}
                        onClick={() => setCalcProduct(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                    Frecuencia de Recarga:
                  </label>
                  <div className="option-selector">
                    {[
                      { label: 'Entrega Única', value: 'Única' },
                      { label: 'Quincenal (-10%)', value: 'Quincenal' },
                      { label: 'Semanal (-15%)', value: 'Semanal' }
                    ].map((f) => (
                      <button
                        key={f.value}
                        type="button"
                        className={`opt-btn ${calcFreq === f.value ? 'active' : ''}`}
                        onClick={() => setCalcFreq(f.value)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                    Cantidad de Unidades:
                  </label>
                  <div className="qty-control">
                    <button type="button" className="qty-btn" onClick={() => setCalcQty(Math.max(1, calcQty - 1))}>-</button>
                    <span className="qty-val">{calcQty}</span>
                    <button type="button" className="qty-btn" onClick={() => setCalcQty(calcQty + 1)}>+</button>
                  </div>
                </div>
              </div>

              <div className="summary-box">
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: 700 }}>Resumen del Plan</h4>
                  <div className="summary-row">
                    <span>Producto:</span>
                    <strong style={{ color: 'white' }}>{calcProduct}</strong>
                  </div>
                  <div className="summary-row" style={{ marginTop: '8px' }}>
                    <span>Unidades:</span>
                    <strong style={{ color: 'white' }}>{calcQty} u.</strong>
                  </div>
                  <div className="summary-row" style={{ marginTop: '8px' }}>
                    <span>Frecuencia:</span>
                    <strong style={{ color: 'white' }}>{calcFreq}</strong>
                  </div>
                  {discount > 0 && (
                    <div className="summary-row" style={{ marginTop: '8px', color: 'var(--color-emerald)' }}>
                      <span>Descuento aplicado:</span>
                      <strong>{(discount * 100).toFixed(0)}% OFF</strong>
                    </div>
                  )}
                </div>

                <div>
                  <div className="summary-total">
                    <span>Total Estimado:</span>
                    <span>S/ {finalPrice.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={onOpenOrderModal}
                    className="btn btn-primary btn-large" 
                    style={{ width: '100%', marginTop: '16px' }}
                  >
                    🚀 Iniciar Plan de Entrega
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
