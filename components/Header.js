'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TruckIcon, WhatsAppIcon, FileTextIcon } from './Icons';

export default function Header({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Flota', href: '#flota' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

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
            href="https://wa.me/51999999999?text=Hola,%20deseo%20consultar%20por%20servicio%20de%20agua%20en%20cisterna"
            target="_blank" 
            rel="noreferrer"
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
