'use client';
import { MapPinIcon, WhatsAppIcon, FileTextIcon } from './Icons';

export default function CoverageMap({ onOpenQuoteModal }) {
  return (
    <section id="cobertura" className="section" style={{ padding: '90px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-pro">Alcance & Logística</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Zonas de Cobertura & Mapa Operativo
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Operamos en las principales áreas urbanas, zonas industriales, proyectos de infraestructura y fundos agrícolas de [ZONA DE COBERTURA / CIUDAD].
          </p>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '36px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div className="grid-2" style={{ gap: '36px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '16px' }}>
                Zonas Atendidas Habitualmente
              </h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Zona Urbana & Comercial:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Atención a hoteles, comercios, hospitales, empresas y condominios en [CIUDAD Y DISTRITOS].
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Zona Agrícola & Fundos:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Despacho en cisternas a reservorios y valles de [ZONAS AGRÍCOLAS].
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" />
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
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid rgba(2, 132, 199, 0.2)'
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '6px' }}>
                  ¿Necesitas atención fuera de nuestra zona habitual?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  Evaluamos rutas especiales y despliegue de unidades para proyectos fuera de la zona estándar.
                </p>
                <button onClick={onOpenQuoteModal} className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
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
              height: '380px'
            }}>
              <iframe
                title="Mapa de Zonas de Cobertura de Agua Al Toque"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249687.2882877083!2d-77.12786358359374!3d-12.026267600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
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
