'use client';
import FadeIn from './FadeIn';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Carlos Mendoza',
      district: 'Miraflores',
      rating: 5,
      text: 'Impresionante la rapidez. Hice el pedido por WhatsApp y el bidón llegó en 22 minutos exactos. El sabor del agua es increíblemente puro.',
      avatar: '👨‍💼'
    },
    {
      name: 'Dra. Elena Ramos',
      district: 'San Isidro',
      rating: 5,
      text: 'Como médica me importa mucho la pureza del agua para mi familia. Saber que filtran por ósmosis inversa de 7 etapas me da total tranquilidad.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Renzo Farfán',
      district: 'Surco',
      rating: 5,
      text: 'El dispensador smart que alquilé funciona perfecto para el café en las mañanas y agua helada para entrenar. Servicio 10/10.',
      avatar: '🏋️‍♂️'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Opiniones de Clientes</span>
          <h2 className="section-title">Lo que dicen <span className="text-gradient">Nuestros Usuarios</span></h2>
          <p className="section-subtitle">
            Miles de familias y empresas confían en Agua Al Toque para su hidratación diaria.
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
                  <h4 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{rev.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📍 {rev.district}</span>
                </div>
              </div>

              <div style={{ color: '#FFB300', marginBottom: '12px', fontSize: '1.1rem' }}>
                {'★'.repeat(rev.rating)}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, italic: 'true' }}>
                "{rev.text}"
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
