'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import { MapPinIcon, PhoneIcon, WhatsAppIcon, FileTextIcon } from '../../components/Icons';

export default function CoberturaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main>
      <Header onOpenQuoteModal={() => handleOpenModal()} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Radio de Operación Logística
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Zonas & Áreas de Cobertura de Despacho
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Conoce los distritos, provincias y corredores industriales donde operamos con entregas de agua en cisterna.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="grid-2">
            <div>
              <span className="badge-pro">Alcance Operativo</span>
              <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
                Zonas Principales de Servicio
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="card-pro">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    1. Zona Urbana & Comercial [CIUDAD Y DISTRITOS]
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    Atención rápida para hoteles, restaurantes, condominios, hospitales y sedes corporativas dentro del casco urbano.
                  </p>
                </div>

                <div className="card-pro">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    2. Valles Agrícolas & Fundos [ZONAS AGRÍCOLAS]
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    Despacho de cisternas pesadas de 30 m³ para reservorios agrícolas, establos y fundos de agroexportación.
                  </p>
                </div>

                <div className="card-pro">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    3. Corredores de Obras & Minas [PROYECTOS]
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    Logística móvil para campamentos temporales, construcciones en carretera y proyectos de infraestructura.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--primary-navy)',
              borderRadius: '16px',
              padding: '40px',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <MapPinIcon size={48} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '16px', marginBottom: '12px' }}>
                ¿Tu ubicación no aparece en el mapa?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
                Contáctanos para evaluar la disponibilidad de atención, coordinar rutas de transporte especiales o desplegar una unidad cisterna dedicada a tu proyecto.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={handleOpenModal} className="btn btn-primary">
                  <FileTextIcon size={18} /> Consultar disponibilidad de ruta
                </button>
                <a
                  href="https://wa.me/51999999999?text=Hola,%20deseo%20consultar%20cobertura%20para%20mi%20ubicación"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={18} /> WhatsApp Directo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta onOpenQuoteModal={() => handleOpenModal()} />
      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Consulta de Cobertura"
      />
      <FloatingContactButtons onOpenQuoteModal={() => handleOpenModal()} />
    </main>
  );
}
