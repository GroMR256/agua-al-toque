'use client';

export default function B2bTelemetryWidget() {
  return (
    <div className="purity-card" style={{ borderColor: 'rgba(0, 242, 254, 0.3)' }}>
      <div className="purity-header">
        <div>
          <span className="badge-glass">
            <span className="pulse-dot"></span> Control de Flotas & Despacho B2B
          </span>
        </div>
        <div className="status-indicator">
          <span>Operación 24/7 Activa</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '10px 0' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Volumen Despachado Hoy
        </div>
        <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--color-cyan)', lineHeight: 1.1 }}>
          480,000 <span style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Litros</span>
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--color-emerald)', fontWeight: 600, marginTop: '4px' }}>
          ▲ 16 Cisternas en ruta activa
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-box">
          <div className="metric-label">Capacidad Flota</div>
          <div className="metric-val" style={{ color: '#00F2FE' }}>30,000 L/Cisterna</div>
        </div>
        <div className="metric-box">
          <div className="metric-label">Norma Técnica</div>
          <div className="metric-val" style={{ color: '#4FACFE' }}>DS 031-MINSA</div>
        </div>
        <div className="metric-box">
          <div className="metric-label">Monitoreo GPS</div>
          <div className="metric-val" style={{ color: '#00E676' }}>Tiempo Real</div>
        </div>
      </div>

      <div style={{
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        textAlign: 'center',
        padding: '12px 14px',
        background: 'rgba(0, 242, 254, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 242, 254, 0.15)'
      }}>
        🚛 <strong>Suministro Continuo:</strong> Atención a minas, obras y plantas industriales sin interrupciones.
      </div>
    </div>
  );
}
