import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./Results.css";
import { comparisonCases, resultRecords } from "../../data/results";
import { getTreatmentContactHref } from "../../utils/treatmentInterest";

const recordWorkflowOrder = [
  "Evaluación y planificación",
  "Aplicación localizada",
  "Diseño y planificación",
  "Zona donante",
  "Trabajo técnico en consultorio",
  "Zona implantada post procedimiento",
  "Control de zona receptora",
];

const orderedResultRecords = [...resultRecords].sort(
  (first, second) => (
    recordWorkflowOrder.indexOf(first.title) - recordWorkflowOrder.indexOf(second.title)
  ),
);

function Results() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [recordSlideIndex, setRecordSlideIndex] = useState(orderedResultRecords.length);
  const [recordSlideStep, setRecordSlideStep] = useState(0);
  const [recordsTransitioning, setRecordsTransitioning] = useState(true);
  const [recordsPaused, setRecordsPaused] = useState(false);
  const recordsTrackRef = useRef(null);
  const activeCase = comparisonCases[activeCaseIndex];
  const loopedResultRecords = useMemo(
    () => [...orderedResultRecords, ...orderedResultRecords, ...orderedResultRecords],
    [],
  );

  const goToPreviousCase = () => {
    setActiveCaseIndex((currentIndex) => (
      currentIndex === 0 ? comparisonCases.length - 1 : currentIndex - 1
    ));
  };

  const goToNextCase = () => {
    setActiveCaseIndex((currentIndex) => (
      currentIndex === comparisonCases.length - 1 ? 0 : currentIndex + 1
    ));
  };

  const getComparisonImageClassName = (focus, orientation) => {
    const classes = [];

    if (focus) {
      classes.push(`results-comparison-image--${focus}`);
    }

    if (orientation) {
      classes.push(`results-comparison-image--${orientation}`);
    }

    return classes.length > 0 ? classes.join(" ") : undefined;
  };

  const scrollRecords = (direction) => {
    setRecordsTransitioning(true);
    setRecordSlideIndex((currentIndex) => currentIndex + direction);
  };

  useLayoutEffect(() => {
    const track = recordsTrackRef.current;
    const firstCard = track?.children[0];
    const secondCard = track?.children[1];

    if (!track || !firstCard || !secondCard) return undefined;

    const updateSlideStep = () => {
      setRecordSlideStep(secondCard.offsetLeft - firstCard.offsetLeft);
    };

    updateSlideStep();
    window.addEventListener("resize", updateSlideStep);
    return () => window.removeEventListener("resize", updateSlideStep);
  }, []);

  useEffect(() => {
    if (recordsPaused) return undefined;

    const autoplay = window.setInterval(() => scrollRecords(1), 3200);
    return () => window.clearInterval(autoplay);
  }, [recordsPaused]);

  useEffect(() => {
    if (recordsTransitioning) return undefined;

    const frame = window.requestAnimationFrame(() => setRecordsTransitioning(true));
    return () => window.cancelAnimationFrame(frame);
  }, [recordsTransitioning]);

  const handleRecordsTransitionEnd = () => {
    if (recordSlideIndex >= orderedResultRecords.length * 2) {
      setRecordsTransitioning(false);
      setRecordSlideIndex(orderedResultRecords.length);
      return;
    }

    if (recordSlideIndex < orderedResultRecords.length) {
      setRecordsTransitioning(false);
      setRecordSlideIndex((orderedResultRecords.length * 2) - 1);
    }
  };

  return (
    <section className="results" id="resultados">
      <div className="section-header">
        <p className="section-tag">Resultados</p>
        <h2>Casos reales que reflejan nuestro enfoque</h2>
        <p className="section-description">
          Mostramos evoluciones confirmadas y registros reales de tratamientos
          realizados en consultorio, con un enfoque personalizado para cada
          paciente.
        </p>
      </div>

      <div className="results-carousel" aria-label="Carrusel de resultados antes y después">
        <div className="results-carousel-top">
          <span className="results-carousel-count">
            Caso {activeCaseIndex + 1} de {comparisonCases.length}
          </span>

          <div className="results-carousel-actions" aria-label="Controles del carrusel">
            <button
              type="button"
              className="results-carousel-button"
              aria-label="Ver caso anterior"
              onClick={goToPreviousCase}
            >
              &lsaquo;
            </button>

            <button
              type="button"
              className="results-carousel-button"
              aria-label="Ver caso siguiente"
              onClick={goToNextCase}
            >
              &rsaquo;
            </button>
          </div>
        </div>

        <article
          className={`results-before-after${activeCase.images ? " has-gallery" : ""}`}
          key={activeCase.title}
        >
          <div className="results-before-after-content">
            <span className="results-case-tag">{activeCase.category}</span>
            <h3>{activeCase.title}</h3>
            <p>{activeCase.description}</p>
            <a href={getTreatmentContactHref(activeCase.treatmentKey)} className="results-link">
              Consultar mi caso
            </a>
          </div>

          <div className={`results-comparison${activeCase.isComposite ? " is-composite" : ""}${activeCase.images ? " has-gallery" : ""}`}>
            {activeCase.images ? (
              activeCase.images.map((item) => (
                <figure key={item.label}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className={getComparisonImageClassName(item.focus, item.orientation)}
                  />
                  <span>{item.label}</span>
                </figure>
              ))
            ) : activeCase.isComposite ? (
              <figure>
                <img src={activeCase.beforeImage} alt={activeCase.beforeAlt} loading="lazy" />
                <span>Antes / Después</span>
              </figure>
            ) : (
              <>
                <figure>
                  <img
                    src={activeCase.beforeImage}
                    alt={activeCase.beforeAlt}
                    loading="lazy"
                    className={getComparisonImageClassName(
                      activeCase.beforeFocus,
                      activeCase.beforeOrientation,
                    )}
                  />
                  <span>{activeCase.beforeLabel}</span>
                </figure>

                <figure>
                  <img
                    src={activeCase.afterImage}
                    alt={activeCase.afterAlt}
                    loading="lazy"
                    className={getComparisonImageClassName(
                      activeCase.afterFocus,
                      activeCase.afterOrientation,
                    )}
                  />
                  <span>{activeCase.afterLabel}</span>
                </figure>
              </>
            )}
          </div>
        </article>

        <div className="results-carousel-dots" aria-label="Casos disponibles">
          {comparisonCases.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`results-carousel-dot${activeCaseIndex === index ? " is-active" : ""}`}
              aria-label={`Ver caso ${index + 1}: ${item.title}`}
              aria-current={activeCaseIndex === index ? "true" : undefined}
              onClick={() => setActiveCaseIndex(index)}
            />
          ))}
        </div>
      </div>

      <div
        className="results-records-carousel"
        aria-label="Registros de tratamientos y procedimientos"
        onMouseEnter={() => setRecordsPaused(true)}
        onMouseLeave={() => setRecordsPaused(false)}
        onFocus={() => setRecordsPaused(true)}
        onBlur={() => setRecordsPaused(false)}
      >
        <div className="results-records-top">
          <div>
            <span className="results-case-tag">Más registros</span>
            <h3>Tratamientos y procedimientos</h3>
          </div>

          <div className="results-carousel-actions" aria-label="Controles de registros">
            <button
              type="button"
              className="results-carousel-button"
              aria-label="Ver registros anteriores"
              onClick={() => scrollRecords(-1)}
            >
              &lsaquo;
            </button>
            <button
              type="button"
              className="results-carousel-button"
              aria-label="Ver registros siguientes"
              onClick={() => scrollRecords(1)}
            >
              &rsaquo;
            </button>
          </div>
        </div>

        <div className="results-records-viewport">
        <div
          className="results-grid"
          ref={recordsTrackRef}
          style={{
            transform: `translateX(-${recordSlideIndex * recordSlideStep}px)`,
            transition: recordsTransitioning ? undefined : "none",
          }}
          onTransitionEnd={handleRecordsTransitionEnd}
        >
          {loopedResultRecords.map((item, index) => (
            <article className="results-card" key={`${item.title}-${index}`}>
              <div className="results-card-media">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className={`results-image results-image--${item.imageFocus || "center"}${item.toneDown ? " results-image--toned-down" : ""}`}
                />
              </div>

              <div className="results-card-content">
                <span className="results-case-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={getTreatmentContactHref(item.treatmentKey)} className="results-link">
                  Consultar mi caso
                </a>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
