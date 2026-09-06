import { resultImages, treatmentImages } from "../assets/images";

export const comparisonCases = [
    {
        category: "Mesoterapia capilar",
        title: "Primer mes y mes 4",
        description:
            "Seguimiento real de mesoterapia capilar entre la primera evaluación y el cuarto mes de tratamiento.",
        beforeLabel: "Primer mes",
        afterLabel: "Mes 4",
        beforeImage: resultImages.mesotherapyMonthOne,
        beforeAlt: "Primer mes de tratamiento de mesoterapia capilar en Dermaraíz CABA",
        beforeFocus: "mesotherapyProgress",
        beforeOrientation: "implantDirection",
        afterImage: resultImages.mesotherapyMonthFour,
        afterAlt: "Mes 4 de tratamiento de mesoterapia capilar en Dermaraíz CABA",
        afterFocus: "mesotherapyProgress",
        afterOrientation: "implantDirection",
    },
    {
        category: "Seguimiento capilar",
        title: "Evolución capilar femenina",
        description:
            "Registro comparativo de evolución durante un tratamiento capilar personalizado.",
        beforeLabel: "Antes",
        afterLabel: "Después",
        beforeImage: resultImages.femaleAugustBefore,
        beforeAlt: "Antes y después de tratamiento capilar femenino en Dermaraíz Buenos Aires",
        beforeOrientation: "implantDirection",
        afterImage: resultImages.femaleAugustAfter,
        afterAlt: "Evolución de tratamiento capilar femenino en Dermaraíz Buenos Aires",
        afterOrientation: "implantDirection",
    },
    {
        category: "Seguimiento capilar",
        title: "Evolución femenina a 4 meses",
        description:
            "Seguimiento real de recuperación de densidad y cobertura capilar luego de cuatro meses de tratamiento.",
        beforeLabel: "Antes",
        afterLabel: "4 meses",
        beforeImage: resultImages.femaleSeptemberBefore,
        beforeAlt: "Antes de tratamiento capilar femenino en Dermaraíz Buenos Aires",
        beforeFocus: "upperFocus",
        afterImage: resultImages.femaleSeptemberFourMonths,
        afterAlt: "Evolución femenina a cuatro meses de tratamiento capilar en Dermaraíz Buenos Aires",
        afterFocus: "upperFocus",
    },
    {
        category: "Seguimiento capilar",
        title: "Evolución de densidad capilar",
        description:
            "Comparación real de evolución capilar durante el seguimiento del tratamiento indicado.",
        beforeLabel: "Antes",
        afterLabel: "Después",
        beforeImage: resultImages.maleAugustBefore,
        beforeAlt: "Antes y después de tratamiento capilar masculino en Dermaraíz Buenos Aires",
        beforeOrientation: "implantDirection",
        afterImage: resultImages.maleAugustAfter,
        afterAlt: "Evolución de densidad capilar masculina en Dermaraíz Buenos Aires",
        afterOrientation: "implantDirection",
    },
    {
        category: "Seguimiento capilar",
        title: "Antes y después del tratamiento",
        description:
            "Comparación real de evolución capilar durante el seguimiento del tratamiento indicado.",
        beforeLabel: "Antes",
        afterLabel: "Después",
        beforeImage: resultImages.treatmentBefore,
        beforeAlt: "Antes de tratamiento capilar personalizado en Dermaraíz Buenos Aires",
        beforeFocus: "upperFocus",
        beforeOrientation: "implantDirection",
        afterImage: resultImages.coffeeFollowUp,
        afterAlt: "Después de tratamiento capilar personalizado en Dermaraíz Buenos Aires",
        afterFocus: "upperFocus",
        afterOrientation: "implantDirection",
    },
    {
        category: "Implante capilar FUE",
        title: "Antes y post inmediato",
        description:
            "Registro del mismo proceso en etapa previa y post procedimiento inmediato, presentado como control quirúrgico.",
        beforeLabel: "Antes",
        afterLabel: "Post inmediato",
        beforeImage: resultImages.implantBefore,
        beforeAlt: "Antes de implante capilar FUE en Dermaraíz Buenos Aires",
        afterImage: resultImages.implantPost,
        afterAlt: "Post inmediato de implante capilar FUE en Dermaraíz Buenos Aires",
    },
];

export const resultRecords = [
    {
        image: treatmentImages.implantFue,
        alt: "Procedimiento capilar realizado por equipo médico de Dermaraíz en CABA",
        category: "Procedimiento",
        title: "Trabajo técnico en consultorio",
        imageFocus: "procedure",
        description:
            "Cada procedimiento se realiza con planificación, cuidado del detalle y acompañamiento profesional.",
    },
    {
        image: resultImages.implantImmediateAugust,
        toneDown: true,
        alt: "Post inmediato de implante capilar FUE con zona implantada en Dermaraíz Buenos Aires",
        category: "Implante capilar",
        title: "Zona implantada post procedimiento",
        imageFocus: "implantImmediate",
        description:
            "Registro clínico de la zona receptora al finalizar el implante capilar FUE.",
    },
    {
        image: treatmentImages.implantFrontMarking,
        alt: "Diseño frontal previo a implante capilar FUE en Dermaraíz",
        category: "Implante capilar",
        title: "Diseño y planificación",
        description:
            "Marcación previa para definir distribución, cobertura y naturalidad.",
    },
    {
        image: treatmentImages.implantDonorMarking,
        alt: "Marcación de zona donante para implante capilar FUE en Dermaraíz",
        category: "Implante capilar",
        title: "Zona donante",
        description:
            "Planificación de la zona donante antes de la extracción folicular.",
    },
    {
        image: treatmentImages.implantFrontalPostAugust,
        alt: "Zona frontal posterior a implante capilar FUE en Dermaraíz",
        category: "Implante capilar",
        title: "Control de zona receptora",
        description:
            "Registro visual de la zona receptora luego del procedimiento.",
    },
    {
        image: treatmentImages.prpApplication,
        alt: "Aplicación localizada de tratamiento capilar en Dermaraíz Buenos Aires",
        category: "Tratamiento capilar",
        title: "Aplicación localizada",
        imageFocus: "application",
        description:
            "Registro de aplicación en cuero cabelludo como parte de un abordaje capilar personalizado.",
    },
    {
        image: treatmentImages.diagnosisLarisaConsultation,
        alt: "Consulta personalizada de diagnóstico capilar con Larisa en Dermaraíz CABA",
        category: "Consulta",
        title: "Evaluación y planificación",
        imageFocus: "consultationTeam",
        description:
            "La consulta inicial permite evaluar el caso y definir un plan acorde a cada paciente.",
    },
];
