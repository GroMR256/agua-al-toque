'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TruckIcon, WhatsAppIcon, FileTextIcon } from './Icons';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

export default function Header({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Flota', href: '#flota' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleQuoteClick = (service = 'Suministro de Agua') => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(service);
    } else {
      openQuoteModal(service);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#inicio" className="brand-logo" onClick={handleLinkClick}>
          <div className="brand-icon" style={{ flexShrink: 0 }}>
            <TruckIcon size={22} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Agua Al Toque</div>
            <div style={{ fontSize: 'clamp(0.55rem, 2vw, 0.68rem)', fontWeight: 600, color: 'var(--accent-sky)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '-4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Abastecimiento & Logística
            </div>
          </div>
        </Link>

        <button
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Navegación principal">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-item-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="mobile-only" style={{ flexDirection: 'column', gap: '10px', marginTop: '12px', width: '100%' }}>
            <button
              onClick={() => {
                handleLinkClick();
                handleQuoteClick();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <FileTextIcon size={18} /> Solicitar Cotización
            </button>
            <a
              href={getWhatsAppLink('Hola, deseo consultar por servicio de agua en cisterna')}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                handleLinkClick();
                handleDirectWhatsAppClick(e, 'header_mobile_menu', 'Hola, deseo consultar por servicio de agua en cisterna');
              }}
              className="btn btn-whatsapp"
              style={{ width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <WhatsAppIcon size={18} /> Contactar por WhatsApp
            </a>
          </li>
        </nav>

        <div style={{ gap: '12px', alignItems: 'center' }} className="desktop-only">
          <a
            href={getWhatsAppLink('Hola, deseo consultar por servicio de agua en cisterna')}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => handleDirectWhatsAppClick(e, 'header', 'Hola, deseo consultar por servicio de agua en cisterna')}
            className="btn btn-whatsapp"
            style={{ padding: '10px 16px', fontSize: '0.88rem' }}
          >
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
          <button
            onClick={() => handleQuoteClick()}
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            <FileTextIcon size={16} /> Solicitar Cotización
          </button>
        </div>
      </div>
    </header>
  );
}
