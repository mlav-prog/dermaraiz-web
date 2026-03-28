import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contacto">
            <div className="contact-header">
                <h2>Reservá tu consulta</h2>

                <p>
                    Estamos para acopañarte en cada etapa de tu tratamiento capilar.
                    Elegí la forma de contacto que te resulte más cómoda.
                </p>
            </div>

            <div className="contact-grid">
                <div className="contact-card">
                    <h3>Agenda tu turno online</h3>
                    <p>
                        Reservá tu consulta de forma rápida y segura a través de AgendaPro.
                    </p>

                    <a 
                        href="https://link.agendapro.com/ar/dermaraizestetica/4f640556?fbclid=PAVERTVgQnaZ1leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadhT0Q_xmeF7cuYIcILwcK_Hh9ymS5RGLsceY3VH6xqc0OseCfsF2EKNycuZw_aem_gqokXnHZamyrFdlWW1Tffg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-button primary"
                    >
                        Reservar en AgendaPro
                    </a>
                </div>

                <div className="contact-card">
                    <h3>Contactanos por WhatsApp</h3>
                    <p>
                        Si querés hacer una consulta rápida o recibir asesoramiento, también
                        podés escribirnos directamente.
                    </p>

                    <a 
                        href="https://wa.me/5491173565160?text=Hola,%20quiero%20consultar%20por%20un%20tratamiento%20capilar." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-button secondary"
                    >
                        Enviar WhatsApp
                    </a>
                </div>
                <div className="contact-card">
                    <h3>Seguinos en Instagram</h3>
                    <p>
                        Conocé más resultados, novedades y contenidos de la clínica en nuestro perfil.
                    </p>

                    <a
                        href="https://www.instagram.com/derma_raiz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button secondary"
                    >
                        Ver Instagram
                    </a>
                </div>
                <div className="contact-info">
                    <p>
                        <strong>Dirección:</strong>
                    </p>
                    <a 
                        href="https://share.google/rISe30XnZe3u7ZIem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-map-link"
                    >
                    Cdad. de la Paz 2984 Depto 2, C1429 Cdad. Autónoma de Buenos Aires  

                    </a>

                </div>
            </div>
        </section>
    )
}

export default Contact;

