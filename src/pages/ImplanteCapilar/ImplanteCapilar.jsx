import "./ImplanteCapilar.css";
import "../../components/TreatmentPage/TreatmentPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import implanteImage from "../../assets/treatments/implante-capilar-fue-procedimiento-dermaraiz.jpeg";
import { AGENDA_PRO_URL, getWhatsappUrl } from "../../utils/contactLinks";

function ImplanteCapilar() {
  const whatsappUrl = getWhatsappUrl("Hola, quiero consultar por implante capilar FUE.");

  return (
    <>
      <Navbar />

      <main className="implant-page">
        <button
          type="button"
          className="floating-back-button"
          onClick={() => window.location.href = "/#tratamientos"}
          aria-label="Volver a tratamientos"
        >
          <span className="back-icon">‹</span>
        </button>
        <section className="implant-hero">
          <div className="implant-hero-content">
            <span className="section-tag">Implante capilar FUE</span>

            <h1>Recuperá densidad capilar con un resultado natural</h1>

            <p>
              El implante capilar consiste en trasladar cabello propio desde una
              zona donante hacia las áreas despobladas, respetando la dirección,
              el ángulo y la densidad natural del crecimiento.
            </p>

            <div className="implant-hero-buttons">
              <a
                href={AGENDA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reservar evaluación para implante
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          <figure className="implant-hero-media">
            <img
              src={implanteImage}
              alt="Procedimiento de implante capilar FUE en Dermaraiz"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </section>

        <section className="implant-section">
          <div className="implant-section-header">
            <span className="section-tag">¿Cómo se realiza?</span>

            <h2>Un procedimiento planificado en cada etapa</h2>

            <p>
              La técnica FUE permite extraer unidades foliculares de forma
              individual, para luego implantarlas en la zona receptora según el
              diseño acordado con el paciente.
            </p>
          </div>

          <div className="implant-steps">
            <article className="implant-card">
              <span>01</span>
              <h3>Planificación y diseño</h3>
              <p>
                Se evalúa la zona a implantar y se define un diseño
                personalizado, buscando naturalidad y armonía con el rostro.
              </p>
            </article>

            <article className="implant-card">
              <span>02</span>
              <h3>Extracción FUE</h3>
              <p>
                Se extraen folículos uno por uno desde la zona donante,
                generalmente nuca y laterales, utilizando micromotor.
              </p>
            </article>

            <article className="implant-card">
              <span>03</span>
              <h3>Implantación</h3>
              <p>
                Los folículos se colocan en la zona receptora respetando el
                ángulo, la dirección y la densidad necesaria.
              </p>
            </article>
          </div>
        </section>

        <section className="implant-facts">
          <div className="implant-section-header">
            <span className="section-tag">Qué esperar</span>

            <h2>Información clave antes del procedimiento</h2>
          </div>

          <div className="implant-facts-grid">
            <article className="implant-fact-card">
              <span>Diseño</span>
              <p>
                Se planifica la línea frontal y la distribución folicular
                buscando naturalidad y armonía con el rostro.
              </p>
            </article>

            <article className="implant-fact-card">
              <span>Procedimiento</span>
              <p>
                La técnica FUE trabaja unidad por unidad para extraer e
                implantar cabello propio en la zona receptora.
              </p>
            </article>

            <article className="implant-fact-card">
              <span>Evolución</span>
              <p>
                El crecimiento visible suele comenzar a partir de los primeros
                meses y continúa progresando con el tiempo.
              </p>
            </article>

            <article className="implant-fact-card">
              <span>Seguimiento</span>
              <p>
                Los controles posteriores ayudan a acompañar la recuperación y
                cuidar el resultado.
              </p>
            </article>
          </div>
        </section>

        <section className="implant-info-grid">
          <article className="implant-info-card">
            <h2>Estudios previos</h2>

            <ul>
              <li>Antitetánica vigente.</li>
              <li>Laboratorio básico con coagulograma.</li>
              <li>ECG con valoración quirúrgica.</li>
              <li>Consulta previa si se toma medicación crónica.</li>
            </ul>
          </article>

          <article className="implant-info-card">
            <h2>Recuperación</h2>

            <p>
              El cabello trasplantado puede caer durante las primeras semanas,
              pero la unidad folicular permanece. El crecimiento visible suele
              comenzar a los 3 meses, mejora a los 6 meses y el resultado final
              se aprecia cerca de los 13 meses.
            </p>
          </article>
        </section>

        <section className="implant-care-guide">
          <div className="implant-care-intro">
            <span className="section-tag">Cuidados post implante</span>

            <h2>Recomendaciones para cuidar la recuperación</h2>

            <p>
              Luego del procedimiento se indican cuidados específicos para
              proteger la zona implantada, favorecer la cicatrización y
              acompañar la evolución. Las indicaciones pueden ajustarse según
              cada paciente.
            </p>
          </div>

          <div className="implant-care-timeline">
            <article className="implant-care-step">
              <span>Antes</span>
              <h3>Preparación previa</h3>
              <ul>
                <li>Realizar los estudios solicitados.</li>
                <li>Informar medicación crónica o antecedentes relevantes.</li>
                <li>Evitar automedicarse sin indicación profesional.</li>
              </ul>
            </article>

            <article className="implant-care-step">
              <span>24-48 h</span>
              <h3>Primeras horas</h3>
              <ul>
                <li>Reposo relativo y evitar esfuerzos.</li>
                <li>Dormir semisentado según indicación.</li>
                <li>No tocar ni rozar la zona implantada.</li>
              </ul>
            </article>

            <article className="implant-care-step">
              <span>7-14 días</span>
              <h3>Cuidados iniciales</h3>
              <ul>
                <li>No retirar costras: se desprenden solas.</li>
                <li>Evitar sol directo, alcohol, tabaco y actividad intensa.</li>
                <li>Seguir las pautas de higiene indicadas en consulta.</li>
              </ul>
            </article>

            <article className="implant-care-step">
              <span>Meses</span>
              <h3>Evolución del crecimiento</h3>
              <ul>
                <li>Puede haber caída inicial del cabello trasplantado.</li>
                <li>El crecimiento visible suele iniciar desde los 3 meses.</li>
                <li>El resultado continúa mejorando progresivamente.</li>
              </ul>
            </article>
          </div>

          <div className="implant-care-note">
            <h3>Consultá si aparece algo fuera de lo esperado</h3>

            <p>
              Si notás dolor intenso, sangrado persistente, fiebre, inflamación
              marcada o cualquier síntoma que te preocupe, es importante
              comunicarte con el equipo profesional.
            </p>
          </div>
        </section>

        <section className="implant-faq">
          <div className="implant-section-header">
            <span className="section-tag">Preguntas frecuentes</span>

            <h2>Dudas habituales sobre el implante capilar</h2>
          </div>

          <div className="implant-faq-grid">
            <article className="implant-faq-card">
              <h3>¿Quién puede realizarse un implante capilar?</h3>
              <p>
                La indicación depende de la zona donante, el tipo de alopecia,
                la edad, los antecedentes y los objetivos del paciente.
              </p>
            </article>

            <article className="implant-faq-card">
              <h3>¿El resultado es permanente?</h3>
              <p>
                Los folículos trasplantados provienen de una zona más resistente,
                pero el resultado debe acompañarse con seguimiento profesional.
              </p>
            </article>

            <article className="implant-faq-card">
              <h3>¿Cuándo empieza a crecer el cabello?</h3>
              <p>
                El crecimiento visible suele comenzar a partir de los primeros
                meses y continúa mejorando de forma progresiva.
              </p>
            </article>

            <article className="implant-faq-card">
              <h3>¿Necesito estudios previos?</h3>
              <p>
                Sí. Antes del procedimiento se solicitan estudios y una
                valoración profesional para realizarlo con seguridad.
              </p>
            </article>
          </div>
        </section>

        <section className="implant-cta">
          <h2>¿Querés saber si sos candidato para un implante capilar?</h2>

          <p>
            Reservá una consulta para evaluar tu caso y definir el tratamiento
            más adecuado.
          </p>

          <div className="implant-cta-actions">
            <a
              href={AGENDA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reservar evaluación para implante
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ImplanteCapilar;
