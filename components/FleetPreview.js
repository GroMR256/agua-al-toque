'use client';
import Link from 'next/link';
import { TruckIcon, ArrowRightIcon, ShieldCheckIcon } from './Icons';

export default function FleetPreview({ onOpenQuoteModal }) {
  const fleetItems = [
    {
      title: 'Camión Cisterna 10 m³ (10,000 Litros)',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      specs: 'Ideal para accesos urbanos, comercios, hoteles pequeños y emergencias residenciales.',
      capacity: '10,000 Litros (10 m³)',
      pump: 'Bomba impulsora de alto flujo incluida'
    },
    {
      title: 'Camión Cisterna 15 m³ (15,000 Litros)',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      specs: 'Unidad intermedia versátil para construcciones, fundos agrícolas y clientes corporativos.',
      capacity: '15,000 Litros (15 m³)',
      pump: 'Mangueras de descarga rápida de 50 metros'
    },
    {
      title: 'Camión Cisterna 30 m³ (30,000 Litros)',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      specs: 'Gran capacidad de transporte pesado para operaciones mineras, plantas industriales y reservorios.',
      capacity: '30,000 Litros (30 m³)',
      pump: 'Cisterna sanitizada de acero inoxidable'
    }
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          <span className="badge-pro">Nuestra Flotas de Cisternas</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 className="section-title">
                Capacidad Operativa & Equipamiento Técnico
              </h2>
              <p className="section-subtitle">
                Flota propia de unidades acondicionadas y mantenidas bajo estrictos estándares de limpieza y seguridad.
              </p>
            </div>
            <Link href="/flota" className="btn btn-secondary">
              <TruckIcon size={18} /> Conoce nuestra flota completa <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        <div className="grid-3">
          {fleetItems.map((item, idx) => (
            <div key={idx} className="card-pro" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'var(--primary-navy)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  {item.capacity}
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                  {item.specs}
                </p>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheckIcon size={16} color="var(--accent-emerald)" /> {item.pump}
                </div>

                <button
                  onClick={() => onOpenQuoteModal(`Alquiler/Servicio de ${item.title}`)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Solicitar disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
