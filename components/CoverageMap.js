'use client';
import Image from 'next/image';
import { PUBLIC_CONFIG } from '@/lib/contactConfig';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

const zones = [
  {
    title: 'Ciudad de Huarmey',
    desc: 'Hoteles, restaurantes, comercios, centros de salud, colegios y casas.',
  },
  {
    title: 'Puerto Huarmey y playas',
    desc: 'Negocios del puerto, pesqueras y locales de temporada.',
  },
  {
    title: 'Valle del río Huarmey',
    desc: 'Fundos, chacras y reservorios del valle.',
  },
  {
    title: 'Panamericana Norte',
    desc: 'Obras, campamentos y proyectos cercanos a la carretera.',
  },
];

export default function CoverageMap({ onOpenQuoteModal }) {
  const { openQuoteModal } = useQuoteModal();

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal('Consulta de ruta fuera de zona');
    } else {
      openQuoteModal('Consulta de ruta fuera de zona');
    }
  };

  return (
    <section id="cobertura" className="chapter chapter--coal" data-ink="paper">
      <div className="frame grid coverage">
        <div className="coverage-text">
          <h2 className="display section-heading" data-reveal>Dónde trabajamos</h2>
          <p className="section-intro muted-on-coal" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Hoy operamos en {PUBLIC_CONFIG.serviceArea}: la ciudad, el puerto, el valle y la Panamericana. Todavía no cubrimos todo {PUBLIC_CONFIG.serviceRegion}.
          </p>

          <ul className="zone-list">
            {zones.map((zone, idx) => (
              <li key={zone.title} data-reveal style={{ '--reveal-delay': `${idx * 70}ms` }}>
                <h3>{zone.title}</h3>
                <p>{zone.desc}</p>
              </li>
            ))}
          </ul>

          <div className="coverage-route" data-reveal>
            <p>¿Tu punto queda fuera de {PUBLIC_CONFIG.serviceArea}? Consúltanos: evaluamos cada ruta especial según la distancia y el volumen.</p>
            <button type="button" onClick={handleQuoteClick} className="btn btn-paper">
              Consultar una ruta
            </button>
          </div>
        </div>

        <div className="coverage-map" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <iframe
            title="Mapa de Zonas de Cobertura de Agua Al Toque"
            src="https://www.google.com/maps?q=Huarmey,+Ancash,+Peru&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="coverage-photos">
          <figure data-reveal>
            <Image
              src="/images/puerto-huarmey.jpg"
              alt="Botes de pesca fondeados en la bahía de Puerto Huarmey"
              width={1920}
              height={1440}
              sizes="(max-width: 899px) 100vw, 40vw"
            />
            <figcaption className="photo-caption muted-on-coal">Puerto Huarmey.</figcaption>
          </figure>
          <figure data-reveal style={{ '--reveal-delay': '100ms' }}>
            <Image
              src="/images/rio-huarmey.jpg"
              alt="Río Huarmey corriendo junto a una ribera de piedras, con árboles y cerros al fondo"
              width={1920}
              height={1440}
              sizes="(max-width: 899px) 100vw, 56vw"
            />
            <figcaption className="photo-caption muted-on-coal">Río Huarmey.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
