'use client';
import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

const WA_MESSAGE = 'Hola, deseo consultar por servicio de agua en cisterna';

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Flota', href: '#flota' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Preguntas', href: '#faq' },
];

// Tinta y fondo de la cabecera según el capítulo que pasa por debajo
const INKS = {
  light: { ink: '#ffffff', ground: '#1d7894' },
  dark: { ink: '#121719', ground: '#eef1ef' },
  paper: { ink: '#eef1ef', ground: '#121719' },
};

export default function Header({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ink, setInk] = useState('light');
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
    document.documentElement.classList.toggle('menu-open', isOpen);
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    let frame = 0;
    const probe = () => {
      frame = 0;
      const y = 34;
      const chapters = document.querySelectorAll('[data-ink]');
      for (const chapter of chapters) {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= y && rect.bottom > y) {
          setInk(chapter.dataset.ink);
          return;
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(probe);
    };
    probe();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const handleQuoteClick = () => {
    setIsOpen(false);
    if (onOpenQuoteModal) {
      onOpenQuoteModal('Suministro de Agua');
    } else {
      openQuoteModal('Suministro de Agua');
    }
  };

  const colors = INKS[ink] || INKS.light;

  return (
    <>
      <header
        className="site-header"
        style={{ '--header-ink': colors.ink, '--header-ground': colors.ground }}
      >
        <div className="frame">
          <a href="#inicio" className="wordmark" onClick={() => setIsOpen(false)}>
            Agua Al Toque
          </a>

          <nav aria-label="Navegación principal" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <ul className="header-nav">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleQuoteClick} className="btn header-cta">
              Solicitar cotización
            </button>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? 'Cerrar' : 'Menú'}
            </button>
          </nav>
        </div>
      </header>

      {isOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="display" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="menu-actions">
            <button type="button" onClick={handleQuoteClick} className="btn btn-primary btn-large">
              Solicitar cotización
            </button>
            <a
              href={getWhatsAppLink(WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                setIsOpen(false);
                handleDirectWhatsAppClick(e, 'header_mobile_menu', WA_MESSAGE);
              }}
              className="btn btn-whatsapp btn-large"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
