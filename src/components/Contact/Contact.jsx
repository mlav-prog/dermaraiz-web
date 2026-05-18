import "./Contact.css";
import { useState } from "react";
import { AGENDA_PRO_URL, getWhatsappUrl } from "../../utils/contactLinks";

function Contact() {
    const [showMap, setShowMap] = useState(false);

    return (
        <section className="contact" id="contacto">
            <div className="section-header">
                <p className="section-tag">Contacto</p>

                <h2>Reservá tu consulta de forma simple y rápida</h2>

                <p className="section-description">
                    Reservá tu turno online o escribinos por WhatsApp si tenés una duda puntual.
                    Elegí el camino más simple para comenzar.
                </p>
            </div>

            <div className="contact-grid">
                <div className="contact-card featured">
                    <span className="contact-badge">Recomendado</span>

                    <h3>Reservá tu turno online</h3>

                    <p>
                        Elegí día y horario disponible de forma rápida y segura a través de AgendaPro.
                    </p>

                    <a
                        href={AGENDA_PRO_URL}
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
                        href={getWhatsappUrl("Hola, quiero consultar por un tratamiento capilar.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button secondary"
                    >
                        Asesoramiento por WhatsApp
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
                    📍 Ubicación
                </p>

                <p className="contact-address">
                    Cdad. de la Paz 2984 Depto 2, CABA
                </p>

                <a 
                    href="https://share.google/rISe30XnZe3u7ZIem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-button"
                >
                    Ver en Google Maps →
                </a>
            </div>

            <div className="contact-map-embed">
                {!showMap ? (
                    <button
                        type="button"
                        className="map-placeholder"
                        onClick={() => setShowMap(true)}
                    >
                        Ver ubicación en el mapa
                    </button>
                ) : (
                    <iframe
                        src="https://www.google.com/maps?q=Cdad.+de+la+Paz+2984,+CABA&output=embed"
                        title="Ubicación de Dermaraíz"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                )}
            </div>

        </section>
    );
}

export default Contact;
