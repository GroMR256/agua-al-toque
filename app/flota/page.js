'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import { TruckIcon, ShieldCheckIcon, FileTextIcon, ClockIcon } from '../../components/Icons';

export default function FlotaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('Cisterna 10 m³');

  const handleOpenModal = (unitName = 'Cisterna 10 m³') => {
    setSelectedUnit(unitName);
    setIsModalOpen(true);
  };

  const fleetUnits = [
    {
      name: 'Unidad Cisterna Ligera 10 m³',
      capacity: '10,000 Litros (10 m³)',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      serviceType: 'Urbano, Hoteles, Comercios, Residencial',
      availability: 'Disponible 24/7 (Despacho inmediato)',
      maintenance: 'Programa preventivo cada 5,000 km y lavado sanitizado diario',
      equipment: 'Bomba motobomba de alta presión, mangueras de 50m, acoples rápidos helicoidales',
      description: 'Ideal para maniobras en calles estrechas y zonas de acceso limitado en áreas urbanas o comerciales.'
    },
    {
      name: 'Unidad Cisterna Mediana 15 m³',
      capacity: '15,000 Litros (15 m³)',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      serviceType: 'Construcción, Obras Viales, Fundos Agrícolas',
      availability: 'Disponible para contratos diarios y semanales',
      maintenance: 'Certificación técnica semestral e inspección de estanqueidad',
      equipment: 'Bomba impulsora de 3 pulgadas, carrete de manguera de 70m, rociadores traseros para tierra',
      description: 'Unidad de gran versatilidad para obras en construcción, humedecimiento de suelos y riego agrícola.'
    },
    {
      name: 'Unidad Cisterna Pesada 30 m³',
      capacity: '30,000 Litros (30 m³)',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      serviceType: 'Minería, Plantas Industriales, Reservorios Grandes',
      availability: 'Disponible para operaciones continuas en sitio',
      maintenance: 'Estándar minero e inspecciones de seguridad laboral periódicas',
      equipment: 'Tanque de acero inoxidable de grado alimenticio, bomba de descarga masiva, sistema GPS',
      description: 'Diseñada para el transporte pesado de gran escala en proyectos mineros, industrias y campamentos.'
    }
  ];

  return (
    <main>
      <Header onOpenQuoteModal={() => handleOpenModal()} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Capacidad Logística Propia
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Nuestra Flota de Camiones Cisterna
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Conoce el equipamiento técnico, capacidades y estándares de mantenimiento de nuestra flota propia.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {fleetUnits.map((unit, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0'
              }}
              className="grid-2"
            >
              <div style={{ height: '380px', overflow: 'hidden' }}>
                <img
                  src={unit.image}
                  alt={unit.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge-pro">
                    <TruckIcon size={14} /> {unit.capacity}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                    ● {unit.availability}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                  {unit.name}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '20px', lineHeight: 1.5 }}>
                  {unit.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'var(--bg-light)', padding: '16px', borderRadius: '8px', marginBottom: '24px', fontSize: '0.88rem' }}>
                  <div><strong>Tipo de servicio:</strong> {unit.serviceType}</div>
                  <div><strong>Equipamiento técnico:</strong> {unit.equipment}</div>
                  <div><strong>Mantenimiento y limpieza:</strong> {unit.maintenance}</div>
                </div>

                <button
                  onClick={() => handleOpenModal(unit.name)}
                  className="btn btn-primary"
                >
                  <FileTextIcon size={18} /> Consultar disponibilidad de {unit.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta onOpenQuoteModal={() => handleOpenModal()} />
      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={`Unidad: ${selectedUnit}`}
      />
      <FloatingContactButtons onOpenQuoteModal={() => handleOpenModal()} />
    </main>
  );
}
