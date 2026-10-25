const fields = [
  {
    tone: 'coal',
    ink: 'paper',
    phrase: 'Flota propia',
    text: 'Los camiones son nuestros, sin intermediarios. Pasan inspección sanitaria y mecánica, y la hora que te confirmamos depende solo de nosotros.',
  },
  {
    tone: 'lake',
    ink: 'light',
    phrase: '24 horas',
    text: 'Un corte de agua no avisa. Contestamos de día y de noche y, si hay una unidad libre, sale de inmediato con despacho prioritario.',
    mirror: true,
  },
  {
    tone: 'glacier',
    ink: 'dark',
    phrase: 'Con factura',
    text: 'Para empresas: órdenes de compra, entregas con frecuencia fija y facturación formal. Una persona que conoce tu cuenta y tus horarios.',
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" aria-labelledby="why-title">
      <h2 id="why-title" className="visually-hidden">Por qué trabajar con nosotros</h2>
      {fields.map((field) => (
        <div
          key={field.phrase}
          className={`field field--${field.tone}${field.mirror ? ' field--mirror' : ''}`}
          data-ink={field.ink}
        >
          <p data-reveal>{field.text}</p>
          <h3 className="display" data-reveal style={{ '--reveal-delay': '100ms' }}>
            {field.phrase}
          </h3>
        </div>
      ))}
    </section>
  );
}
