import Header from '../components/Header';
import Hero from '../components/Hero';
import PhotoBand from '../components/PhotoBand';
import Story from '../components/Story';
import ServiceCards from '../components/ServiceCards';
import FleetPreview from '../components/FleetPreview';
import HowItWorks from '../components/HowItWorks';
import SectorsGrid from '../components/SectorsGrid';
import WhyUs from '../components/WhyUs';
import CoverageMap from '../components/CoverageMap';
import FaqAccordion from '../components/FaqAccordion';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PhotoBand />
        <Story />
        <ServiceCards />
        <FleetPreview />
        <HowItWorks />
        <SectorsGrid />
        <WhyUs />
        <CoverageMap />
        <FaqAccordion />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
