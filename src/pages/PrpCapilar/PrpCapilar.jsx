import TreatmentPage from "../../components/TreatmentPage/TreatmentPage";
import prpImage from "../../assets/treatments/prp-capilar-plasma-rico-en-plaquetas-dermaraiz.jpg";

function PrpCapilar() {
  return (
    <TreatmentPage
      tag="PRP Capilar"
      
      title="Estimulación capilar mediante Plasma Rico en Plaquetas"

      description="El PRP Capilar es un tratamiento regenerativo que utiliza factores de crecimiento obtenidos de la propia sangre del paciente para estimular el folículo piloso y fortalecer el cabello."

      heroImage={prpImage}
      heroImageAlt="Preparación de plasma rico en plaquetas"

      benefits={[
        "Estimula el crecimiento capilar.",
        "Fortalece el folículo piloso.",
        "Mejora la calidad y densidad del cabello.",
        "Ayuda a disminuir la caída.",
        "Procedimiento mínimamente invasivo.",
        "Complementa otros tratamientos capilares."
      ]}

      steps={[
        {
          title: "Extracción de sangre",
          text: "Se obtiene una pequeña muestra de sangre del paciente."
        },
        {
          title: "Procesamiento",
          text: "La muestra se centrifuga para separar el plasma rico en plaquetas."
        },
        {
          title: "Aplicación",
          text: "El plasma se aplica sobre el cuero cabelludo mediante microinyecciones."
        }
      ]}

      facts={[
        {
          label: "Origen",
          text: "Se utiliza una muestra propia del paciente para obtener el plasma rico en plaquetas."
        },
        {
          label: "Objetivo",
          text: "Busca estimular el folículo y acompañar la recuperación de la calidad capilar."
        },
        {
          label: "Plan",
          text: "La cantidad de sesiones depende del diagnóstico y de la evolución observada."
        },
        {
          label: "Combinación",
          text: "Puede integrarse con otros tratamientos cuando el caso lo requiere."
        }
      ]}

      whatsappMessage="Hola, quiero consultar por PRP capilar."
      primaryCtaText="Reservar turno para PRP"
      faqs={[
        {
          question: "¿Para quién está indicado el PRP capilar?",
          answer: "Puede indicarse en pacientes con caída capilar, afinamiento o pérdida de calidad del cabello, siempre luego de una evaluación profesional."
        },
        {
          question: "¿Cuántas sesiones se necesitan?",
          answer: "La cantidad de sesiones depende del diagnóstico, la evolución y si se combina con otros tratamientos capilares."
        },
        {
          question: "¿Se puede combinar con mesoterapia?",
          answer: "Sí, en algunos casos puede complementarse con mesoterapia u otros tratamientos para potenciar el abordaje."
        },
        {
          question: "¿Cuándo se ven cambios?",
          answer: "Los cambios suelen evaluarse de forma progresiva en los controles, observando caída, densidad y calidad capilar."
        }
      ]}

      ctaTitle="¿Querés fortalecer tu cabello?"

      ctaText="Reservá una consulta para evaluar si el PRP Capilar es adecuado para tu caso."
    />
  );
}

export default PrpCapilar;
