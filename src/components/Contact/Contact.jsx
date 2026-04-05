import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contacto">

            <div className="section-header">
                
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
            aria-label="Consultar por WhatsApp"
            >
            <span className="whatsapp-tooltip">Consultanos por WhatsApp</span>
            <span className="wp-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="24" height="24" fill="white">
                    <path d="M16.001 3.2c-7.065 0-12.8 5.735-12.8 12.8 0 2.258.59 4.378 1.62 6.218L3.2 28.8l6.75-1.588c1.78.97 3.81 1.52 6.05 1.52 7.065 0 12.8-5.735 12.8-12.8s-5.735-12.8-12.8-12.8zm0 23.466c-2.005 0-3.876-.586-5.45-1.59l-.39-.247-4.004.94.92-3.9-.254-.4c-1.07-1.69-1.68-3.67-1.68-5.74 0-5.96 4.85-10.81 10.81-10.81s10.81 4.85 10.81 10.81-4.85 10.81-10.81 10.81zm5.93-8.12c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.7.08-.32-.16-1.34-.5-2.55-1.6-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.02-.57-.08-.16-.74-1.78-1.02-2.44-.27-.65-.55-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.12-1.14 2.73 0 1.61 1.17 3.16 1.34 3.38.16.22 2.3 3.5 5.58 4.9.78.34 1.38.54 1.85.7.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.53-.08-.13-.3-.21-.63-.38z"/>
                </svg>
            </span>
            </a>

        </section>
    )
}

export default Contact;

