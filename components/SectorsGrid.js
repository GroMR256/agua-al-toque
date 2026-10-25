import Image from 'next/image';

// La cisterna habitual sale de las especificaciones de la flota (10, 15 y 30 m³)
const groups = [
  {
    title: 'Empresas y servicios',
    sectors: [
      {
        id: 'hoteles-y-restaurantes',
        title: 'Hoteles y restaurantes',
        desc: 'Que la cocina y las habitaciones no se queden sin agua en plena atención.',
        value: '10–15 m³',
      },
      {
        id: 'comercio-y-empresas',
        title: 'Comercio y empresas',
        desc: 'Entregas recurrentes o de emergencia para no cerrar el local.',
        value: '10–15 m³',
      },
      {
        id: 'instituciones',
        title: 'Instituciones',
        desc: 'Centros de salud, colegios y entidades públicas.',
        value: '10–15 m³',
      },
      {
        id: 'industria',
        title: 'Industria',
        desc: 'Procesos, torres de enfriamiento y plantas con consumo programado.',
        value: '15–30 m³',
      },
    ],
  },
  {
    title: 'Campo y obra',
    sectors: [
      {
        id: 'agricultura',
        title: 'Agricultura',
        desc: 'Riego de auxilio y reservorios de fundos agrícolas.',
        value: '15–30 m³',
      },
      {
        id: 'construccion',
        title: 'Construcción',
        desc: 'Obras civiles, campamentos y control de polvo en el frente.',
        value: '15 m³',
      },
      {
        id: 'mineria',
        title: 'Minería',
        desc: 'Campamentos y operaciones en zonas de acceso difícil.',
        value: '30 m³',
      },
    ],
  },
  {
    title: 'Casas',
    sectors: [
      {
        id: 'hogares',
        title: 'Hogares y condominios',
        desc: 'Llenado de cisternas y tanques cuando se corta el servicio público.',
        value: '10 m³',
      },
    ],
  },
];

export default function SectorsGrid() {
  return (
    <section id="sectores" className="chapter chapter--paper" data-ink="dark">
      <div className="frame grid sectors">
        <div className="sectors-list-wrap">
          <h2 className="display section-heading" data-reveal>A quién llevamos agua</h2>
          <ul className="sector-list">
            {groups.map((group) => (
              <li key={group.title} className="sector-group" data-reveal>
                <p className="sector-group-title">{group.title}</p>
                <ul style={{ listStyle: 'none' }}>
                  {group.sectors.map((sec) => (
                    <li key={sec.id} className="sector-row">
                      <span className="sector-dot" aria-hidden="true" />
                      <h3>{sec.title}</h3>
                      <span className="sector-value tabular">
                        <span className="visually-hidden">Cisterna habitual: </span>
                        {sec.value}
                      </span>
                      <p>{sec.desc}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <figure className="sectors-figure" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <Image
            src="/images/valle-huarmey.jpg"
            alt="Chacras verdes y un caserío en el valle del río Huarmey, entre cerros áridos"
            width={1611}
            height={907}
            sizes="(max-width: 899px) 100vw, 40vw"
          />
          <figcaption className="photo-caption muted-on-paper">
            Valle del río Huarmey, tierra de fundos y chacras.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
