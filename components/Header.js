'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <div className="logo-icon">🚛</div>
          <span>Agua <span className="text-gradient">Al Toque B2B</span></span>
        </Link>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu Toggle">
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link href="#inicio" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            <li><Link href="#sectores" className="nav-link" onClick={() => setIsOpen(false)}>Sectores</Link></li>
            <li><Link href="#servicios" className="nav-link" onClick={() => setIsOpen(false)}>Servicios</Link></li>
            <li><Link href="#cotizador" className="nav-link" onClick={() => setIsOpen(false)}>Estimador m³</Link></li>
            <li><Link href="#nosotros" className="nav-link" onClick={() => setIsOpen(false)}>Logística</Link></li>
            <li><Link href="#faq" className="nav-link" onClick={() => setIsOpen(false)}>Preguntas B2B</Link></li>
          </ul>
        </nav>

        <button 
          onClick={onOpenQuoteModal}
          className="btn btn-primary desktop-only" 
          style={{ padding: '10px 22px', fontSize: '0.9rem' }}
        >
          💼 Cotizar B2B
        </button>
      </div>
    </header>
  );
}
