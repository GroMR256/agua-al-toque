'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';
import FaqAccordion from '../../components/FaqAccordion';

export default function FaqPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Header onOpenQuoteModal={() => setIsModalOpen(true)} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Centro de Ayuda & Respuestas
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Preguntas Frecuentes
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Resolvemos todas tus consultas sobre volúmenes, precios, zonas de cobertura, alquiler de cisternas y transporte de agua.
          </p>
        </div>
      </section>

      <FaqAccordion />

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
