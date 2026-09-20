'use client';

export default function TrustMetrics() {
  const metrics = [
    { value: '+[X]', label: 'Años de Experiencia' },
    { value: '[X]', label: 'Camiones Cisterna' },
    { value: '[X] m³', label: 'Capacidad Operativa' },
    { value: '+[X]', label: 'Clientes Atendidos' },
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-val">{m.value}</div>
              <div className="metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
