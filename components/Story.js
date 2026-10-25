import { PUBLIC_CONFIG } from '@/lib/contactConfig';

// Cifras del negocio (antes en TrustMetrics). Confirmar con el cliente antes de publicar.
export default function Story() {
  return (
    <section id="nosotros" className="chapter chapter--paper" data-ink="dark">
      <div className="frame">
        <h2 className="story-heading" data-reveal>Quiénes somos</h2>
        <div className="story" data-reveal style={{ '--reveal-delay': '80ms' }}>
          <p>
            <strong>Agua Al Toque</strong> es una empresa de transporte de agua en camiones cisterna con{' '}
            <span className="mark mark--lake">más de 10 años</span> trabajando en{' '}
            <span className="mark mark--ice">{PUBLIC_CONFIG.serviceArea}</span>. Tenemos{' '}
            <span className="mark mark--stone">4 camiones propios</span>, con cisternas de{' '}
            <span className="mark mark--lake">10, 15 y 30 m³</span>, con inspecciones sanitarias y mecánicas periódicas.
          </p>
          <p>
            Atendemos a obras que no pueden parar, a fundos en época seca, a campamentos mineros, a hoteles con un corte
            de agua en plena temporada y a familias que se quedaron sin servicio. Más de{' '}
            <span className="mark mark--ice">50 clientes</span> nos llaman cuando el agua tiene que llegar hoy, y
            también cuando la quieren cada semana, con{' '}
            <span className="mark mark--stone">contrato y factura</span>. Contestamos{' '}
            <span className="mark mark--lake">las 24 horas</span>.{' '}
            <a href="#contacto" className="story-close">Cuéntanos qué necesitas.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
