'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import { 
  HotelIcon, 
  SproutIcon, 
  PickaxeIcon, 
  HardHatIcon, 
  FactoryIcon, 
  BuildingIcon, 
  HomeIcon,
  FileTextIcon,
  WhatsAppIcon
} from '../../components/Icons';

export default function SectoresPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState('Hoteles y restaurantes');

  const handleOpenModal = (sectorName = 'Hoteles y restaurantes') => {
    setSelectedSector(sectorName);
    setIsModalOpen(true);
  };

  const sectorsDetail = [
    {
      id: 'hoteles-y-restaurantes',
      title: 'Hoteles y restaurantes',
      icon: <HotelIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: 'Abastecimiento continuo para evitar interrupciones en la operación, cocinas, lavanderías y servicios sanitarios.',
      details: 'Garantizamos agua en cisterna para mantener estándares de calidad y respuesta inmediata ante cualquier falla del suministro público en hoteles, resorts y complejos gastronómicos.',
      ctaText: 'Solicitar plan de agua para hoteles y restaurantes'
    },
    {
      id: 'agricultura',
      title: 'Agricultura',
      icon: <SproutIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
      description: 'Agua para riego de auxilio, llenado de reservorios de geomembrana y operaciones en fundos agrícolas.',
      details: 'Suministramos grandes volúmenes de agua mediante flotas de cisternas de 30 m³ para proteger cultivos de exportación y ganado en épocas de estiaje o falta de agua de canal.',
      ctaText: 'Cotizar suministro agrícola para fundos'
    },
    {
      id: 'mineria',
      title: 'Minería',
      icon: <PickaxeIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      description: 'Abastecimiento de agua para proyectos, campamentos remotos y operaciones mineras.',
      details: 'Capacidad operativa para traslado en rutas complejas de montaña, supresión de polvo en accesos y abastecimiento de campamentos de exploración bajo estrictos protocolos HSE.',
      ctaText: 'Solicitar propuesta técnica para sector minero'
    },
    {
      id: 'construccion',
      title: 'Construcción',
      icon: <HardHatIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
      description: 'Suministro para obras civiles, campamentos de construcción, curado de concreto y humedecimiento de suelos.',
      details: 'Entrega en punto de obra con camiones cisterna equipados con mangueras de alta presión para facilitarle el trabajo continuo a ingenieros y contratistas.',
      ctaText: 'Cotizar abastecimiento para obras civiles'
    },
    {
      id: 'industria',
      title: 'Industria',
      icon: <FactoryIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Abastecimiento programado para procesos industriales, calderas, torres de enfriamiento y plantas de manufactura.',
      details: 'Contratos con entregas periódicas según volumen m³ acordado para asegurar que las líneas de producción nunca se detengan.',
      ctaText: 'Solicitar contrato industrial de agua'
    },
    {
      id: 'empresas-y-comercios',
      title: 'Empresas y comercios',
      icon: <BuildingIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Soluciones de suministro recurrente o de emergencia para centros comerciales, almacenes y sedes corporativas.',
      details: 'Planes flexibles ajustados a las necesidades operativas de tu inmueble comercial.',
      ctaText: 'Cotizar servicio corporativo para empresas'
    },
    {
      id: 'hogares-y-condominios',
      title: 'Hogares y condominios',
      icon: <HomeIcon size={32} />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      description: 'Entrega de agua en cisterna para cisternas subterráneas de edificios, condominios residenciales y viviendas.',
      details: 'Atención limpia, cuidada y rápida para abastecer cisternas domésticas en cortes programados o imprevistos de la red pública.',
      ctaText: 'Solicitar cisterna para condominio o vivienda'
    },
  ];

  return (
    <main>
      <Header onOpenQuoteModal={() => handleOpenModal()} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Soluciones por Industria
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Sectores que Atendemos con Logística Especializada
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Adaptamos nuestro servicio de transporte y cisterna a los requerimientos normativos y de volumen de cada industria.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {sectorsDetail.map((sec) => (
            <div 
              key={sec.id}
              id={sec.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                padding: '40px'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="grid-2">
                <div>
                  <div className="icon-wrapper">
                    {sec.icon}
                  </div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '12px' }}>
                    {sec.title}
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '12px' }}>
                    {sec.description}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    {sec.details}
                  </p>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => handleOpenModal(sec.title)}
                      className="btn btn-primary"
                    >
                      <FileTextIcon size={18} /> {sec.ctaText}
                    </button>
                    <a
                      href={`https://wa.me/51999999999?text=Hola,%20deseo%20cotizar%20servicio%20de%20agua%20para%20${encodeURIComponent(sec.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <WhatsAppIcon size={18} /> WhatsApp Directo
                    </a>
                  </div>
                </div>

                <div style={{ height: '320px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img
                    src={sec.image}
                    alt={sec.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
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
        defaultService={`Sector: ${selectedSector}`}
      />
      <FloatingContactButtons onOpenQuoteModal={() => handleOpenModal()} />
    </main>
  );
}
