'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <Link href="/" className="logo">
                    Agua Al Toque
                </Link>
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '✕' : '☰'}
                </button>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link href="#products" className="nav-link" onClick={() => setIsOpen(false)}>Productos</Link></li>
                        <li><Link href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
                        <li><Link href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contacto</Link></li>
                    </ul>
                </nav>
                <Link href="#order" className="btn btn-primary desktop-only">Pide Ahora</Link>
            </div>
        </header>
    );
}
