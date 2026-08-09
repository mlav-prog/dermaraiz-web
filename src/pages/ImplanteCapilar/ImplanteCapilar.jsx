import "./ImplanteCapilar.css";
import "../../components/TreatmentPage/TreatmentPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RelatedTreatments from "../../components/RelatedTreatments/RelatedTreatments";
import { resultImages, treatmentImages } from "../../assets/images";
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
          onClick={() => {
            window.location.href = "/#tratamientos";
          }}
          aria-label="Volver a tratamientos"
        >
          <span className="back-icon">‹</span>
        </button>

        <section className="implant-hero">
          <div className="implant-hero-content">
            <span className="section-tag">Implante capilar FUE</span>

            <h1>Implante capilar FUE en CABA con planificación personalizada</h1>

            <p>
              El implante capilar FUE traslada unidades foliculares propias
              desde la zona donante hacia las áreas despobladas. Cada caso se
              planifica para cuidar diseño, ángulo, dirección y densidad.
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
              src={treatmentImages.implantFueProcedure}
              alt="Procedimiento de implante capilar FUE en Dermaraíz Buenos Aires"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </section>

        <section className="implant-section implant-process-section">
          <div className="implant-section-header">
            <span className="section-tag">¿Cómo se realiza?</span>

            <h2>Un procedimiento planificado en cada etapa</h2>

            <p>
              Antes de implantar se diseña el caso con el paciente. Luego el
              procedimiento se organiza en extracción FUE, preparación de la zona
              receptora y colocación de los folículos con su ángulo correspondiente.
            </p>
          </div>

          <div className="implant-steps">
            <article className="implant-card">
              <figure className="implant-card-media">
                <img
                  src={treatmentImages.implantFrontMarking}
                  alt="Diseño de línea frontal para implante capilar FUE en Dermaraíz"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span>01</span>
              <h3>Diseño previo</h3>
              <p>
                Se evalúa la zona frontal, coronilla o área a tratar y se
                acuerda un diseño personalizado para buscar naturalidad.
              </p>
            </article>

            <article className="implant-card">
              <figure className="implant-card-media">
                <img
                  src={treatmentImages.implantDonorMarking}
                  alt="Marcación de zona donante para extracción FUE en implante capilar"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span>02</span>
              <h3>Extracción FUE</h3>
              <p>
                Se extraen unidades foliculares una por una desde nuca y
                laterales, usando punch con micromotor.
              </p>
            </article>

            <article className="implant-card">
              <figure className="implant-card-media">
                <img
                  src={treatmentImages.implantProcedure}
                  alt="Preparación de zona receptora durante implante capilar FUE"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span>03</span>
              <h3>Zona receptora</h3>
              <p>
                Se realizan incisiones en el cuero cabelludo según la zona, la
                angulación natural del pelo y la densidad buscada.
              </p>
            </article>

            <article className="implant-card">
              <figure className="implant-card-media">
                <img
                  src={treatmentImages.implantDetail}
                  alt="Colocación de unidades foliculares durante implante capilar FUE"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span>04</span>
              <h3>Colocación</h3>
              <p>
                Los folículos extraídos se insertan en las incisiones respetando
                el ángulo correspondiente para un resultado natural.
              </p>
            </article>
          </div>
        </section>

        <section className="implant-visual-story" aria-label="Imágenes de implante capilar FUE">
          <div className="implant-visual-story-header">
            <span className="section-tag">Galería</span>
            <h2>Registro visual del implante</h2>
            <p>
              Cada imagen muestra una instancia del proceso: marcación, trabajo
              técnico, equipo y evolución inmediata posterior.
            </p>
          </div>

          <figure>
            <img
              src={treatmentImages.implantFrontMarking}
              alt="Marcación frontal previa al implante capilar FUE en Dermaraíz"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Diseño frontal</span>
              <p>Marcación previa para definir línea y distribución.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={treatmentImages.implantDonorMarking}
              alt="Marcación de zona donante previa al implante capilar FUE"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Zona donante</span>
              <p>Planificación de extracción de unidades foliculares.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={treatmentImages.implantDonorZoneDiagram}
              alt="Esquema de zona donante adecuada para implante capilar FUE"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Zona segura</span>
              <p>Referencia visual para entender de dónde se extraen folículos.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={treatmentImages.implantTeam}
              alt="Equipo profesional de Dermaraíz trabajando en implante capilar"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Equipo</span>
              <p>Trabajo coordinado durante el procedimiento.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={treatmentImages.implantDoubleImplantation}
              alt="Equipo médico de Dermaraíz realizando un implante capilar FUE"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Técnica FUE</span>
              <p>Implantación precisa respetando ángulo y dirección.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={resultImages.implantFue}
              alt="Evolución inmediata posterior a un implante capilar FUE en Dermaraíz"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Post inmediato</span>
              <p>Registro posterior al procedimiento.</p>
            </figcaption>
          </figure>
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
                La línea frontal y la distribución se acuerdan con el paciente
                para buscar naturalidad y armonía.
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
                El cabello trasplantado puede caer en las primeras semanas; el
                crecimiento visible suele iniciar cerca de los 3 meses.
              </p>
            </article>

            <article className="implant-fact-card">
              <span>Seguimiento</span>
              <p>
                El resultado se acompaña con controles y suele consolidarse
                progresivamente hacia los meses posteriores.
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

        <RelatedTreatments currentPath="/implante-capilar/" />

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
