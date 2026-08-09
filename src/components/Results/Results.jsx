import "./Results.css";
import { comparisonCases, resultRecords } from "../../data/results";

function Results() {
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

      <div className="results-comparison-list">
        {comparisonCases.map((item) => (
          <article className="results-before-after" key={item.title}>
            <div className="results-before-after-content">
              <span className="results-case-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contacto" className="results-link">
                Consultar mi caso
              </a>
            </div>

            <div className={`results-comparison ${item.isComposite ? "is-composite" : ""}`}>
              {item.isComposite ? (
                <figure>
                  <img src={item.beforeImage} alt={item.beforeAlt} loading="lazy" />
                  <span>Antes / Después</span>
                </figure>
              ) : (
                <>
                  <figure>
                    <img src={item.beforeImage} alt={item.beforeAlt} loading="lazy" />
                    <span>{item.beforeLabel}</span>
                  </figure>

                  <figure>
                    <img src={item.afterImage} alt={item.afterAlt} loading="lazy" />
                    <span>{item.afterLabel}</span>
                  </figure>
                </>
              )}
            </div>
          </article>
        ))}
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
