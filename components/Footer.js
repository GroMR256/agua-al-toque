'use client';
import { TruckIcon, PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from './Icons';
import { getWhatsAppLink, PUBLIC_CONFIG } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';

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
              <a
                href={getWhatsAppLink('Hola, deseo contactar con atención directa de Agua Al Toque')}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleDirectWhatsAppClick(e, 'footer', 'Hola, deseo contactar con atención directa de Agua Al Toque')}
                className="btn btn-whatsapp"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <WhatsAppIcon size={16} /> WhatsApp Directo
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Servicios Principales</div>
            <ul className="footer-links-list">
              <li><a href="#servicios" className="footer-link">Suministro de Agua</a></li>
              <li><a href="#servicios" className="footer-link">Abastecimiento Empresarial</a></li>
              <li><a href="#servicios" className="footer-link">Agua para Agricultura</a></li>
              <li><a href="#servicios" className="footer-link">Agua para Construcción</a></li>
              <li><a href="#servicios" className="footer-link">Agua para Minería</a></li>
              <li><a href="#servicios" className="footer-link">Alquiler de Cisternas</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Sectores Atendidos</div>
            <ul className="footer-links-list">
              <li><a href="#sectores" className="footer-link">Hoteles y Restaurantes</a></li>
              <li><a href="#sectores" className="footer-link">Agricultura y Fundos</a></li>
              <li><a href="#sectores" className="footer-link">Minería y Proyectos</a></li>
              <li><a href="#sectores" className="footer-link">Construcción y Obras</a></li>
              <li><a href="#sectores" className="footer-link">Industria y Comercio</a></li>
              <li><a href="#sectores" className="footer-link">Hogares y Condominios</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contacto & Operación</div>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <PhoneIcon size={16} color="#0EA5E9" />
                <span>Central: +{PUBLIC_CONFIG.whatsappNumber}</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <WhatsAppIcon size={16} color="#10B981" />
                <span>WhatsApp: +{PUBLIC_CONFIG.whatsappNumber}</span>
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
            <a href="#cobertura" className="footer-link">Cobertura</a>
            <a href="#nosotros" className="footer-link">Nosotros</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#contacto" className="footer-link">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
