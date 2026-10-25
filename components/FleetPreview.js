'use client';
import { useState } from 'react';
import { useQuoteModal } from '@/components/quote/QuoteModalProvider';

const TRUCKS = [30, 15, 10];
const HOME_TANK_LITERS = 1100;

const PRESETS = [
  { label: 'Tanque de casa', value: 2 },
  { label: 'Hotel o colegio', value: 12 },
  { label: 'Obra, una semana', value: 45 },
  { label: 'Reservorio de fundo', value: 90 },
];

const fleetItems = [
  {
    size: 10,
    title: 'Cisterna de 10 m³',
    specs: 'Entra a calles estrechas. Para comercios, hoteles pequeños y emergencias en casa.',
    detail: 'Bomba de alto flujo incluida.',
  },
  {
    size: 15,
    title: 'Cisterna de 15 m³',
    specs: 'La más versátil: construcción, fundos agrícolas y clientes con entregas fijas.',
    detail: 'Mangueras de descarga de 50 metros.',
  },
  {
    size: 30,
    title: 'Cisterna de 30 m³',
    specs: 'Carga pesada para minería, plantas industriales y llenado de reservorios.',
    detail: 'Tanque de acero inoxidable sanitizado.',
  },
];

/**
 * Reparte un volumen en el menor número de viajes posible y, a igual número
 * de viajes, con la menor capacidad ociosa.
 */
export function planTrips(volume) {
  const loads = [];
  let rest = volume;
  while (rest > 30) {
    loads.push(30);
    rest -= 30;
  }
  if (rest > 25) loads.push(30);
  else if (rest > 15) loads.push(15, 10);
  else if (rest > 10) loads.push(15);
  else if (rest > 0) loads.push(10);
  return loads;
}

function describeLoads(loads) {
  const counts = TRUCKS.map((size) => [size, loads.filter((l) => l === size).length]).filter(([, n]) => n > 0);
  return counts.map(([size, n]) => `${n} de ${size} m³`).join(' + ');
}

// Separador de miles fijo (no toLocaleString) para que servidor y navegador rendericen lo mismo
const format = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default function FleetPreview({ onOpenQuoteModal }) {
  const { openQuoteModal } = useQuoteModal();
  const [volume, setVolume] = useState(18);

  const loads = planTrips(volume);
  const trips = loads.length;
  const tanks = Math.ceil((volume * 1000) / HOME_TANK_LITERS);

  const openQuote = (serviceName) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(serviceName);
    } else {
      openQuoteModal(serviceName);
    }
  };

  return (
    <section id="flota" className="chapter calc" data-ink="dark">
      <div className="frame">
        <div className="grid fleet-head">
          <h2 className="display section-heading" data-reveal>¿Cuánta agua necesitas?</h2>
          <p className="section-intro muted-on-paper" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Mueve la barra o elige un caso. Te decimos qué cisternas salen y en cuántos viajes, con la flota que tenemos hoy.
          </p>
        </div>

        <div className="calc-control" data-reveal>
          <label htmlFor="calc-volume">Volumen: {format(volume)} m³ ({format(volume * 1000)} litros)</label>
          <input
            id="calc-volume"
            className="calc-range"
            type="range"
            min={1}
            max={120}
            step={1}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
          <div className="calc-presets" role="group" aria-label="Casos frecuentes">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                aria-pressed={volume === preset.value}
                onClick={() => setVolume(preset.value)}
              >
                {preset.label} · {preset.value} m³
              </button>
            ))}
          </div>
        </div>

        <div className="calc-specimens" aria-live="polite">
          <div className="specimen">
            <p className="display specimen-value tabular">
              {format(volume)}<small>m³</small>
            </p>
            <p className="specimen-note muted-on-paper">
              Lo que necesitas: igual a llenar {format(tanks)} {tanks === 1 ? 'tanque' : 'tanques'} de 1,100 litros, el de casa.
            </p>
          </div>
          <div className="specimen specimen--out">
            <p className="display specimen-value tabular">
              {trips}<small>{trips === 1 ? 'viaje' : 'viajes'}</small>
            </p>
            <p className="specimen-note muted-on-paper">
              Lo que enviamos: {describeLoads(loads)}. Si es entrega recurrente, lo repartimos en tus fechas.
            </p>
          </div>
        </div>

        <div className="calc-footer">
          <button
            type="button"
            className="btn btn-primary btn-large"
            onClick={() => openQuote(`Suministro de ${volume} m³ (${describeLoads(loads)})`)}
          >
            Cotizar {format(volume)} m³
          </button>
          <span className="muted-on-paper small">El precio depende de la distancia, el acceso y la frecuencia.</span>
        </div>

        <h3 className="trucks-title" data-reveal>La flota, unidad por unidad</h3>
        <ul className="trucks">
          {fleetItems.map((item, idx) => (
            <li key={item.size} className="truck" data-reveal style={{ '--reveal-delay': `${idx * 80}ms` }}>
              <p className="display truck-size tabular" aria-hidden="true">
                {item.size}<small>m³</small>
              </p>
              <div className="truck-text">
                <h4>{item.title}</h4>
                <p>{item.specs} {item.detail}</p>
              </div>
              <button
                type="button"
                onClick={() => openQuote(`Alquiler/Servicio de ${item.title}`)}
                className="btn btn-dark"
              >
                Solicitar disponibilidad
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
