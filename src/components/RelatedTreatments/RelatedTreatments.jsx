import "./RelatedTreatments.css";
import { treatments } from "../../data/treatments";

function RelatedTreatments({ currentPath }) {
  const relatedTreatments = treatments.filter(
    (treatment) => treatment.link !== currentPath,
  );

  return (
    <section className="related-treatments" aria-labelledby="related-treatments-title">
      <div className="related-treatments-header">
        <span className="section-tag">También puede interesarte</span>
        <h2 id="related-treatments-title">Conocé otros tratamientos capilares</h2>
        <p>
          Una evaluación profesional permite definir qué alternativa se adapta
          mejor a las necesidades de cada paciente.
        </p>
      </div>

      <nav className="related-treatments-grid" aria-label="Tratamientos capilares relacionados">
        {relatedTreatments.map((treatment) => (
          <a className="related-treatment-card" href={treatment.link} key={treatment.link}>
            <span>{treatment.title}</span>
            <p>{treatment.benefit}</p>
            <strong>Conocer tratamiento →</strong>
          </a>
        ))}
      </nav>
    </section>
  );
}

export default RelatedTreatments;
