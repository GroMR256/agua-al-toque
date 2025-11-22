import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <h1 className="hero-title">Hidratación al Instante</h1>
                <p className="hero-subtitle">Agua pura y refrescante entregada en la puerta de tu casa en minutos.</p>
                <div className="hero-actions">
                    <Link href="#order" className="btn btn-primary btn-large">Pide Tu Agua</Link>
                    <Link href="#products" className="btn btn-secondary btn-large">Ver Productos</Link>
                </div>
            </div>
        </section>
    );
}
