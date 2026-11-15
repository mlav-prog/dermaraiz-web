import { useEffect, useRef, useState } from "react";
import "./ImplanteCapilar.css";
import "../../components/TreatmentPage/TreatmentPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RelatedTreatments from "../../components/RelatedTreatments/RelatedTreatments";
import { resultImages, treatmentImages } from "../../assets/images";
import recipientMarking from "../../assets/registros-noviembre/implante-marcacion-y-post.jpeg";
import microscope from "../../assets/registros-noviembre/equipo-microscopio.jpeg";
import microscopeVideo from "../../assets/registros-noviembre/registro-04.mp4";
import { BOOKING_PATH } from "../../utils/contactLinks";
import { getTreatmentContactHref } from "../../utils/treatmentInterest";

const PROCESS_STEP_COUNT = 5;

function ImplanteCapilar() {
  const implantContactHref = getTreatmentContactHref("implante");
  const [activeStep, setActiveStep] = useState(0);
  const [autoAdvance] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hoveringStep, setHoveringStep] = useState(false);
  const [focusedStep, setFocusedStep] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const stepsRef = useRef(null);
  const rotating = autoAdvance && !hoveringStep && !focusedStep;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setStepsVisible(entry.isIntersecting);
    }, { threshold: 0.25 });
    observer.observe(stepsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!rotating || !stepsVisible) return;
    const timer = window.setTimeout(() => {
      setActiveStep((step) => (step + 1) % PROCESS_STEP_COUNT);
    }, activeStep === 2 ? 12000 : 7000);
    return () => window.clearTimeout(timer);
  }, [activeStep, rotating, stepsVisible]);

  function moveStep(direction) {
    setActiveStep((step) => (step + direction + PROCESS_STEP_COUNT) % PROCESS_STEP_COUNT);
  }

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

            <h1>Implante capilar en Buenos Aires con técnica FUE y planificación personalizada</h1>

            <p>
              En Dermaraíz, CABA, el implante capilar FUE traslada unidades
              foliculares propias desde la zona donante hacia las áreas
              despobladas. Cada caso se planifica para cuidar diseño, ángulo,
              dirección y densidad.
            </p>

            <div className="implant-hero-buttons">
              <a
                href={BOOKING_PATH}
                className="btn-primary"
              >
                Reservar evaluación capilar
              </a>

              <a
                href={implantContactHref}
                className="btn-secondary"
              >
                Solicitar consulta por implante
              </a>
            </div>
          </div>

          <figure className="implant-hero-media">
            <img
              src={treatmentImages.implantProcedure}
              alt="Procedimiento de implante capilar FUE realizado por Hernán en Dermaraíz Buenos Aires"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </section>

        <section className="implant-section implant-case" aria-labelledby="implant-case-title">
          <div className="implant-section-header">
            <span className="section-tag">Caso de Dermaraíz</span>
            <h2 id="implant-case-title">Antes y post inmediato del implante</h2>
            <p>Dos momentos del mismo procedimiento: antes del implante y al finalizarlo. El crecimiento del cabello se evalúa más adelante, durante los controles.</p>
          </div>
          <div className="implant-case-pair">
            <figure>
              <img src={resultImages.implantBefore} alt="Vista superior del cuero cabelludo antes del implante" loading="lazy" decoding="async" />
              <figcaption>Antes del implante</figcaption>
            </figure>
            <figure>
              <img src={resultImages.implantPost} alt="Vista superior de la zona implantada al finalizar el procedimiento" loading="lazy" decoding="async" />
              <figcaption>Post inmediato</figcaption>
            </figure>
          </div>
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

          <div ref={stepsRef} className="implant-steps" role="group" aria-label="Etapas del implante capilar">
            <div className="implant-step-controls">
              <button type="button" onClick={() => moveStep(-1)} aria-label="Paso anterior" aria-controls="implant-step-slides">‹</button>
              <span aria-live={rotating ? "off" : "polite"}>Paso {activeStep + 1} de {PROCESS_STEP_COUNT}</span>
              <button type="button" onClick={() => moveStep(1)} aria-label="Paso siguiente" aria-controls="implant-step-slides">›</button>
            </div>
            <div
              id="implant-step-slides"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setHoveringStep(true);
              }}
              onPointerLeave={() => setHoveringStep(false)}
              onFocus={() => setFocusedStep(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setFocusedStep(false);
              }}
            >
            <article className="implant-card" hidden={activeStep !== 0}>
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

            <article className="implant-card" hidden={activeStep !== 1}>
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

            <article className="implant-card implant-microscope" hidden={activeStep !== 2}>
              <figure className="implant-card-media">
                {activeStep === 2 && <video
                  src={microscopeVideo}
                  poster={microscope}
                  autoPlay
                  muted
                  controls
                  playsInline
                  aria-labelledby="implant-microscope-title"
                />}
              </figure>
              <span>03</span>
              <h3 id="implant-microscope-title">Trabajo con microscopio</h3>
              <p>El equipo prepara las unidades foliculares antes de colocarlas.</p>
            </article>

            <article className="implant-card" hidden={activeStep !== 3}>
              <figure className="implant-card-media">
                <img
                  className="implant-recipient-marking"
                  src={recipientMarking}
                  alt="Marcación previa de la zona receptora del implante"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span>04</span>
              <h3>Zona receptora</h3>
              <p>
                Se realizan incisiones en el cuero cabelludo según la zona, la
                angulación natural del pelo y la densidad buscada.
              </p>
            </article>

            <article className="implant-card" hidden={activeStep !== 4}>
              <figure className="implant-card-media">
                <img
                  src={treatmentImages.implantProcedure}
                  alt="Trabajo técnico durante implante capilar FUE en Dermaraíz"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span>05</span>
              <h3>Colocación</h3>
              <p>
                Los folículos extraídos se insertan en las incisiones respetando
                el ángulo correspondiente para un resultado natural.
              </p>
            </article>
            </div>
          </div>
        </section>

        <div className="implant-process-cta">
          <a href={BOOKING_PATH} className="btn-primary">Reservar evaluación capilar</a>
        </div>

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
              src={treatmentImages.implantProcedure}
              alt="Hernán realizando procedimiento de implante capilar FUE en Dermaraíz"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Procedimiento</span>
              <p>Trabajo técnico durante la implantación capilar FUE.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={treatmentImages.implantFrontalPostAugust}
              alt="Zona frontal posterior a implante capilar FUE en Dermaraíz Buenos Aires"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Zona receptora</span>
              <p>Control visual de la zona frontal luego del procedimiento.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={treatmentImages.implantFrontMarking}
              alt="Diseño frontal previo a implante capilar FUE en Dermaraíz"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Planificación</span>
              <p>Diseño previo para definir distribución, cobertura y naturalidad.</p>
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
              <h3>¿El implante capilar FUE deja un resultado natural?</h3>
              <p>
                La naturalidad depende del diseño, la distribución, el ángulo
                de implantación y la planificación de cada caso.
              </p>
            </article>

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

            <article className="implant-faq-card">
              <h3>¿Cuánto cuesta un implante capilar?</h3>
              <p>
                El valor depende de la cantidad de unidades foliculares, la zona
                a tratar y la planificación. La evaluación permite preparar un
                presupuesto personalizado para cada caso.
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
              href={BOOKING_PATH}
              className="btn-primary"
            >
              Reservar evaluación para implante
            </a>

            <a
              href={implantContactHref}
              className="btn-secondary"
            >
              Solicitar consulta por implante
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ImplanteCapilar;
