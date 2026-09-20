'use client';
import FadeIn from './FadeIn';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Ing. Marcelo Ugarte',
      role: 'Gerente de Operaciones',
      company: 'Consorcio Minero del Sur',
      rating: 5,
      text: 'Agua Al Toque B2B abastece nuestros 3 campamentos en zonas de alta montaña. El cumplimiento en el horario de cisternas y la trazabilidad de los informes de laboratorio son impecables.',
      avatar: '⛏️'
    },
    {
      name: 'Dra. Patricia Alarcón',
      role: 'Directora de Compras',
      company: 'Cadena Hotelera Riviera',
      rating: 5,
      text: 'Contamos con suministro de respaldo continuo para nuestros hoteles y calderas. Su tiempo de respuesta en situaciones de emergencia ha salvado nuestra operación en múltiples ocasiones.',
      avatar: '🏨'
    },
    {
      name: 'Ing. Fernando Castillo',
      role: 'Jefe de Logística & Obras',
      company: 'Constructora Vial Andina',
      rating: 5,
      text: 'Trabajamos con un volumen de más de 100 m³ diarios para compactación de suelos y curado en obra. Las facturaciones a 30 días y la flexibilidad en la flota hacen la diferencia.',
      avatar: '🏗️'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Casos de Éxito Corporativos</span>
          <h2 className="section-title">Confianza de <span className="text-gradient">Grandes Empresas</span></h2>
          <p className="section-subtitle">
            Líderes de operaciones en minería, agro, hotelería y construcción respaldan la puntualidad y calidad de nuestro servicio.
          </p>
        </FadeIn>

        <div className="grid-3">
          {reviews.map((rev, index) => (
            <FadeIn key={index} delay={index * 100} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  fontSize: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  {rev.avatar}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem' }}>{rev.name}</h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-cyan)', fontWeight: 600 }}>{rev.role}</span>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.company}</div>
                </div>
              </div>

              <div style={{ color: '#FFB300', marginBottom: '12px', fontSize: '1.1rem' }}>
                {'★'.repeat(rev.rating)}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                "{rev.text}"
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
