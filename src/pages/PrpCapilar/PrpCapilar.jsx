import TreatmentPage from "../../components/TreatmentPage/TreatmentPage";
import { treatmentImages } from "../../assets/images";

function PrpCapilar() {
  return (
    <TreatmentPage
      tag="PRP Capilar"
      title="Estimulación capilar mediante Plasma Rico en Plaquetas"
      description="El PRP Capilar es un tratamiento regenerativo que utiliza factores de crecimiento obtenidos de la propia sangre del paciente para acompañar la recuperación capilar, fortalecer el cabello y complementar planes personalizados."
      heroImage={treatmentImages.prpPlasma}
      heroImageAlt="Preparación de plasma rico en plaquetas para PRP capilar en Dermaraíz"
      benefits={[
        "Estimula el crecimiento capilar.",
        "Fortalece el folículo piloso.",
        "Mejora la calidad y densidad del cabello.",
        "Ayuda a disminuir la caída.",
        "Procedimiento mínimamente invasivo.",
        "Complementa otros tratamientos capilares.",
      ]}
      steps={[
        {
          title: "Evaluación inicial",
          text: "Se revisa el caso, el diagnóstico y los objetivos del paciente para definir si el PRP es el abordaje adecuado o si conviene combinarlo.",
          image: treatmentImages.consultation,
          imageAlt: "Consulta capilar previa al tratamiento PRP capilar en Dermaraíz CABA",
        },
        {
          title: "Preparación del plasma",
          text: "A partir de una muestra propia se obtiene el plasma rico en plaquetas, que concentra factores de crecimiento útiles para el tratamiento.",
          image: treatmentImages.prpPlasma,
          imageAlt: "Preparación de plasma rico en plaquetas para tratamiento capilar PRP",
        },
        {
          title: "Aplicación localizada",
          text: "El plasma se aplica en zonas específicas del cuero cabelludo mediante microinyecciones, según diagnóstico y plan indicado.",
          image: treatmentImages.prpApplication,
          imageAlt: "Aplicación de PRP capilar en cuero cabelludo en Dermaraíz Buenos Aires",
        },
      ]}
      facts={[
        {
          label: "Origen",
          text: "Se utiliza una muestra propia del paciente para obtener el plasma rico en plaquetas.",
        },
        {
          label: "Objetivo",
          text: "Busca estimular el folículo y acompañar la recuperación de la calidad capilar.",
        },
        {
          label: "Plan",
          text: "Puede integrarse en planes combinados con mesoterapia o medicación personalizada cuando corresponde.",
        },
        {
          label: "Seguimiento",
          text: "La evolución se controla de forma progresiva para ajustar el tratamiento a la respuesta del paciente.",
        },
      ]}
      whatsappMessage="Hola, quiero consultar por PRP capilar."
      primaryCtaText="Reservar turno para PRP"
      faqs={[
        {
          question: "¿Para quién está indicado el PRP capilar?",
          answer:
            "Puede indicarse en pacientes con caída capilar, afinamiento o pérdida de calidad del cabello, siempre luego de una evaluación profesional.",
        },
        {
          question: "¿Cuántas sesiones se necesitan?",
          answer:
            "La cantidad de sesiones depende del diagnóstico, la evolución y si se combina con otros tratamientos capilares.",
        },
        {
          question: "¿Se puede combinar con mesoterapia?",
          answer:
            "Sí, en algunos casos puede complementarse con mesoterapia u otros tratamientos para potenciar el abordaje.",
        },
        {
          question: "¿Cuándo se ven cambios?",
          answer:
            "Los cambios suelen evaluarse de forma progresiva en los controles, observando caída, densidad y calidad capilar.",
        },
      ]}
      ctaTitle="¿Querés fortalecer tu cabello?"
      ctaText="Reservá una consulta para evaluar si el PRP Capilar es adecuado para tu caso."
    />
  );
}

export default PrpCapilar;
