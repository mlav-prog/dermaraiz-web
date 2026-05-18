import TreatmentPage from "../../components/TreatmentPage/TreatmentPage";
import mesoterapiaImage from "../../assets/treatments/mesoterapia-capilar-dermaraiz.jpeg";
import pistolaMesoterapiaImage from "../../assets/treatments/pistola-mesoterapia-capilar.jpg";

function MesoterapiaCapilar() {
  return (
    <TreatmentPage
      tag="Mesoterapia Capilar"
      title="Nutrición y revitalización directa del cuero cabelludo"
      description="La mesoterapia capilar consiste en la aplicación de activos específicos sobre el cuero cabelludo para mejorar la calidad del cabello, nutrir la raíz y acompañar tratamientos de recuperación capilar."
      heroImage={mesoterapiaImage}
      heroImageAlt="Aplicación de tratamiento capilar"
      benefits={[
        "Ayuda a nutrir el folículo piloso.",
        "Mejora la calidad del cabello.",
        "Acompaña tratamientos contra la caída.",
        "Favorece la revitalización capilar.",
        "Puede complementar PRP u otros tratamientos.",
        "Se adapta según la necesidad de cada paciente."
      ]}
      steps={[
        {
          title: "Evaluación previa",
          text: "Se analiza el estado del cuero cabelludo y la necesidad del paciente."
        },
        {
          title: "Selección de activos",
          text: "Se definen los componentes adecuados para acompañar el tratamiento capilar."
        },
        {
          title: "Aplicación localizada",
          text: "Los activos se aplican en el cuero cabelludo mediante pequeñas microinyecciones."
        }
      ]}
      facts={[
        {
          label: "Sesiones",
          text: "La frecuencia se define según el diagnóstico y la respuesta del cuero cabelludo."
        },
        {
          label: "Aplicación",
          text: "Se realiza de forma localizada con activos seleccionados para cada caso."
        },
        {
          label: "Complemento",
          text: "Puede combinarse con PRP u otros tratamientos capilares cuando corresponde."
        },
        {
          label: "Seguimiento",
          text: "Permite ajustar el plan a medida que evoluciona la calidad del cabello."
        }
      ]}
      detailImage={pistolaMesoterapiaImage}
      detailImageAlt="Pistola para mesoterapia capilar"
      whatsappMessage="Hola, quiero consultar por mesoterapia capilar."
      primaryCtaText="Reservar turno para mesoterapia"
      faqs={[
        {
          question: "¿Para qué sirve la mesoterapia capilar?",
          answer: "Se utiliza para aplicar activos de forma localizada y acompañar tratamientos orientados a mejorar la calidad del cabello."
        },
        {
          question: "¿La mesoterapia reemplaza al diagnóstico?",
          answer: "No. Lo ideal es evaluar primero el cuero cabelludo para definir si es el tratamiento adecuado para cada caso."
        },
        {
          question: "¿Se puede combinar con PRP?",
          answer: "Sí, puede combinarse con PRP u otros tratamientos cuando el profesional lo considera conveniente."
        },
        {
          question: "¿Cuántas sesiones se recomiendan?",
          answer: "La frecuencia y cantidad de sesiones se define según la necesidad del paciente y la respuesta del tratamiento."
        }
      ]}
      ctaTitle="¿Querés mejorar la calidad de tu cabello?"
      ctaText="Reservá una consulta para evaluar si la mesoterapia capilar es adecuada para tu caso."
    />
  );
}

export default MesoterapiaCapilar;
