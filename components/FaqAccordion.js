import { PUBLIC_CONFIG } from '@/lib/contactConfig';

const faqs = [
  {
    q: '¿Qué volumen de agua pueden entregar?',
    a: 'Tenemos cisternas de 10 m³ (10,000 litros), 15 m³ (15,000 litros) y 30 m³ (30,000 litros). Podemos enviar una sola unidad o varios viajes seguidos para proyectos de cientos de metros cúbicos.',
  },
  {
    q: '¿Realizan entregas programadas?',
    a: 'Sí, coordinamos entregas programadas con frecuencias fijas (diarias, semanales o mensuales) con un contrato de abastecimiento, para que tu empresa, fundo u obra nunca se quede sin agua.',
  },
  {
    q: '¿Atienden emergencias?',
    a: 'Sí. Ante un corte del servicio público, una bomba malograda o una falla imprevista, enviamos la unidad libre más cercana con despacho prioritario.',
  },
  {
    q: '¿En qué zonas trabajan?',
    a: `Por ahora operamos en ${PUBLIC_CONFIG.serviceArea}: la ciudad, Puerto Huarmey, el valle del río Huarmey y los tramos cercanos de la Panamericana Norte. Todavía no cubrimos toda la región de ${PUBLIC_CONFIG.serviceRegion}; para puntos fuera de ${PUBLIC_CONFIG.serviceArea} evaluamos un servicio especial.`,
  },
  {
    q: '¿Puedo contratar entregas recurrentes?',
    a: 'Sí. Armamos planes de abastecimiento recurrente con factura y condiciones preferenciales para empresas, hoteles, industrias y obras.',
  },
  {
    q: '¿Alquilan cisternas?',
    a: 'Sí, alquilamos camiones cisterna por días, semanas o meses para obras, proyectos mineros o almacenamiento temporal.',
  },
  {
    q: '¿Cuánto cuesta una entrega?',
    a: 'Depende del volumen, la distancia al punto de entrega, el acceso y la frecuencia del servicio. Escríbenos con esos datos y te enviamos una cotización exacta.',
  },
  {
    q: '¿Con cuánto tiempo debo solicitar el servicio?',
    a: 'Para entregas programadas, con 24 a 48 horas de anticipación. Para emergencias atendemos según las unidades disponibles en ese momento.',
  },
];

export default function FaqAccordion() {
  return (
    <section id="faq" className="chapter chapter--paper" data-ink="dark">
      <div className="frame">
        <h2 className="display faq-heading" data-reveal>Preguntas frecuentes</h2>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <details key={faq.q} className="faq-item" open={idx === 0} data-reveal>
              <summary>
                <span>{faq.q}</span>
                <span className="chevron" aria-hidden="true" />
              </summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
