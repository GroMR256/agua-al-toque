'use client';
import { getWhatsAppLink, formatPhone, PUBLIC_CONFIG } from '@/lib/contactConfig';
import { handleDirectWhatsAppClick } from '@/lib/whatsappTracker';
import credits from '@/public/images/credits.json';

const WA_MESSAGE = 'Hola, deseo contactar con atención directa de Agua Al Toque';

const columns = [
  {
    title: 'Servicios',
    links: [
      ['Suministro de agua', '#servicios'],
      ['Empresas', '#servicios'],
      ['Agricultura', '#servicios'],
      ['Minería', '#servicios'],
      ['Alquiler de cisternas', '#servicios'],
      ['Emergencias', '#servicios'],
    ],
  },
  {
    title: 'Sectores',
    links: [
      ['Hoteles', '#sectores'],
      ['Construcción', '#sectores'],
      ['Industria', '#sectores'],
      ['Fundos', '#sectores'],
      ['Hogares', '#sectores'],
    ],
  },
  {
    title: 'La empresa',
    links: [
      ['Quiénes somos', '#nosotros'],
      ['Flota', '#flota'],
      ['Cobertura', '#cobertura'],
      ['Preguntas', '#faq'],
      ['Contacto', '#contacto'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" data-ink="light">
      <div className="frame">
        <p className="display footer-name" aria-hidden="true">
          <span>Agua</span>
          <span>al toque</span>
        </p>

        <div className="grid footer-main">
          <ul className="footer-places">
            <li>
              <a
                href={getWhatsAppLink(WA_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleDirectWhatsAppClick(e, 'footer', WA_MESSAGE)}
              >
                {formatPhone()}
              </a>
            </li>
            <li>
              <a href={`mailto:${PUBLIC_CONFIG.contactEmail}`}>{PUBLIC_CONFIG.contactEmail}</a>
            </li>
            <li>
              <span>{PUBLIC_CONFIG.serviceArea}, {PUBLIC_CONFIG.serviceRegion} · 24 horas</span>
            </li>
          </ul>

          <nav className="footer-cols" aria-label="Mapa del sitio">
            {columns.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-legal">
          <p>© {new Date().getFullYear()} Agua Al Toque. Transporte y abastecimiento de agua en cisterna.</p>
          <a href="#inicio" className="link">Volver arriba</a>
          <p className="credits">
            Fotografías:{' '}
            {credits.map((c, idx) => (
              <span key={c.file}>
                <a href={c.page} target="_blank" rel="noreferrer">“{c.title}”</a> de {c.creator},{' '}
                <a href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a>, vía {c.via}
                {idx < credits.length - 1 ? '; ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
