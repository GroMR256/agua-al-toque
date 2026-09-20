'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectorsSection from '../components/SectorsSection';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import B2bQuoteModal from '../components/B2bQuoteModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);

  const handleOpenQuoteModal = (sector = null) => {
    setSelectedSector(sector);
    setIsModalOpen(true);
  };

  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient Glass Glow Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <SectorsSection onOpenQuoteModal={(sec) => handleOpenQuoteModal(sec)} />
      <Services onOpenQuoteModal={(sec) => handleOpenQuoteModal(sec)} />
      <About />
      <Testimonials />
      <FaqSection />
      <Contact onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <Footer />

      <B2bQuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedSector={selectedSector} 
      />
    </main>
  );
}
