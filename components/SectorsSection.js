'use client';
import FadeIn from './FadeIn';

export default function SectorsSection({ onOpenQuoteModal }) {
  const sectors = [
    {
      icon: '⛏️',
      title: 'Minería & Campamentos',
      desc: 'Abastecimiento de agua potable y tratada para campamentos remotos, control de polvo en vías y operaciones mineras a gran escala.',
      tag: 'Operaciones 24/7'
    },
    {
      icon: '🏗️',
      title: 'Construcción & Obras Civiles',
      desc: 'Suministro en cisternas para curado de concreto, compactación de suelos, pruebas hidráulicas y consumo de personal en obra.',
      tag: 'Alta Frecuencia'
    },
    {
      icon: '🚜',
      title: 'Agroindustria & Granjas',
      desc: 'Agua acondicionada para granjas avícolas y porcinas, irrigación tecnificada de cultivos y procesamiento de alimentos.',
      tag: 'Grado Agrícola'
    },
    {
      icon: '🏨',
      title: 'Hotelería & Hospitality',
      desc: 'Abastecimiento garantizado para cadenas hoteleras, resorts, calderas, sistemas contra incendio y piscinas de alto volumen.',
      tag: 'Calidad Premium'
    },
    {
      icon: '🏛️',
      title: 'Sector Gobierno & Licitaciones',
      desc: 'Atención a convocatorias públicas, emergencias hídricas distritales, proyectos de infraestructura y saneamiento ambiental.',
      tag: 'Certificado DIGESA'
    },
    {
      icon: '🚗',
      title: 'Concesionarias & Automotriz',
      desc: 'Agua desmineralizada y tratada para lavado masivo de flotas, procesos de pintura y mantenimiento industrial de vehículos.',
      tag: 'Bajo residuo TDS'
    },
    {
      icon: '🌱',
      title: 'Agrícolas e Irrigación',
      desc: 'Acondicionamiento físico-químico del agua para optimizar la absorción de nutrientes en suelos de agroexportación.',
      tag: 'Nutrición Vegetal'
    },
    {
      icon: '🏭',
      title: 'Plantas Industriales',
      desc: 'Suministro continuo en tanques estáticos y cisternas para torres de enfriamiento, calderas y líneas de producción.',
      tag: 'Volumen Masivo'
    }
  ];

  return (
    <section id="sectores" className="section" style={{ background: 'rgba(11, 19, 43, 0.4)' }}>
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Sectores Atendidos B2B</span>
          <h2 className="section-title">Soluciones de Agua para <span className="text-gradient">Cada Industria</span></h2>
          <p className="section-subtitle">
            Diseñamos planes de suministro continuo y tratamiento a medida adaptados a las exigencias operativas y normativas de tu empresa.
          </p>
        </FadeIn>

        <div className="grid-4">
          {sectors.map((sec, idx) => (
            <FadeIn key={idx} delay={idx * 60} className="glass-card product-card">
              <div>
                <span className="product-tag">{sec.tag}</span>
                <div className="product-icon-wrap" style={{ fontSize: '2rem' }}>{sec.icon}</div>
                <h3 className="product-title" style={{ fontSize: '1.2rem' }}>{sec.title}</h3>
                <p className="product-desc" style={{ fontSize: '0.9rem' }}>{sec.desc}</p>
              </div>
              <div className="product-footer">
                <button 
                  onClick={() => onOpenQuoteModal(sec.title)} 
                  className="btn btn-secondary" 
                  style={{ width: '100%', fontSize: '0.85rem', padding: '8px 14px' }}
                >
                  Solicitar Propuesta B2B →
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
