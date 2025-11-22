import FadeIn from './FadeIn';

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <FadeIn className="contact-text">
                    <h2 className="section-title">Contáctanos</h2>
                    <p>Estamos listos para atenderte. Llámanos o escríbenos por WhatsApp.</p>
                    <a href="https://wa.me/51999999999" className="btn btn-primary btn-large">
                        WhatsApp: 999 999 999
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
