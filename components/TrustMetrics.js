export default function TrustMetrics() {
  const metrics = [
    { value: '+10', label: 'Años de Experiencia' },
    { value: '4', label: 'Camiones Cisterna' },
    { value: '50 m³', label: 'Capacidad Operativa' },
    { value: '+50', label: 'Clientes Atendidos' },
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
