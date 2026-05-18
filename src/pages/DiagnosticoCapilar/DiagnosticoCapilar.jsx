import TreatmentPage from "../../components/TreatmentPage/TreatmentPage";
import diagnosticoImage from "../../assets/treatments/diagnostico-capilar-dermaraiz.jpg";

function DiagnosticoCapilar() {
  return (
    <TreatmentPage
      tag="Diagnóstico Capilar"
      
      title="Evaluación profesional y personalizada del cuero cabelludo"

      description="El diagnóstico capilar permite analizar el estado del cuero cabelludo, identificar distintos tipos de alopecia y definir un tratamiento adecuado según las necesidades de cada paciente."

      heroImage={diagnosticoImage}
      heroImageAlt="Evaluación capilar en consultorio"

      benefits={[
        "Permite detectar el tipo de alopecia.",
        "Ayuda a identificar causas de caída capilar.",
        "Define tratamientos personalizados.",
        "Evalúa densidad y salud capilar.",
        "Permite acompañar la evolución del paciente.",
        "Brinda un enfoque profesional e individual."
      ]}

      steps={[
        {
          title: "Entrevista inicial",
          text: "Se analiza el historial capilar y los síntomas del paciente."
        },
        {
          title: "Evaluación clínica",
          text: "Se observa el estado del cuero cabelludo y la calidad del cabello."
        },
        {
          title: "Plan de tratamiento",
          text: "Se define una estrategia personalizada según el diagnóstico realizado."
        }
      ]}

      facts={[
        {
          label: "Evaluación",
          text: "Se analiza el cuero cabelludo, la densidad y los antecedentes del paciente."
        },
        {
          label: "Orientación",
          text: "Ayuda a elegir el tratamiento más adecuado según el tipo de caída capilar."
        },
        {
          label: "Seguimiento",
          text: "Permite comparar la evolución con controles posteriores."
        },
        {
          label: "Plan",
          text: "El resultado de la consulta se traduce en una estrategia personalizada."
        }
      ]}

      whatsappMessage="Hola, quiero consultar por un diagnóstico capilar."
      primaryCtaText="Reservar diagnóstico capilar"
      faqs={[
        {
          question: "¿Cuándo conviene hacer un diagnóstico capilar?",
          answer: "Cuando hay caída, afinamiento, cambios en la densidad o dudas sobre qué tratamiento capilar elegir."
        },
        {
          question: "¿Sirve para detectar el tipo de alopecia?",
          answer: "Sí, la evaluación ayuda a orientar el diagnóstico y a definir un plan según cada paciente."
        },
        {
          question: "¿Después del diagnóstico ya se indica tratamiento?",
          answer: "Según el caso, se puede definir una estrategia personalizada y los pasos a seguir."
        },
        {
          question: "¿Necesito diagnóstico antes de PRP o mesoterapia?",
          answer: "Es recomendable para elegir el tratamiento más adecuado y evitar indicaciones genéricas."
        }
      ]}

      ctaTitle="¿Querés conocer el estado de tu salud capilar?"

      ctaText="Reservá una consulta profesional para recibir un diagnóstico personalizado."
    />
  );
}

export default DiagnosticoCapilar;
