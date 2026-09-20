'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import { 
  WaterIcon, 
  BuildingIcon, 
  SproutIcon, 
  HardHatIcon, 
  PickaxeIcon, 
  TruckIcon, 
  MapPinIcon, 
  EmergencyIcon,
  FileTextIcon
} from '../../components/Icons';

export default function ServiciosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Suministro de Agua');

  const handleOpenModal = (srv = 'Suministro de agua') => {
    setSelectedService(srv);
    setIsModalOpen(true);
  };

  const servicesDetail = [
    {
      id: 'suministro-de-agua',
      title: 'Suministro de agua',
      icon: <WaterIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      description: 'Abastecimiento mediante camiones cisterna para necesidades programadas o puntuales en cualquier punto acordado.',
      applications: 'Llenado de cisternas subterráneas, reservorios de agua, tanques elevados y abastecimiento puntual.',
      clientType: 'Empresas, Comercios, Particular / Hogar e Instituciones.',
    },
    {
      id: 'abastecimiento-empresarial',
      title: 'Abastecimiento empresarial',
      icon: <BuildingIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Contratos y entregas recurrentes para empresas que necesitan garantizar la continuidad operativa sin interrupciones.',
      applications: 'Plantas industriales, cadenas hoteleras, instalaciones comerciales y complejos administrativos.',
      clientType: 'Empresas medianas y grandes, corporativos, parques industriales.',
    },
    {
      id: 'agua-para-agricultura',
      title: 'Agua para agricultura',
      icon: <SproutIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
      description: 'Abastecimiento de fundos, reservorios agrícolas y operaciones agronómicas en periodos de auxilio o sequía.',
      applications: 'Riego de auxilio hídrico, llenado de reservorios de geomembrana y abastecimiento en establos.',
      clientType: 'Agroexportadores, agroindustrias y fundos agrícolas.',
    },
    {
      id: 'agua-para-construccion',
      title: 'Agua para construcción',
      icon: <HardHatIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
      description: 'Suministro técnico para obras viales, campamentos temporales, compactación de tierras y curado de concreto.',
      applications: 'Compactación de suelos, curado de estructuras de concreto, control de polvo y consumo de obra.',
      clientType: 'Constructoras, contratistas generales y consorcios viales.',
    },
    {
      id: 'agua-para-mineria',
      title: 'Agua para minería y proyectos',
      icon: <PickaxeIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      description: 'Abastecimiento para proyectos mineros, operaciones en zonas aisladas y campamentos de exploración.',
      applications: 'Campamentos de exploración, supresión de polvo en accesos mineros y soporte operativo.',
      clientType: 'Empresas mineras, contratistas mineros y proyectos energéticos.',
    },
    {
      id: 'alquiler-de-cisternas',
      title: 'Alquiler de cisternas',
      icon: <TruckIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      description: 'Alquiler de unidades cisterna por día, semana o mes para operaciones que requieren transporte autónomo.',
      applications: 'Operación continua en frentes de obra, retén en plantas industriales y proyectos especiales.',
      clientType: 'Empresas de construcción, minería, eventos y gestión ambiental.',
    },
    {
      id: 'transporte-de-agua',
      title: 'Transporte de agua',
      icon: <MapPinIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Servicio de transporte y flete especializado cuando el cliente ya dispone del recurso hídrico en fuente.',
      applications: 'Traslado de punto a punto, distribución entre sedes y logística de flete especializado.',
      clientType: 'Empresas con pozo propio o licencias hídricas independientes.',
    },
    {
      id: 'abastecimiento-de-emergencia',
      title: 'Abastecimiento de emergencia',
      icon: <EmergencyIcon size={28} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: 'Entregas prioritarias e inmediatas ante cortes imprevistos, averías mecánicas en bombas o contingencias.',
      applications: 'Respaldo inmediato en redes de emergencia, hospitales, hoteles y condominios.',
      clientType: 'Hoteles, residenciales, hospitales, industrias con parada de planta imprevista.',
    },
  ];

  return (
    <main>
      <Header onOpenQuoteModal={() => handleOpenModal()} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Especialización Logística
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Servicios de Abastecimiento & Transporte de Agua
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Ofrecemos soluciones integrales adaptadas a cada necesidad hídrica empresarial o particular.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {servicesDetail.map((srv) => (
            <div 
              key={srv.id} 
              id={srv.id} 
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
              <div style={{ height: '340px', overflow: 'hidden' }}>
                <img
                  src={srv.image}
                  alt={srv.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                    {srv.icon}
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                    {srv.title}
                  </h2>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {srv.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'var(--bg-light)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    <strong>Aplicaciones principales:</strong> {srv.applications}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    <strong>Tipo de cliente ideal:</strong> {srv.clientType}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleOpenModal(srv.title)}
                    className="btn btn-primary"
                  >
                    <FileTextIcon size={18} /> Solicitar cotización para {srv.title}
                  </button>
                </div>
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
        defaultService={selectedService}
      />
      <FloatingContactButtons onOpenQuoteModal={() => handleOpenModal()} />
    </main>
  );
}
