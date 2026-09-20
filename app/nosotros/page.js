'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import { TruckIcon, ShieldCheckIcon, ClockIcon, WaterIcon } from '../../components/Icons';

export default function NosotrosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Header onOpenQuoteModal={() => setIsModalOpen(true)} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Empresa & Trayectoria
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Sobre Agua Al Toque
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Una empresa comprometida con el abastecimiento eficiente, puntual y seguro de agua mediante camiones cisterna.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <span className="badge-pro">Quiénes Somos</span>
              <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
                Soluciones Reales de Abastecimiento & Logística
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Agua Al Toque nació para responder a la necesidad crítica de abastecimiento continuo de agua en sectores clave como la construcción, agricultura, minería, hotelería e industrias.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                No nos presentamos simplemente como una "vendedora de agua", sino como una empresa integral de abastecimiento y logística hídrica con flota propia de camiones cisterna equipados para responder tanto a necesidades programadas como a emergencias.
              </p>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid #FFFFFF' }}>
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="Flota de cisternas de Agua Al Toque"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: '80px' }}>
            <div className="card-pro">
              <div className="icon-wrapper">
                <TruckIcon size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                Nuestra Experiencia
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Años operando en rutas urbanas, industriales y rurales en [ZONA DE COBERTURA / CIUDAD], respaldados por miles de m³ entregados puntualmente.
              </p>
            </div>

            <div className="card-pro">
              <div className="icon-wrapper">
                <WaterIcon size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                Nuestra Misión
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Garantizar que ninguna empresa, fundo u hogar se quede sin el recurso hídrico esencial mediante una logística de transporte transparente, ágil y segura.
              </p>
            </div>

            <div className="card-pro">
              <div className="icon-wrapper">
                <ShieldCheckIcon size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                Nuestros Valores
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Puntualidad en la entrega, transparencia comercial, cuidado de las unidades y compromiso con el éxito operativo de nuestros clientes.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '12px' }}>
              Nuestro Equipo & Operaciones
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Contamos con conductores profesionales con amplia experiencia en el manejo de unidades pesadas, operadores de bomba capacitados y personal de coordinación comercial enfocado en resolver tus requerimientos con cercanía y eficiencia.
            </p>
          </div>
        </div>
      </section>

      <FinalCta onOpenQuoteModal={() => setIsModalOpen(true)} />
      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <FloatingContactButtons onOpenQuoteModal={() => setIsModalOpen(true)} />
    </main>
  );
}
