'use client';
import { ArrowRightIcon } from './Icons';

export default function ServiceCards({ onOpenQuoteModal }) {
  const services = [
    {
      id: 'suministro-de-agua',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      title: 'Suministro de agua',
      desc: 'Abastecimiento mediante cisternas para necesidades programadas o puntuales en cualquier punto acordado.',
    },
    {
      id: 'abastecimiento-empresarial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      title: 'Abastecimiento empresarial',
      desc: 'Contratos y entregas recurrentes para empresas que necesitan garantizar continuidad en su operación.',
    },
    {
      id: 'agua-para-agricultura',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
      title: 'Agua para agricultura',
      desc: 'Abastecimiento continuo de fundos, reservorios y operaciones agrícolas de alta escala.',
    },
    /*
    {
      id: 'agua-para-construccion',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=80',
      title: 'Agua para construcción',
      desc: 'Suministro para obras, campamentos de construcción, curado de concreto y compactación de suelos.',
    },*/
    {
      id: 'agua-para-mineria',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
      title: 'Agua para minería y proyectos',
      desc: 'Abastecimiento especializado para proyectos mineros, operaciones en zonas remotas y campamentos.',
    },
    {
      id: 'alquiler-de-cisternas',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
      title: 'Alquiler de cisternas',
      desc: 'Alquiler de unidades de cisterna para operaciones que requieren transporte y almacenamiento temporal.',
    },

    {
      id: 'abastecimiento-de-emergencia',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      title: 'Abastecimiento de emergencia',
      desc: 'Entregas prioritarias e inmediatas ante cortes imprevistos, fallas mecánicas o falta repentina de agua.',
    },
  ];

  return (
    <section id="servicios" className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Soluciones de Abastecimiento & Logística de Agua
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            No somos simplemente vendedores de agua; ofrecemos una gestión completa de transporte, cisternas y entrega garantizada.
          </p>
        </div>

        <div className="grid-3">
          {services.map((srv) => (
            <div key={srv.id} className="card-pro" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={srv.image}
                  alt={srv.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '10px' }}>
                  {srv.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>
                  {srv.desc}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                  <button
                    onClick={() => onOpenQuoteModal(srv.title)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Solicitar cotización
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
