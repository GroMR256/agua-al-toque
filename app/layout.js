import { Archivo } from 'next/font/google';
import './globals.css';
import UtmInitializer from '@/components/UtmInitializer';
import MotionLayer from '@/components/MotionLayer';
import { QuoteModalProvider } from '@/components/quote/QuoteModalProvider';

// Archivo variable: el eje wdth permite la versión condensada para titulares
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

// Marca el documento como "con JS" antes del primer pintado, para que las
// animaciones de entrada nunca oculten contenido si el script no carga.
const jsFlag = "document.documentElement.classList.add('js')";

export const metadata = {
  title: 'Agua Al Toque | Agua en Cisterna en Huarmey',
  description: 'Agua potable e industrial en camiones cisterna de 10 m³, 15 m³ y 30 m³ en Huarmey (Áncash). Abastecimiento para empresas, obras, fundos, minería y hogares, las 24 horas.',
  metadataBase: new URL('https://aguaaltoque.pe'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Agua Al Toque | Agua en Cisterna en Huarmey',
    description: 'Abastecimiento programado y de emergencia de agua en cisterna en Huarmey para empresas, agricultura, construcción y hogares. Flota propia y atención 24/7.',
    url: 'https://aguaaltoque.pe',
    siteName: 'Agua Al Toque',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agua Al Toque | Agua en Cisterna en Huarmey',
    description: 'Transporte de agua en camiones cisterna en Huarmey, Áncash.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Agua Al Toque',
  description: 'Abastecimiento y transporte de agua en camiones cisterna en Huarmey para sectores industrial, agrícola, construcción y residencial.',
  url: 'https://aguaaltoque.pe',
  telephone: '+51987654321',
  areaServed: {
    '@type': 'City',
    name: 'Huarmey',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Áncash, Perú' },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Huarmey',
    addressRegion: 'Áncash',
    addressCountry: 'PE',
  },
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
    <html lang="es" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <UtmInitializer />
        <MotionLayer />
        <QuoteModalProvider>
          {children}
        </QuoteModalProvider>
      </body>
    </html>
  );
}
