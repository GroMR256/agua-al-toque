import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta'
});

export const metadata = {
  title: 'Agua Al Toque | Ecosistema Inteligente de Hidratación y Delivery',
  description: 'Agua purificada al instante mediante ósmosis inversa de 7 etapas. Delivery ultra-rápido, monitoreo de pureza en vivo y envases ecológicos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}

