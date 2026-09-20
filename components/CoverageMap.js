'use client';
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';

export default function CoverageMap({ onOpenQuoteModal }) {
  return (
    <section id="cobertura" className="section" style={{ padding: '90px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Zonas de Cobertura & Atención
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Operamos en las principales áreas urbanas, zonas industriales, proyectos de infraestructura y fundos agrícolas de Huarmey.
          </p>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '40px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '36px' }} className="grid-2">
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '16px' }}>
                Áreas Atendidas Habitualmente
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Zona Urbana & Comercial:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Atención a hoteles, comercios, hospitales, empresas y residencias en Huarmey y alrededores.
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPinIcon size={20} color="var(--accent-sky)" />
                  <div>
                    <strong style={{ color: 'var(--primary-navy)' }}>Zona Agrícola & Fundos:</strong>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Despacho en cisternas a reservorios y valles de Ancash.
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
                  Consultar disponibilidad de ruta
                </button>
              </div>
            </div>

            {/* Visual Interactive Map Mock */}
            <div style={{
              backgroundColor: 'var(--primary-slate)',
              borderRadius: '12px',
              overflow: 'hidden',
              minHeight: '340px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              padding: '24px',
              backgroundImage: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, rgba(15, 23, 42, 0.95) 100%)'
            }}>
              <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                <MapPinIcon size={48} color="var(--accent-cyan)" />
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '12px', marginBottom: '8px' }}>
                  Mapa Operativo Logístico
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '20px' }}>
                  Base central y rutas estratégicas de despacho de cisternas en Huarmey.
                </p>
                <div style={{ display: 'inline-flex', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600 }}>
                  📍 Cobertura Local & Regional Activa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
