import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AGENDA_PRO_URL, getWhatsappUrl } from "../../utils/contactLinks";
import "./TreatmentAssistant.css";

const steps = [
  {
    id: "goal",
    question: "¿Qué estás buscando mejorar?",
    options: [
      { label: "Recuperar densidad", value: "density" },
      { label: "Fortalecer el cabello", value: "strength" },
      { label: "Entender mi caída", value: "diagnosis" },
    ],
  },
  {
    id: "preference",
    question: "¿Preferís empezar por algo no quirúrgico?",
    options: [
      { label: "Sí", value: "non-surgical" },
      { label: "No necesariamente", value: "open" },
      { label: "No sé", value: "unsure" },
    ],
  },
  {
    id: "diagnosed",
    question: "¿Ya tuviste un diagnóstico capilar?",
    options: [
      { label: "Sí", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
];

const treatments = {
  diagnostico: {
    title: "Diagnóstico capilar",
    text: "Es el mejor primer paso para entender el tipo de caída y elegir un tratamiento adecuado.",
    path: "/diagnostico-capilar",
    message: "Hola, quiero consultar por un diagnóstico capilar.",
  },
  prp: {
    title: "PRP capilar",
    text: "Puede ayudar a estimular el folículo y acompañar la recuperación de la calidad capilar.",
    path: "/prp-capilar",
    message: "Hola, quiero consultar por PRP capilar.",
  },
  mesoterapia: {
    title: "Mesoterapia capilar",
    text: "Puede ser una opción para nutrir la raíz y acompañar tratamientos contra la caída.",
    path: "/mesoterapia-capilar",
    message: "Hola, quiero consultar por mesoterapia capilar.",
  },
  implante: {
    title: "Implante capilar FUE",
    text: "Puede ser una alternativa cuando se busca recuperar densidad en zonas despobladas.",
    path: "/implante-capilar",
    message: "Hola, quiero consultar por implante capilar FUE.",
  },
};

function getRecommendation(answers) {
  if (answers.diagnosed === "no" || answers.goal === "diagnosis") {
    return treatments.diagnostico;
  }

  if (answers.goal === "density" && answers.preference !== "non-surgical") {
    return treatments.implante;
  }

  if (answers.goal === "strength") {
    return treatments.prp;
  }

  return treatments.mesoterapia;
}

function TreatmentAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentStep = steps[stepIndex];
  const isComplete = stepIndex >= steps.length;
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  function handleAnswer(value) {
    setAnswers((current) => ({
      ...current,
      [currentStep.id]: value,
    }));
    setStepIndex((current) => current + 1);
  }

  function handleReset() {
    setStepIndex(0);
    setAnswers({});
  }

  return (
    <div className={`treatment-assistant ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <div className="assistant-panel" role="dialog" aria-label="Asistente de tratamientos">
          <div className="assistant-header">
            <div>
              <span>Asistente capilar</span>
              <h2>Te orientamos en pocos pasos</h2>
            </div>

            <button
              type="button"
              className="assistant-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar asistente"
            >
              ×
            </button>
          </div>

          {!isComplete ? (
            <div className="assistant-body">
              <p className="assistant-progress">
                Paso {stepIndex + 1} de {steps.length}
              </p>

              <h3>{currentStep.question}</h3>

              <div className="assistant-options">
                {currentStep.options.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="assistant-result">
              <span>Recomendación inicial</span>
              <h3>{recommendation.title}</h3>
              <p>{recommendation.text}</p>

              <div className="assistant-actions">
                <Link to={recommendation.path} onClick={() => setIsOpen(false)}>
                  Ver tratamiento
                </Link>

                <a href={AGENDA_PRO_URL} target="_blank" rel="noopener noreferrer">
                  Reservar turno
                </a>

                <a
                  href={getWhatsappUrl(recommendation.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>

              <button type="button" className="assistant-reset" onClick={handleReset}>
                Empezar de nuevo
              </button>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className="assistant-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label="Abrir asistente de tratamientos"
      >
        <span>?</span>
      </button>
    </div>
  );
}

export default TreatmentAssistant;
