'use client';

export default function AboutSection() {
  return (
    <section id="nosotros" className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-pro">Nuestra Empresa</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Sobre Agua Al Toque
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Una empresa sólida dedicada al suministro, transporte y logística de agua mediante camiones cisterna.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '16px' }}>
              Quiénes Somos
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Agua Al Toque nació para responder a la necesidad crítica de abastecimiento continuo de agua en sectores clave como la construcción, agricultura, minería, hotelería e industrias.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              No nos presentamos simplemente como una "vendedora de agua", sino como una empresa integral de soluciones de abastecimiento y logística hídrica con flota propia de camiones cisterna equipados para responder tanto a necesidades programadas como a emergencias.
            </p>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid #FFFFFF' }}>
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
              alt="Flota de cisternas de Agua Al Toque"
              style={{ width: '100%', height: '360px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: '40px' }}>
          <div className="card-pro" style={{ backgroundColor: 'var(--bg-light)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
              Nuestra Experiencia
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Años operando en rutas urbanas, industriales y rurales en [ZONA DE COBERTURA / CIUDAD], respaldados por miles de m³ entregados puntualmente.
            </p>
          </div>

          <div className="card-pro" style={{ backgroundColor: 'var(--bg-light)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
              Nuestra Misión
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Garantizar que ninguna empresa, fundo u hogar se quede sin el recurso hídrico esencial mediante una logística de transporte transparente, ágil y segura.
            </p>
          </div>

          <div className="card-pro" style={{ backgroundColor: 'var(--bg-light)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
              Nuestros Valores
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Puntualidad en la entrega, transparencia comercial, cuidado de las unidades y compromiso con el éxito operativo de nuestros clientes.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-light)', padding: '32px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
          <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '8px' }}>
            Nuestro Equipo
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Contamos con conductores profesionales con amplia experiencia en el manejo de unidades pesadas, operadores de bomba capacitados y personal de coordinación comercial enfocado en resolver tus requerimientos con cercanía y eficiencia.
          </p>
        </div>
      </div>
    </section>
  );
}
