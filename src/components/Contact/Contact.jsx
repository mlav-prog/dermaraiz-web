import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contacto">

            <div className="contact-header">
                
                <p className="section-tag">Contacto</p>

                <h2>Reservá tu consulta de forma simple y rápida</h2>

                <p className="section-description">
                    Elegí la opción que te resulte más cómoda para comenzar tu tratamiento capilar.
                    Estamos para acompañarte en todo el proceso.
                </p>
            </div>

            <div className="contact-grid">
                <div className="contact-card featured">

                    <span className="contact-badge">Recomendado</span>
                    
                    <h3>Reserva tu turno online</h3>

                    <p>
                        Elegí día y horario disponible de forma rápida y segura a través de AgendaPro.
                    </p>

                    <a 
                        href="https://link.agendapro.com/ar/dermaraizestetica/4f640556?fbclid=PAVERTVgQnaZ1leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadhT0Q_xmeF7cuYIcILwcK_Hh9ymS5RGLsceY3VH6xqc0OseCfsF2EKNycuZw_aem_gqokXnHZamyrFdlWW1Tffg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-button primary"
                    >
                        Reservar ahora
                    </a>
                </div>

                <div className="contact-card">

                    <h3>Consulta por WhatsApp</h3>

                    <p>
                        Hacé tu consulta directamente y recibí asesoramiento personalizado.
                    </p>

                    <a 
                        href="https://wa.me/5491173565160?text=Hola,%20quiero%20consultar%20por%20un%20tratamiento%20capilar." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-button secondary"
                    >
                        Enviar mensaje
                    </a>
                </div>
                <div className="contact-card">
                    <h3>Ver más en Instagram</h3>
                    <p>
                        Conocé resultados reales, novedades y contenido de la clínica.
                    </p>

                    <a
                        href="https://www.instagram.com/derma_raiz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button secondary"
                    >
                        Ir a Instagram
                    </a>
                </div>
            </div>

            <div className="contact-info">
                <p className="contact-location-title">
                    <strong>Ubicación</strong>
                </p>

                <a 
                    href="https://share.google/rISe30XnZe3u7ZIem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-link"
                >
                    Cdad. de la Paz 2984 Depto 2, CABA
                </a>
            </div>

            <div className="contact-map-embed">
                <iframe 
                    src="https://www.google.com/maps?q=Cdad.+de+la+Paz+2984,+CABA&output=embed" 
                    title="Ubicación de Dermaraíz"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy= "no-referrer-when-downgrade"
                ></iframe>

            </div>

            <a 
            href="https://wa.me/5491173565160"
            className= "whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            >
            WhatsApp
            </a>

        </section>
    )
}

export default Contact;

