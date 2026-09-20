'use client';
import { useState } from 'react';

export default function WaterMetricsWidget() {
  const [activeTab, setActiveTab] = useState('purity');

  return (
    <div className="purity-card">
      <div className="purity-header">
        <div>
          <span className="badge-glass">
            <span className="pulse-dot"></span> Telemetría de Calidad
          </span>
        </div>
        <div className="status-indicator">
          <span>Ósmosis Activa 99.98%</span>
        </div>
      </div>

      <div className="gauge-ring">
        <svg className="gauge-circle" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="100%" stopColor="#7F00FF" />
            </linearGradient>
          </defs>
          <circle className="gauge-bg" cx="80" cy="80" r="70" />
          <circle className="gauge-fill" cx="80" cy="80" r="70" />
        </svg>
        <div className="gauge-content">
          <div className="gauge-num">12</div>
          <div className="gauge-unit">PPM TDS (Ultra Puro)</div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-box">
          <div className="metric-label">pH Alcalino</div>
          <div className="metric-val" style={{ color: '#00F2FE' }}>7.4 Balanced</div>
        </div>
        <div className="metric-box">
          <div className="metric-label">Minerales</div>
          <div className="metric-val" style={{ color: '#4FACFE' }}>Esenciales</div>
        </div>
        <div className="metric-box">
          <div className="metric-label">Luz UV</div>
          <div className="metric-val" style={{ color: '#00E676' }}>Esterilizado</div>
        </div>
      </div>

      <div style={{
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        textAlign: 'center',
        padding: '10px 14px',
        background: 'rgba(0, 242, 254, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 242, 254, 0.15)'
      }}>
        ⚡ <strong>Último análisis:</strong> Hace 4 minutos • Certificado de pureza en tiempo real
      </div>
    </div>
  );
}
