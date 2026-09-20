'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="logo-icon" style={{ width: '28px', height: '28px', fontSize: '0.9rem' }}>💧</div>
          <span style={{ fontWeight: 700, color: 'white' }}>Agua Al Toque &copy; 2026</span>
          <span style={{ color: 'var(--text-dim)' }}>| Todos los derechos reservados.</span>
        </div>

        <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
          <Link href="#inicio" className="social-link">Inicio</Link>
          <Link href="#productos" className="social-link">Productos</Link>
          <Link href="#nosotros" className="social-link">Pureza</Link>
          <Link href="#faq" className="social-link">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
