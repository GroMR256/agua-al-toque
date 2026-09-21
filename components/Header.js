'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TruckIcon, WhatsAppIcon, FileTextIcon } from './Icons';

import { getWhatsAppLink } from '@/lib/contactConfig';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

export default function Header({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Flota', href: '#flota' },
    //{ label: 'Nosotros', href: '#nosotros' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleWhatsAppClick = () => {
    trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'header' });
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#inicio" className="brand-logo">
          <div className="brand-icon">
            <TruckIcon size={22} />
          </div>
          <div>
            <div>Agua Al Toque</div>
            <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--accent-sky)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '-4px' }}>
              Abastecimiento & Logística
            </div>
          </div>
        </Link>

        <button
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-item-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }} className="desktop-only">
          <a
            href={getWhatsAppLink('Hola, deseo consultar por servicio de agua en cisterna')}
            target="_blank"
            rel="noreferrer"
            onClick={handleWhatsAppClick}
            className="btn btn-whatsapp"
            style={{ padding: '10px 16px', fontSize: '0.88rem' }}
          >
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
          <button
            onClick={onOpenQuoteModal}
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
