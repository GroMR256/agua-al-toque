'use client';
import Link from 'next/link';
import { 
  HotelIcon, 
  SproutIcon, 
  PickaxeIcon, 
  HardHatIcon, 
  FactoryIcon, 
  BuildingIcon, 
  ShieldCheckIcon, 
  HomeIcon,
  ArrowRightIcon
} from './Icons';

export default function SectorsGrid({ onOpenQuoteModal }) {
  const sectors = [
    {
      id: 'hoteles-y-restaurantes',
      title: 'Hoteles y restaurantes',
      icon: <HotelIcon size={24} />,
      desc: 'Abastecimiento continuo para evitar interrupciones en la atención al cliente, cocina y servicios.',
    },
    {
      id: 'agricultura',
      title: 'Agricultura',
      icon: <SproutIcon size={24} />,
      desc: 'Suministro constante para riego de auxilio, reservorios y operaciones agrícolas de exportación.',
    },
    {
      id: 'mineria',
      title: 'Minería',
      icon: <PickaxeIcon size={24} />,
      desc: 'Abastecimiento para proyectos mineros, operaciones en zonas de difícil acceso y campamentos.',
    },
    {
      id: 'construccion',
      title: 'Construcción',
      icon: <HardHatIcon size={24} />,
      desc: 'Suministro para obras civiles, campamentos temporales y control de polvo en frentes de trabajo.',
    },
    {
      id: 'industria',
      title: 'Industria',
      icon: <FactoryIcon size={24} />,
      desc: 'Abastecimiento programado para procesos industriales, torres de enfriamiento y plantas fabriles.',
    },
    {
      id: 'comercio-y-empresas',
      title: 'Comercio y empresas',
      icon: <BuildingIcon size={24} />,
      desc: 'Soluciones de suministro recurrente o de emergencia para garantizar continuidad del negocio.',
    },
    {
      id: 'instituciones',
      title: 'Instituciones',
      icon: <ShieldCheckIcon size={24} />,
      desc: 'Atención a entidades públicas, centros de salud, colegios e infraestructura del Estado.',
    },
    {
      id: 'hogares',
      title: 'Hogares y condominios',
      icon: <HomeIcon size={24} />,
      desc: 'Entrega de agua en cisterna ante cortes de servicio público o llenado de cisternas residenciales.',
    },
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-pro">Sectores que Atendemos</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Soluciones Adaptadas a Cada Industria
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Contamos con experiencia logística en diversos sectores de la economía nacional.
          </p>
        </div>

        <div className="grid-4">
          {sectors.map((sec) => (
            <div key={sec.id} className="card-pro" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="icon-wrapper" style={{ backgroundColor: 'rgba(15, 23, 42, 0.05)', color: 'var(--primary-navy)' }}>
                {sec.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                {sec.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>
                {sec.desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <Link href="/sectores" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-sky)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Ver sector <ArrowRightIcon size={14} />
                </Link>
                <button
                  onClick={() => onOpenQuoteModal(`Sector: ${sec.title}`)}
                  className="btn btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                >
                  Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
