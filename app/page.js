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
import ContactSection from '../components/ContactSection';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustMetrics />
      <ServiceCards />
      <SectorsGrid />
      <FleetPreview />
      <HowItWorks />
      <WhyUs />
      <CoverageMap />
      <Testimonials />
      <GalleryPreview />
      <FaqAccordion />
      <ContactSection />
      <FinalCta />
      <Footer />
      <FloatingContactButtons />
    </main>
  );
}
