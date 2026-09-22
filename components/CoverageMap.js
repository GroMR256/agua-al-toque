'use client';
import { MapPinIcon, FileTextIcon } from './Icons';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

export default function CoverageMap({ onOpenQuoteModal }) {
  const { openQuoteModal } = useQuoteModal();

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      openQuoteModal();
    }
  };

  return (
    <section id="cobertura" className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            Zonas de Cobertura & Mapa Operativo
          </h2>
          <p className="section-subtitle" style={{ margin: '10px auto 0 auto' }}>
            Operamos en las principales áreas urbanas, zonas industriales, proyectos de infraestructura y fundos agrícolas.
          </p>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: 'clamp(20px, 4vw, 36px)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '16px' }}>
                Zonas Atendidas Habitualmente
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Zona Urbana & Comercial:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Atención a hoteles, comercios, hospitales, empresas y condominios.
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Zona Agrícola & Fundos:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Despacho en cisternas a reservorios y valles agrícolas.
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Proyectos & Obras en Carretera:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Logística móvil para campamentos, minería y obras de construcción vial.
                    </div>
                  </div>
                </li>
              </ul>

              <div style={{
                backgroundColor: 'rgba(2, 132, 199, 0.06)',
                padding: '16px 20px',
                borderRadius: '10px',
                border: '1px solid rgba(2, 132, 199, 0.2)'
              }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '6px' }}>
                  ¿Necesitas atención fuera de nuestra zona habitual?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  Evaluamos rutas especiales y despliegue de unidades para proyectos fuera de la zona estándar.
                </p>
                <button onClick={handleQuoteClick} className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
                  <FileTextIcon size={16} /> Consultar disponibilidad de ruta
                </button>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)',
              height: 'clamp(240px, 35vh, 380px)',
              width: '100%'
            }}>
              <iframe
                title="Mapa de Zonas de Cobertura de Agua Al Toque"
                src="https://www.google.com/maps?q=+Ancash,+Peru&z=9&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
