import Image from 'next/image';

export default function SectorsGrid() {
  const sectors = [
    {
      id: 'hoteles-y-restaurantes',
      title: 'Hoteles y restaurantes',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      desc: 'Abastecimiento continuo para evitar interrupciones en la atención al cliente, cocina y servicios.',
    },
    {
      id: 'agricultura',
      title: 'Agricultura',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
      desc: 'Suministro constante para riego de auxilio, reservorios y operaciones agrícolas de exportación.',
    },
    {
      id: 'mineria',
      title: 'Minería',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
      desc: 'Abastecimiento para proyectos mineros, operaciones en zonas de difícil acceso y campamentos.',
    },
    {
      id: 'construccion',
      title: 'Construcción',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=80',
      desc: 'Suministro para obras civiles, campamentos temporales y control de polvo en frentes de trabajo.',
    },
    {
      id: 'industria',
      title: 'Industria',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      desc: 'Abastecimiento programado para procesos industriales, torres de enfriamiento y plantas fabriles.',
    },
    {
      id: 'comercio-y-empresas',
      title: 'Comercio y empresas',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      desc: 'Soluciones de suministro recurrente o de emergencia para garantizar continuidad del negocio.',
    },
    {
      id: 'instituciones',
      title: 'Instituciones',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      desc: 'Atención a entidades públicas, centros de salud, colegios e infraestructura del Estado.',
    },
    {
      id: 'hogares',
      title: 'Hogares y condominios',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      desc: 'Entrega de agua en cisterna ante cortes de servicio público o llenado de cisternas residenciales.',
    },
  ];

  return (
    <section id="sectores" className="section" style={{ padding: '90px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Experiencia Adaptada a Cada Industria
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Contamos con experiencia logística en diversos sectores de la economía nacional.
          </p>
        </div>

        <div className="grid-4">
          {sectors.map((sec) => (
            <div key={sec.id} className="card-pro" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                  {sec.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
