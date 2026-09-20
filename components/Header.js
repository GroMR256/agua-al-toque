'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TruckIcon, WhatsAppIcon, FileTextIcon } from './Icons';

export default function Header({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Sectores', href: '/sectores' },
    { label: 'Flota', href: '/flota' },
    { label: 'Cobertura', href: '/cobertura' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-logo">
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
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
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
