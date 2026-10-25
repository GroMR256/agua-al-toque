const groups = [
  {
    when: 'Hoy',
    rows: [
      { what: 'Nos escribes: lugar, volumen y fecha', value: 'WhatsApp o web' },
      { what: 'Revisamos la ruta y el acceso', value: 'mismo día' },
      { what: 'Te enviamos la cotización', value: 'mismo día' },
    ],
  },
  {
    when: 'Antes de la entrega',
    rows: [
      { what: 'Fijamos día, hora y punto de descarga', value: '24 a 48 h antes' },
      { what: 'Coordinamos el ingreso con tu obra o local', value: 'si aplica' },
    ],
  },
  {
    when: 'El día de la entrega',
    rows: [
      { what: 'La cisterna llega al punto acordado', value: 'en tu turno' },
      { what: 'Descarga directa con bomba propia', value: 'en el sitio' },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="chapter chapter--coal" data-ink="paper">
      <div className="frame grid process">
        <div className="process-text">
          <h2 className="display section-heading" data-reveal>Así llega tu agua</h2>
          <p className="section-intro muted-on-coal" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Cada pedido sale con su orden de despacho. Para entregas programadas pide con 24 a 48 horas; en una emergencia
            te decimos al momento qué unidad está libre.
          </p>
        </div>

        <article className="slip" data-reveal style={{ '--reveal-delay': '140ms' }} aria-label="Orden de despacho de ejemplo">
          <div className="slip-title">
            <span>Orden de despacho</span>
            <span>Agua Al Toque</span>
          </div>

          {groups.map((group) => (
            <div key={group.when} className="slip-group">
              <h3>{group.when}</h3>
              <ol>
                {group.rows.map((row) => (
                  <li key={row.what} className="slip-row">
                    <span>{row.what}</span>
                    <span className="dots" aria-hidden="true" />
                    <span>{row.value}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}

          <div className="slip-total">
            <span>Agua en tu tanque</span>
            <span>24 a 48 h</span>
          </div>
        </article>
      </div>
    </section>
  );
}
