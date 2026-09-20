'use client';
import Link from 'next/link';
import { TruckIcon, PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo" style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              <div className="brand-icon">
                <TruckIcon size={22} />
              </div>
              <span>Agua Al Toque</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Soluciones integrales de abastecimiento, transporte y logística de agua mediante camiones cisterna para empresas, minería, construcción, agricultura y necesidades particulares.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <WhatsAppIcon size={16} /> WhatsApp Directo
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Servicios Principales</div>
            <ul className="footer-links-list">
              <li><Link href="/servicios" className="footer-link">Suministro de Agua</Link></li>
              <li><Link href="/servicios" className="footer-link">Abastecimiento Empresarial</Link></li>
              <li><Link href="/servicios" className="footer-link">Agua para Agricultura</Link></li>
              <li><Link href="/servicios" className="footer-link">Agua para Construcción</Link></li>
              <li><Link href="/servicios" className="footer-link">Agua para Minería</Link></li>
              <li><Link href="/servicios" className="footer-link">Alquiler de Cisternas</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Sectores Atendidos</div>
            <ul className="footer-links-list">
              <li><Link href="/sectores" className="footer-link">Hoteles y Restaurantes</Link></li>
              <li><Link href="/sectores" className="footer-link">Agricultura y Fundos</Link></li>
              <li><Link href="/sectores" className="footer-link">Minería y Proyectos</Link></li>
              <li><Link href="/sectores" className="footer-link">Construcción y Obras</Link></li>
              <li><Link href="/sectores" className="footer-link">Industria y Comercio</Link></li>
              <li><Link href="/sectores" className="footer-link">Hogares y Condominios</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contacto & Operación</div>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <PhoneIcon size={16} color="#0EA5E9" />
                <span>Central: [NÚMERO DE TELÉFONO]</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <WhatsAppIcon size={16} color="#10B981" />
                <span>WhatsApp: [NÚMERO DE TELÉFONO]</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <MapPinIcon size={16} color="#0EA5E9" />
                <span>Base: [ZONA DE COBERTURA / CIUDAD]</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ClockIcon size={16} color="#0EA5E9" />
                <span>Horarios: Atención 24/7 y Emergencias</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 Agua Al Toque. Todos los derechos reservados. Soluciones de abastecimiento y logística de agua.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/cobertura" className="footer-link">Cobertura</Link>
            <Link href="/nosotros" className="footer-link">Nosotros</Link>
            <Link href="/faq" className="footer-link">FAQ</Link>
            <Link href="/contacto" className="footer-link">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
