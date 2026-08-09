import TreatmentPage from "../../components/TreatmentPage/TreatmentPage";
import { treatmentImages } from "../../assets/images";

function DiagnosticoCapilar() {
  return (
    <TreatmentPage
      tag="Diagnóstico Capilar"
      title="Diagnóstico capilar en CABA con evaluación personalizada"
      currentPath="/diagnostico-capilar/"
      description="El diagnóstico capilar permite analizar el cuero cabelludo, identificar causas posibles de caída, detectar signos de miniaturización y definir un tratamiento adecuado según cada paciente."
      heroImage={treatmentImages.diagnosis}
      heroImageAlt="Evaluación capilar profesional en consultorio Dermaraíz CABA"
      benefits={[
        "Permite orientar el tipo de alopecia.",
        "Ayuda a identificar causas genéticas, hormonales o nutricionales.",
        "Define tratamientos personalizados.",
        "Evalúa densidad, inflamación y miniaturización.",
        "Permite acompañar la evolución del paciente.",
        "Brinda un enfoque profesional e individual.",
      ]}
      steps={[
        {
          title: "Entrevista inicial",
          text: "Se revisa historial capilar, síntomas, antecedentes, estrés, medicación y posibles factores hormonales o nutricionales.",
          image: treatmentImages.consultation,
          imageAlt: "Consulta capilar inicial y diagnóstico personalizado en Dermaraíz",
        },
        {
          title: "Evaluación con tricoscopia",
          text: "Se observa el cuero cabelludo para detectar inflamación, miniaturización y signos que orientan el diagnóstico.",
          image: treatmentImages.trichoscopyConsultation,
          imageAlt: "Evaluación del cuero cabelludo con tricoscopia en Dermaraíz CABA",
        },
        {
          title: "Plan y seguimiento",
          text: "Se define una estrategia personalizada y controles para medir evolución y ajustar pautas si hace falta.",
          image: treatmentImages.diagnosisOffice,
          imageAlt: "Planificación de tratamiento capilar personalizado en consultorio",
        },
      ]}
      benefitsTitle="¿Para qué sirve?"
      galleryTitle="Diagnóstico, tricoscopia y miniaturización"
      galleryText="La evaluación permite entender por qué se cae el pelo, observar el cuero cabelludo y definir un plan con seguimiento."
      galleryImages={[
        {
          src: treatmentImages.trichoscopyConsultation,
          alt: "Evaluación capilar con tricoscopia profesional en Dermaraíz",
          label: "Tricoscopia",
          caption: "Observación del cuero cabelludo para orientar el diagnóstico.",
        },
        {
          src: treatmentImages.dhtMiniaturization,
          alt: "Esquema de DHT y miniaturización folicular en alopecia androgenética",
          label: "Miniaturización",
          caption: "La DHT puede achicar el folículo y afinar progresivamente el pelo.",
        },
        {
          src: treatmentImages.diagnosisOffice,
          alt: "Planificación de tratamiento capilar luego del diagnóstico en consultorio",
          label: "Plan",
          caption: "La consulta se traduce en una estrategia personalizada y controles.",
        },
      ]}
      facts={[
        {
          label: "Causas",
          text: "La caída puede asociarse a genética, desregulación hormonal, anemia, déficit nutricional, estrés u otras enfermedades.",
        },
        {
          label: "Miniaturización",
          text: "En alopecia androgenética el folículo se achica y produce pelos más finos y débiles.",
        },
        {
          label: "Tricoscopia",
          text: "Permite observar inflamación, miniaturización y puntos amarillos, negros o blancos.",
        },
        {
          label: "Controles",
          text: "Los controles permiten medir evolución y definir nuevas pautas según la respuesta.",
        },
      ]}
      whatsappMessage="Hola, quiero consultar por un diagnóstico capilar."
      primaryCtaText="Reservar diagnóstico capilar"
      faqs={[
        {
          question: "¿Cuándo conviene hacer un diagnóstico capilar?",
          answer:
            "Cuando hay caída, afinamiento, cambios en la densidad o dudas sobre qué tratamiento capilar elegir.",
        },
        {
          question: "¿Sirve para detectar el tipo de alopecia?",
          answer:
            "Sí, la evaluación ayuda a orientar el diagnóstico y a definir un plan según cada paciente.",
        },
        {
          question: "¿Después del diagnóstico ya se indica tratamiento?",
          answer:
            "Según el caso, se puede definir una estrategia personalizada y los pasos a seguir.",
        },
        {
          question: "¿Necesito diagnóstico antes de PRP o mesoterapia?",
          answer:
            "Es recomendable para elegir el tratamiento más adecuado y evitar indicaciones genéricas.",
        },
      ]}
      ctaTitle="¿Querés conocer el estado de tu salud capilar?"
      ctaText="Reservá una consulta profesional para recibir un diagnóstico personalizado."
    />
  );
}

export default DiagnosticoCapilar;
