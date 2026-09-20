'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import OrderModal from '../components/OrderModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product = null) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Ambient Glass Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Header onOpenOrderModal={() => handleOpenModal()} />
      <Hero onOpenOrderModal={() => handleOpenModal()} />
      <Services onOpenOrderModal={(p) => handleOpenModal(p)} />
      <About />
      <Testimonials />
      <FaqSection />
      <Contact onOpenOrderModal={() => handleOpenModal()} />
      <Footer />

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedProduct={selectedProduct} 
      />
    </main>
  );
}
