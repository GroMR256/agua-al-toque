import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import UtmInitializer from '@/components/UtmInitializer';
import { QuoteModalProvider } from '@/components/quote/QuoteModalProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Agua Al Toque | Abastecimiento y Transporte de Agua en Cisterna',
  description: 'Servicio de agua potable e industrial en camiones cisterna de 10 m³, 15 m³ y 30 m³. Abastecimiento rápido y seguro para empresas, construcción, minería y más.',
  metadataBase: new URL('https://aguaaltoque.pe'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Agua Al Toque | Abastecimiento y Logística de Agua en Cisterna',
    description: 'Abastecimiento continuo y urgente de agua en cisterna para empresas, agricultura, construcción y hogares. Flota sanitizada y atención 24/7.',
    url: 'https://aguaaltoque.pe',
    siteName: 'Agua Al Toque',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agua Al Toque | Logística de Agua en Cisterna',
    description: 'Servicio técnico y seguro de transporte de agua en camiones cisterna.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Agua Al Toque',
  description: 'Abastecimiento y transporte de agua en camiones cisterna para sectores industrial, agrícola, construcción y residencial.',
  url: 'https://aguaaltoque.pe',
  telephone: '+51987654321',
  areaServed: 'Peru',
  serviceType: [
    'Suministro de agua en cisterna',
    'Agua para construcción y obras',
    'Agua para agricultura y riego',
    'Agua potable para eventos e industrias'
  ],
  priceRange: '$$',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jakarta.className}>
        <UtmInitializer />
        <QuoteModalProvider>
          {children}
        </QuoteModalProvider>
      </body>
    </html>
  );
}
