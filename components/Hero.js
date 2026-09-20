'use client';
import WaterMetricsWidget from './WaterMetricsWidget';

export default function Hero({ onOpenOrderModal }) {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div>
              <span className="badge-glass">
                💎 Filtrado Molecular de 7 Etapas
              </span>
            </div>
            
            <h1 className="hero-title">
              Agua Ultra Pura & Delivery <span className="text-gradient">al Instante</span>
            </h1>

            <p className="hero-subtitle">
              Siente la frescura absoluta con nuestra agua purificada por ósmosis inversa. Telemetría de pureza en tiempo real y entrega garantizada a tu puerta en menos de 45 minutos.
            </p>

            <div className="hero-actions">
              <button 
                onClick={onOpenOrderModal} 
                className="btn btn-primary btn-large"
              >
                ⚡ Pedir Agua al Toque
              </button>
              <a 
                href="#calculadora" 
                className="btn btn-secondary btn-large"
              >
                🧮 Calcular Pedido
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value text-gradient">99.98%</span>
                <span className="stat-label">Pureza Molécular</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">&lt; 45 min</span>
                <span className="stat-label">Tiempo Promedio</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">+18.5k</span>
                <span className="stat-label">Bidones Entregados</span>
              </div>
            </div>
          </div>

          <div>
            <WaterMetricsWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
