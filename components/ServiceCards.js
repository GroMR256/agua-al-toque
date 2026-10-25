'use client';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

const services = [
  {
    id: 'suministro-de-agua',
    title: 'Suministro de agua',
    desc: 'Una cisterna para una necesidad puntual o programada, descargada en el punto que acordemos.',
  },
  {
    id: 'abastecimiento-empresarial',
    title: 'Abastecimiento empresarial',
    desc: 'Entregas recurrentes con contrato, orden de compra y factura, para que tu operación no se detenga.',
  },
  {
    id: 'agua-para-agricultura',
    title: 'Agua para agricultura',
    desc: 'Riego de auxilio y llenado de reservorios para fundos, en temporada seca o cuando falle el canal.',
  },
  {
    id: 'agua-para-mineria',
    title: 'Agua para minería y proyectos',
    desc: 'Abastecimiento de campamentos y frentes de trabajo en zonas alejadas o de acceso difícil.',
  },
  {
    id: 'alquiler-de-cisternas',
    title: 'Alquiler de cisternas',
    desc: 'La unidad con chofer por días, semanas o meses, para transporte o almacenamiento temporal en obra.',
  },
  {
    id: 'abastecimiento-de-emergencia',
    title: 'Abastecimiento de emergencia',
    desc: 'Despacho prioritario ante un corte, una bomba malograda o un tanque que se vació sin aviso.',
  },
];

export default function ServiceCards({ onOpenQuoteModal }) {
  const { openQuoteModal } = useQuoteModal();

  const handleQuoteClick = (title) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(title);
    } else {
      openQuoteModal(title);
    }
  };

  return (
    <section id="servicios" className="chapter chapter--coal" data-ink="paper">
      <div className="frame">
        <div className="grid services-head">
          <h2 className="display section-heading" data-reveal>Lo que hacemos</h2>
          <p className="section-intro muted-on-coal" data-reveal style={{ '--reveal-delay': '80ms' }}>
            No vendemos bidones. Movemos agua por metro cúbico: transporte, cisterna y descarga, con o sin contrato.
          </p>
        </div>

        <ul className="service-list">
          {services.map((srv, idx) => (
            <li key={srv.id} className="service-row" data-reveal style={{ '--reveal-delay': `${(idx % 2) * 70}ms` }}>
              <h3 className="display service-name">{srv.title}</h3>
              <div className="service-body">
                <p>{srv.desc}</p>
                <button
                  type="button"
                  onClick={() => handleQuoteClick(srv.title)}
                  className="btn btn-ghost"
                  aria-label={`Solicitar cotización: ${srv.title}`}
                >
                  <span>Solicitar cotización</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
