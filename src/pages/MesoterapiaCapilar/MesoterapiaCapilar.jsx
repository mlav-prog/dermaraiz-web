import TreatmentPage from "../../components/TreatmentPage/TreatmentPage";
import { treatmentImages } from "../../assets/images";

function MesoterapiaCapilar() {
  return (
    <TreatmentPage
      tag="Mesoterapia Capilar"
      title="Nutrición y revitalización directa del cuero cabelludo"
      description="La mesoterapia capilar consiste en la aplicación localizada de activos específicos sobre el cuero cabelludo para acompañar la recuperación capilar, mejorar la calidad del pelo y complementar planes personalizados."
      heroImage={treatmentImages.mesotherapy}
      heroImageAlt="Aplicación de mesoterapia capilar en consultorio Dermaraíz"
      benefits={[
        "Ayuda a nutrir el folículo piloso.",
        "Mejora la calidad del cabello.",
        "Acompaña tratamientos contra la caída.",
        "Favorece la revitalización capilar.",
        "Puede complementar PRP u otros tratamientos.",
        "Se adapta según la necesidad de cada paciente.",
      ]}
      steps={[
        {
          title: "Evaluación previa",
          text: "Se analiza el diagnóstico, la evolución esperada y si conviene combinar mesoterapia con otros tratamientos.",
          image: treatmentImages.consultation,
          imageAlt: "Consulta previa para mesoterapia capilar en Dermaraíz CABA",
        },
        {
          title: "Selección de activos",
          text: "Se eligen activos y medicación magistral cuando corresponde, siempre según indicación profesional.",
          image: treatmentImages.mesotherapyMedication,
          imageAlt: "Medicación magistral para mesoterapia y tratamiento capilar personalizado",
        },
        {
          title: "Aplicación localizada",
          text: "Los activos se aplican en cuero cabelludo mediante microinyecciones y se controla la evolución del plan.",
          image: treatmentImages.mesotherapy,
          imageAlt: "Aplicación localizada de mesoterapia capilar en cuero cabelludo",
        },
      ]}
      galleryTitle="Técnica, instrumental y activos seleccionados"
      galleryText="La mesoterapia se adapta al diagnóstico de cada paciente, combinando técnica, activos y seguimiento para acompañar la recuperación capilar."
      galleryImages={[
        {
          src: treatmentImages.mesotherapyMedication,
          alt: "Medicación magistral utilizada en tratamientos capilares personalizados",
          label: "Activos",
          caption: "Selección personalizada según diagnóstico e indicación profesional.",
        },
        {
          src: treatmentImages.zafiroTechnique,
          alt: "Técnica Zafiro e instrumental de precisión en Dermaraíz",
          label: "Técnica",
          caption: "Instrumental de precisión para trabajar de forma localizada.",
        },
        {
          src: treatmentImages.mesotherapyGun,
          alt: "Instrumental para aplicación de mesoterapia capilar en Dermaraíz",
          label: "Aplicación",
          caption: "Herramientas utilizadas para distribuir los activos en cuero cabelludo.",
        },
        {
          src: treatmentImages.ampoulesMesotherapy,
          alt: "Ampollas y activos utilizados en mesoterapia capilar",
          label: "Preparación",
          caption: "Componentes seleccionados para acompañar el plan capilar.",
        },
      ]}
      facts={[
        {
          label: "Sesiones",
          text: "Puede indicarse de forma mensual o con refuerzos según diagnóstico y evolución.",
        },
        {
          label: "Aplicación",
          text: "Se realiza de forma localizada con activos seleccionados para cada caso.",
        },
        {
          label: "Complemento",
          text: "Puede combinarse con PRP, fármacos personalizados u otros tratamientos cuando corresponde.",
        },
        {
          label: "Evolución",
          text: "Los cambios se evalúan progresivamente; muchos planes se controlan durante varios meses.",
        },
      ]}
      whatsappMessage="Hola, quiero consultar por mesoterapia capilar."
      primaryCtaText="Reservar turno para mesoterapia"
      faqs={[
        {
          question: "¿Para qué sirve la mesoterapia capilar?",
          answer:
            "Se utiliza para aplicar activos de forma localizada y acompañar tratamientos orientados a mejorar la calidad del cabello.",
        },
        {
          question: "¿La mesoterapia reemplaza al diagnóstico?",
          answer:
            "No. Lo ideal es evaluar primero el cuero cabelludo para definir si es el tratamiento adecuado para cada caso.",
        },
        {
          question: "¿Se puede combinar con PRP?",
          answer:
            "Sí, puede combinarse con PRP u otros tratamientos cuando el profesional lo considera conveniente.",
        },
        {
          question: "¿Cuántas sesiones se recomiendan?",
          answer:
            "La frecuencia y cantidad de sesiones se define según la necesidad del paciente y la respuesta del tratamiento.",
        },
      ]}
      ctaTitle="¿Querés mejorar la calidad de tu cabello?"
      ctaText="Reservá una consulta para evaluar si la mesoterapia capilar es adecuada para tu caso."
    />
  );
}

export default MesoterapiaCapilar;
