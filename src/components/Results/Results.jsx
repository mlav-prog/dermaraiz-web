import { useState } from "react";
import "./Results.css";
import { comparisonCases, resultRecords } from "../../data/results";

function Results() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = comparisonCases[activeCaseIndex];

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

        <article className="results-before-after" key={activeCase.title}>
          <div className="results-before-after-content">
            <span className="results-case-tag">{activeCase.category}</span>
            <h3>{activeCase.title}</h3>
            <p>{activeCase.description}</p>
            <a href="#contacto" className="results-link">
              Consultar mi caso
            </a>
          </div>

          <div className={`results-comparison ${activeCase.isComposite ? "is-composite" : ""}`}>
            {activeCase.isComposite ? (
              <figure>
                <img src={activeCase.beforeImage} alt={activeCase.beforeAlt} loading="lazy" />
                <span>Antes / Después</span>
              </figure>
            ) : (
              <>
                <figure>
                  <img src={activeCase.beforeImage} alt={activeCase.beforeAlt} loading="lazy" />
                  <span>{activeCase.beforeLabel}</span>
                </figure>

                <figure>
                  <img src={activeCase.afterImage} alt={activeCase.afterAlt} loading="lazy" />
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

      <div className="results-grid">
        {resultRecords.map((item) => (
          <article className="results-card" key={item.title}>
            <div className="results-card-image">
              <img
                src={item.image}
                alt={item.alt}
                className={`results-image${item.toneDown ? " results-image--toned-down" : ""}`}
                loading="lazy"
              />
            </div>

            <div className="results-card-content">
              <span className="results-case-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contacto" className="results-link">
                Consultar mi caso
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Results;
