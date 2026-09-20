'use client';
import { ShieldCheckIcon, HotelIcon, HardHatIcon, SproutIcon } from './Icons';

export default function Testimonials() {
  const experiences = [
    {
      sector: 'Sector Agroindustrial',
      icon: <SproutIcon size={24} />,
      title: 'Abastecimiento continuo para riego de auxilio',
      desc: 'Suministro constante en cisternas de 30 m³ durante periodo de escasez hídrica, garantizando la preservación del cultivo sin pérdidas.',
    },
    {
      sector: 'Sector Construcción',
      icon: <HardHatIcon size={24} />,
      title: 'Logística diaria para frente de obra vial',
      desc: 'Atención puntual con franjas horarias fijas para compactación de suelos y campamento de trabajadores en proyecto vial.',
    },
    {
      sector: 'Sector Hotelería',
      icon: <HotelIcon size={24} />,
      title: 'Respuesta rápida ante corte de servicio público',
      desc: 'Despacho de emergencia en menos de 2 horas para llenado de cisterna principal de complejo hotelero en temporada alta.',
    }
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Respaldados por Experiencia Operativa
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Conoce cómo resolvemos las necesidades de abastecimiento de agua en diferentes sectores de la industria.
          </p>
        </div>

        <div className="grid-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card-pro">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                  {exp.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-sky)', textTransform: 'uppercase' }}>
                    {exp.sector}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    {exp.title}
                  </h4>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, flex: 1 }}>
                "{exp.desc}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px', fontSize: '0.82rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                <ShieldCheckIcon size={16} /> Servicio Verificado en Campo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
