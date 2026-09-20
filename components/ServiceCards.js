'use client';
import Link from 'next/link';
import { 
  WaterIcon, 
  BuildingIcon, 
  SproutIcon, 
  HardHatIcon, 
  PickaxeIcon, 
  TruckIcon, 
  MapPinIcon, 
  EmergencyIcon,
  ArrowRightIcon 
} from './Icons';

export default function ServiceCards({ onOpenQuoteModal }) {
  const services = [
    {
      id: 'suministro-de-agua',
      icon: <WaterIcon size={24} />,
      title: 'Suministro de agua',
      desc: 'Abastecimiento mediante cisternas para necesidades programadas o puntuales en cualquier punto acordado.',
    },
    {
      id: 'abastecimiento-empresarial',
      icon: <BuildingIcon size={24} />,
      title: 'Abastecimiento empresarial',
      desc: 'Contratos y entregas recurrentes para empresas que necesitan garantizar continuidad en su operación.',
    },
    {
      id: 'agua-para-agricultura',
      icon: <SproutIcon size={24} />,
      title: 'Agua para agricultura',
      desc: 'Abastecimiento continuo de fundos, reservorios y operaciones agrícolas de alta escala.',
    },
    {
      id: 'agua-para-construccion',
      icon: <HardHatIcon size={24} />,
      title: 'Agua para construcción',
      desc: 'Suministro para obras, campamentos de construcción, curado de concreto y compactación de suelos.',
    },
    {
      id: 'agua-para-mineria',
      icon: <PickaxeIcon size={24} />,
      title: 'Agua para minería y proyectos',
      desc: 'Abastecimiento especializado para proyectos mineros, operaciones en zonas remotas y campamentos.',
    },
    {
      id: 'alquiler-de-cisternas',
      icon: <TruckIcon size={24} />,
      title: 'Alquiler de cisternas',
      desc: 'Alquiler de unidades de cisterna para operaciones que requieren transporte y almacenamiento temporal.',
    },
    {
      id: 'transporte-de-agua',
      icon: <MapPinIcon size={24} />,
      title: 'Transporte de agua',
      desc: 'Servicio de transporte y flete logístico cuando la empresa cliente ya dispone de la fuente hídrica.',
    },
    {
      id: 'abastecimiento-de-emergencia',
      icon: <EmergencyIcon size={24} />,
      title: 'Abastecimiento de emergencia',
      desc: 'Entregas prioritarias e inmediatas ante cortes imprevistos, fallas mecánicas o falta repentina de agua.',
    },
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-pro">Nuestros Servicios Principales</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Soluciones de Abastecimiento & Logística de Agua
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            No somos simplemente vendedores de agua; ofrecemos una gestión completa de transporte, cisternas y entrega garantizada.
          </p>
        </div>

        <div className="grid-4">
          {services.map((srv) => (
            <div key={srv.id} className="card-pro">
              <div className="icon-wrapper">
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '10px' }}>
                {srv.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '24px', flex: 1 }}>
                {srv.desc}
              </p>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <Link 
                  href={`/servicios#${srv.id}`}
                  style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-sky)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Conocer más <ArrowRightIcon size={14} />
                </Link>
                <button
                  onClick={() => onOpenQuoteModal(srv.title)}
                  style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}
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
