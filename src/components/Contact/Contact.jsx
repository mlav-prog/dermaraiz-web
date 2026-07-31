import { useState } from "react";
import "./Contact.css";
import { AGENDA_PRO_URL, getWhatsappUrl } from "../../utils/contactLinks";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  treatment: "",
  message: "",
};

function Contact() {
  const [showMap, setShowMap] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      "Hola, quiero solicitar una evaluación en Dermaraíz.",
      "",
      `Nombre: ${formData.name}`,
      `Teléfono: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : null,
      `Tratamiento de interés: ${formData.treatment}`,
      formData.message ? `Mensaje: ${formData.message}` : null,
    ].filter(Boolean);

    window.open(getWhatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setStatus("Te abrimos el mensaje con tus datos para enviarlo.");
  };

  return (
    <section className="contact" id="contacto">
      <div className="section-header">
        <p className="section-tag">Contacto</p>
        <h2>Solicitá tu evaluación</h2>
        <p className="section-description">
          Completá el formulario y te contactamos para orientarte sobre el
          tratamiento más adecuado para tu caso.
        </p>
      </div>

      <div className="contact-main">
        <div className="contact-form-card">
          <h3>Dejanos tus datos</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label className="contact-field">
                <span>Nombre y apellido</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Teléfono</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej: 11 1234 5678"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
              </label>

              <label className="contact-field">
                <span>Tratamiento de interés</span>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccioná una opción</option>
                  <optgroup label="Tratamientos capilares">
                    <option value="Diagnóstico capilar">Diagnóstico capilar</option>
                    <option value="PRP capilar">PRP capilar</option>
                    <option value="Mesoterapia capilar">Mesoterapia capilar</option>
                    <option value="Implante capilar FUE">Implante capilar FUE</option>
                  </optgroup>
                  <optgroup label="Estética">
                    <option value="Plasma rico en plaquetas">Plasma rico en plaquetas</option>
                    <option value="Mesoterapia facial y corporal">Mesoterapia facial y corporal</option>
                    <option value="NCTF / PDRN">NCTF / PDRN</option>
                    <option value="Toxina botulínica">Toxina botulínica</option>
                    <option value="Peeling médico">Peeling médico</option>
                    <option value="Skinbooster">Skinbooster</option>
                  </optgroup>
                  <option value="No estoy seguro">No estoy seguro</option>
                </select>
              </label>

              <label className="contact-field full">
                <span>Mensaje</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contanos qué te gustaría mejorar o consultar."
                  rows="5"
                />
              </label>
            </div>

            <button className="contact-submit" type="submit">
              Enviar consulta
            </button>
            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>

        <div className="contact-side">
          <div className="contact-card featured">
            <span>Turnos online</span>
            <h3>Agendá tu evaluación</h3>
            <p>
              Elegí día y horario desde la agenda online para reservar tu
              consulta en pocos pasos.
            </p>
            <a className="contact-button" href={AGENDA_PRO_URL} target="_blank" rel="noreferrer">
              Reservar ahora
            </a>
          </div>

          <div className="contact-card">
            <h3>Seguinos en Instagram</h3>
            <p>Resultados, novedades y contenido del equipo Dermaraíz.</p>
            <a
              className="contact-button secondary"
              href="https://www.instagram.com/derma_raiz/"
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div>
          <h3>Ubicación</h3>
          <p>Cdad. de la Paz 2984 Depto 2, CABA</p>
        </div>
        <button className="map-toggle" type="button" onClick={() => setShowMap((value) => !value)}>
          {showMap ? "Ocultar mapa" : "Ver en Google Maps"}
        </button>
      </div>

      <div className={`contact-map-embed ${showMap ? "is-visible" : ""}`}>
        {showMap ? (
          <iframe
            title="Dermaraíz en Google Maps"
            src="https://www.google.com/maps?q=Ciudad%20de%20la%20Paz%202984%20Depto%202%20CABA&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="map-placeholder">
            <span>Mapa disponible al abrir la ubicación</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
