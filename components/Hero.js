'use client';
import B2bTelemetryWidget from './B2bTelemetryWidget';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div>
              <span className="badge-glass">
                🏢 Suministro Industrial & Logística B2B 24/7
              </span>
            </div>
            
            <h1 className="hero-title">
              Suministro Masivo de Agua Tratada para el <span className="text-gradient">Sector B2B e Industrial</span>
            </h1>

            <p className="hero-subtitle">
              Garantizamos continuidad operativa a gran escala. Abastecimiento en flota de cisternas de 10,000L a 30,000L y plantas de ósmosis inversa para minas, agro, construcción, hoteles y entidades públicas.
            </p>

            <div className="hero-actions">
              <button 
                onClick={() => onOpenQuoteModal()} 
                className="btn btn-primary btn-large"
              >
                💼 Cotización Corporativa B2B
              </button>
              <a 
                href="#sectores" 
                className="btn btn-secondary btn-large"
              >
                🚜 Ver Sectores Atendidos
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value text-gradient">+5M Litros</span>
                <span className="stat-label">Suministro Mensual</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">30,000 L</span>
                <span className="stat-label">Capacidad por Cisterna</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">DS 031-MINSA</span>
                <span className="stat-label">Certificación Oficial</span>
              </div>
            </div>
          </div>

          <div>
            <B2bTelemetryWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
