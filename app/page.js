'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustMetrics from '../components/TrustMetrics';
import ServiceCards from '../components/ServiceCards';
import SectorsGrid from '../components/SectorsGrid';
import FleetPreview from '../components/FleetPreview';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import CoverageMap from '../components/CoverageMap';
import Testimonials from '../components/Testimonials';
import GalleryPreview from '../components/GalleryPreview';
import FaqAccordion from '../components/FaqAccordion';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import FloatingContactButtons from '../components/FloatingContactButtons';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Suministro de Agua');

  const handleOpenQuoteModal = (serviceName = 'Suministro de Agua') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <main>
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <TrustMetrics />
      <ServiceCards onOpenQuoteModal={(srv) => handleOpenQuoteModal(srv)} />
      <SectorsGrid onOpenQuoteModal={(sec) => handleOpenQuoteModal(sec)} />
      <FleetPreview onOpenQuoteModal={(unit) => handleOpenQuoteModal(unit)} />
      <HowItWorks />
      <WhyUs />
      <CoverageMap onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <Testimonials />
      <GalleryPreview />
      <FaqAccordion />
      <FinalCta onOpenQuoteModal={() => handleOpenQuoteModal()} />
      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />

      <FloatingContactButtons onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </main>
  );
}
