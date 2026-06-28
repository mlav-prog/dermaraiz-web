import "./Results.css";

import implantBefore02 from "../../assets/results/implante-capilar-before-02.jpeg";
import implantPost02 from "../../assets/results/implante-capilar-post-02.jpeg";
import mesotherapyMonthOne from "../../assets/results/mesoterapia-primer-mes-dermaraiz.jpeg";
import mesotherapyMonthFour from "../../assets/results/mesoterapia-mes-4-dermaraiz.jpeg";
import treatmentBefore from "../../assets/results/tratamiento-capilar-antes-dermaraiz.jpeg";
import implantResult from "../../assets/results/post-implante-capilar-fue-dermaraiz.jpeg";
import coffeeFollowUp from "../../assets/results/resultado-tratamiento-capilar-dermaraiz.jpeg";
import consultationRecord from "../../assets/treatments/consulta-capilar-dermaraiz.jpeg";
import implantDetail from "../../assets/treatments/implante-capilar-procedimiento-detalle-dermaraiz.jpeg";
import implantProcedure from "../../assets/treatments/procedimiento-implante-capilar-fue-dermaraiz.jpeg";
import prpApplication from "../../assets/treatments/prp-capilar-aplicacion-dermaraiz.jpeg";

function Results() {
  const comparisonCases = [
    {
      category: "Mesoterapia capilar",
      title: "Primer mes y mes 4",
      description:
        "Seguimiento real de mesoterapia capilar entre la primera evaluación y el cuarto mes de tratamiento.",
      beforeLabel: "Primer mes",
      afterLabel: "Mes 4",
      beforeImage: mesotherapyMonthOne,
      beforeAlt: "Primer mes de tratamiento de mesoterapia capilar en Dermaraiz CABA",
      afterImage: mesotherapyMonthFour,
      afterAlt: "Mes 4 de tratamiento de mesoterapia capilar en Dermaraiz CABA",
    },
    {
      category: "Seguimiento capilar",
      title: "Antes y después del tratamiento",
      description:
        "Comparación real de evolución capilar durante el seguimiento del tratamiento indicado.",
      beforeLabel: "Antes",
      afterLabel: "Después",
      beforeImage: treatmentBefore,
      beforeAlt: "Antes de tratamiento capilar personalizado en Dermaraiz Buenos Aires",
      afterImage: coffeeFollowUp,
      afterAlt: "Despues de tratamiento capilar personalizado en Dermaraiz Buenos Aires",
    },
    {
      category: "Implante capilar FUE",
      title: "Antes y post inmediato",
      description:
        "Registro del mismo proceso en etapa previa y post procedimiento inmediato, presentado como control quirúrgico.",
      beforeLabel: "Antes",
      afterLabel: "Post inmediato",
      beforeImage: implantBefore02,
      beforeAlt: "Antes de implante capilar FUE en Dermaraiz Buenos Aires",
      afterImage: implantPost02,
      afterAlt: "Post inmediato de implante capilar FUE en Dermaraiz Buenos Aires",
    },
  ];

  const records = [
    {
      image: implantProcedure,
      alt: "Procedimiento capilar realizado por equipo medico de Dermaraiz en CABA",
      category: "Procedimiento",
      title: "Trabajo técnico en consultorio",
      description:
        "Cada procedimiento se realiza con planificación, cuidado del detalle y acompañamiento profesional.",
    },
    {
      image: implantResult,
      alt: "Registro posterior a implante capilar FUE realizado en Dermaraiz",
      category: "Implante capilar",
      title: "Registro post procedimiento",
      description:
        "Imagen de control inmediato del procedimiento, presentada como registro clínico y no como comparación.",
    },
    {
      image: implantDetail,
      alt: "Detalle tecnico de procedimiento de implante capilar FUE en Dermaraiz",
      category: "Implante capilar",
      title: "Detalle técnico del procedimiento",
      description:
        "Registro del trabajo por unidades foliculares durante una etapa del procedimiento FUE.",
    },
    {
      image: prpApplication,
      alt: "Aplicacion localizada de tratamiento capilar en Dermaraiz Buenos Aires",
      category: "Tratamiento capilar",
      title: "Aplicación localizada",
      description:
        "Registro de aplicación en cuero cabelludo como parte de un abordaje capilar personalizado.",
    },
    {
      image: consultationRecord,
      alt: "Consulta de diagnostico capilar en Dermaraiz CABA",
      category: "Consulta",
      title: "Evaluación y planificación",
      description:
        "La consulta inicial permite evaluar el caso y definir un plan acorde a cada paciente.",
    },
  ];

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

            <div className="results-comparison">
              <figure>
                <img src={item.beforeImage} alt={item.beforeAlt} loading="lazy" />
                <span>{item.beforeLabel}</span>
              </figure>

              <figure>
                <img src={item.afterImage} alt={item.afterAlt} loading="lazy" />
                <span>{item.afterLabel}</span>
              </figure>
            </div>
          </article>
        ))}
      </div>

      <div className="results-grid">
        {records.map((item) => (
          <article className="results-card" key={item.title}>
            <div className="results-card-image">
              <img
                src={item.image}
                alt={item.alt}
                className="results-image"
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
