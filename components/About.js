'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function About() {
  const [districtQuery, setDistrictQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState(null);

  const coveredDistricts = [
    'miraflores', 'san isidro', 'surco', 'san borja', 'la molina',
    'barranco', 'magdalena', 'jesús maría', 'jesus maria', 'lince',
    'pueblo libre', 'san miguel', 'san isidro', 'surquillo', 'callao'
  ];

  const handleDistrictCheck = (e) => {
    e.preventDefault();
    if (!districtQuery.trim()) return;
    const clean = districtQuery.toLowerCase().trim();
    const isAvailable = coveredDistricts.some(d => d.includes(clean) || clean.includes(d));
    if (isAvailable) {
      setSearchStatus({ available: true, message: `¡Excelente! Contamos con cobertura exprés en ${districtQuery} (< 45 mins).` });
    } else {
      setSearchStatus({ available: false, message: `Llegamos a ${districtQuery} en horario programado (consúltanos por WhatsApp).` });
    }
  };

  return (
    <section id="nosotros" className="section" style={{ background: 'rgba(11, 19, 43, 0.4)' }}>
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Tecnología & Pureza</span>
          <h2 className="section-title">El Estándar de Pureza <span className="text-gradient">Agua Al Toque</span></h2>
          <p className="section-subtitle">
            Combinamos ingeniería de filtrado molecular con logística inteligente para llevar el agua más pura a tu vida diaria.
          </p>
        </FadeIn>

        <div className="grid-4">
          <FadeIn delay={100} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(0, 242, 254, 0.1)' }}>🔬</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Ósmosis Inversa 7x</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Filtramos partículas hasta de 0.0001 micras, removiendo metales pesados, sales e impurezas de raíz.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(127, 0, 255, 0.1)' }}>⚡</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Entrega &lt; 45 Mins</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Red de repartidores hiperlocales geolocalizados para asegurar que nunca te quedes sin agua pura.
            </p>
          </FadeIn>

          <FadeIn delay={300} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(0, 230, 118, 0.1)' }}>🛡️</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>BPA-Free & Luz UV</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Envases policarbonato grado médico esterilizados con radiación ultravioleta en cada ciclo de llenado.
            </p>
          </FadeIn>

          <FadeIn delay={400} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(255, 179, 0, 0.1)' }}>🌱</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>100% Retornable</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Sistema de economía circular que reduce miles de plásticos de un solo uso en nuestro planeta.
            </p>
          </FadeIn>
        </div>

        {/* Coverage Checker Widget */}
        <FadeIn delay={500} style={{ marginTop: '70px' }}>
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
            <span className="badge-glass" style={{ marginBottom: '12px' }}>📍 Cobertura de Delivery</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }} className="text-gradient">
              ¿Llegamos a tu distrito?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 24px auto' }}>
              Ingresa el nombre de tu distrito para verificar si cuentas con tiempo de entrega garantizado.
            </p>

            <form onSubmit={handleDistrictCheck} className="coverage-box">
              <input
                type="text"
                placeholder="Ej. Miraflores, San Isidro, Surco..."
                value={districtQuery}
                onChange={(e) => {
                  setDistrictQuery(e.target.value);
                  setSearchStatus(null);
                }}
                className="glass-input"
              />
              <button type="submit" className="btn btn-primary">
                Verificar
              </button>
            </form>

            {searchStatus && (
              <div style={{
                marginTop: '20px',
                padding: '14px 20px',
                borderRadius: '16px',
                background: searchStatus.available ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 179, 0, 0.15)',
                border: `1px solid ${searchStatus.available ? 'rgba(0, 230, 118, 0.4)' : 'rgba(255, 179, 0, 0.4)'}`,
                color: searchStatus.available ? '#00E676' : '#FFB300',
                display: 'inline-block',
                fontWeight: 600
              }}>
                {searchStatus.message}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
