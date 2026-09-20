'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function About() {
  const [regionQuery, setRegionQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState(null);

  const coveredRegions = [
    'lima', 'callao', 'ica', 'chincha', 'pisco', 'nazca',
    'arequipa', 'moquegua', 'tacna', 'trujillo', 'chimbote',
    'huancayo', 'pasco', 'junín', 'junin', 'cusco', 'cajamarca'
  ];

  const handleRegionCheck = (e) => {
    e.preventDefault();
    if (!regionQuery.trim()) return;
    const clean = regionQuery.toLowerCase().trim();
    const isAvailable = coveredRegions.some(r => r.includes(clean) || clean.includes(r));
    if (isAvailable) {
      setSearchStatus({ available: true, message: `¡Excelente! Contamos con base logística activa y despacho de cisternas en ${regionQuery}.` });
    } else {
      setSearchStatus({ available: false, message: `Podemos desplegar una planta móvil o convoy de cisternas para ${regionQuery} mediante contrato especial.` });
    }
  };

  return (
    <section id="nosotros" className="section" style={{ background: 'rgba(11, 19, 43, 0.4)' }}>
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Ingeniería & Logística Corporativa</span>
          <h2 className="section-title">La Garantía de Operación <span className="text-gradient">Agua Al Toque B2B</span></h2>
          <p className="section-subtitle">
            Infraestructura técnica diseñada para respaldar la continuidad de empresas mineras, agroindustriales y de infraestructura a nivel nacional.
          </p>
        </FadeIn>

        <div className="grid-4">
          <FadeIn delay={100} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(0, 242, 254, 0.1)' }}>📡</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Telemetría IoT en Ruta</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Seguimiento por GPS y precintos electrónicos de seguridad en cada cisterna para evitar manipulaciones.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(127, 0, 255, 0.1)' }}>📜</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Cumplimiento DS 031</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Certificación sanitaria oficial acorde a los requisitos de DIGESA, MINSA, OEFA y auditorías laborales.
            </p>
          </FadeIn>

          <FadeIn delay={300} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(0, 230, 118, 0.1)' }}>🚨</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Respuesta de Emergencia</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Unidades en retén permanente para despachos de urgencia en menos de 3 horas ante imprevistos hídricos.
            </p>
          </FadeIn>

          <FadeIn delay={400} className="glass-card">
            <div className="product-icon-wrap" style={{ background: 'rgba(255, 179, 0, 0.1)' }}>🏦</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Crédito Corporativo</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Facilidades de pago a 30 y 60 días para órdenes de compra institucionales y licitaciones del Estado.
            </p>
          </FadeIn>
        </div>

        {/* Regional Coverage Checker */}
        <FadeIn delay={500} style={{ marginTop: '70px' }}>
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
            <span className="badge-glass" style={{ marginBottom: '12px' }}>📍 Cobertura Logística Nacional</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }} className="text-gradient">
              ¿Llegamos a la ubicación de tu proyecto o planta?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '0 auto 24px auto' }}>
              Ingresa la provincia, región o zona de tu campamento/obra para verificar disponibilidad de flota.
            </p>

            <form onSubmit={handleRegionCheck} className="coverage-box">
              <input
                type="text"
                placeholder="Ej. Lima, Ica, Arequipa, Trujillo, Junín..."
                value={regionQuery}
                onChange={(e) => {
                  setRegionQuery(e.target.value);
                  setSearchStatus(null);
                }}
                className="glass-input"
              />
              <button type="submit" className="btn btn-primary">
                Verificar Cobertura
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
