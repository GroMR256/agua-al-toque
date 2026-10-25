'use client';
import { useEffect } from 'react';

/**
 * Capa de movimiento de la página:
 * - [data-reveal]: entra una sola vez al llegar a la pantalla (ver globals.css).
 * - [data-scroll-scale]: la foto se acerca lentamente mientras se recorre la página.
 * Sin JavaScript el contenido se ve igual: la clase .js solo existe si el script corre.
 */
export default function MotionLayer() {
  useEffect(() => {
    // Se revela todo lo que ya cruzó el borde inferior de la pantalla, también lo que
    // quedó arriba tras un salto (un enlace del menú, Inicio/Fin), no solo lo visible.
    let pending = Array.from(document.querySelectorAll('[data-reveal]:not(.is-in)'));
    const bands = document.querySelectorAll('[data-scroll-scale]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      if (pending.length) {
        pending = pending.filter((el) => {
          if (el.getBoundingClientRect().top < vh * 0.92) {
            el.classList.add('is-in');
            return false;
          }
          return true;
        });
      }

      if (!reduceMotion) {
        bands.forEach((band) => {
          const rect = band.getBoundingClientRect();
          const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
          band.style.setProperty('--band-scale', (1.14 - 0.14 * progress).toFixed(4));
        });
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
