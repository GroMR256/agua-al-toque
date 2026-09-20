'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import Testimonials from '../../components/Testimonials';
import TrustMetrics from '../../components/TrustMetrics';

export default function ExperienciaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Header onOpenQuoteModal={() => setIsModalOpen(true)} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Experiencia & Respaldo
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Clientes & Experiencia Operativa
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Conoce cómo garantizamos continuidad operativa y cumplimiento en diversos sectores de la industria.
          </p>
        </div>
      </section>

      <TrustMetrics />

      <Testimonials />

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
