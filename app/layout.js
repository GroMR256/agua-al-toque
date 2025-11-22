import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Agua Al Toque | Delivery de Agua Rápido y Puro',
  description: 'Pide tu agua al toque. Servicio de entrega de agua purificada rápido y confiable en Lima.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
