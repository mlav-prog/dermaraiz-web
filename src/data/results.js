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
        afterImage: resultImages.mesotherapyMonthFour,
        afterAlt: "Mes 4 de tratamiento de mesoterapia capilar en Dermaraíz CABA",
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
        afterImage: resultImages.femaleAugustAfter,
        afterAlt: "Evolución de tratamiento capilar femenino en Dermaraíz Buenos Aires",
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
        afterImage: resultImages.maleAugustAfter,
        afterAlt: "Evolución de densidad capilar masculina en Dermaraíz Buenos Aires",
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
        afterImage: resultImages.coffeeFollowUp,
        afterAlt: "Después de tratamiento capilar personalizado en Dermaraíz Buenos Aires",
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
        image: treatmentImages.implantProcedure,
        alt: "Procedimiento capilar realizado por equipo médico de Dermaraíz en CABA",
        category: "Procedimiento",
        title: "Trabajo técnico en consultorio",
        description:
            "Cada procedimiento se realiza con planificación, cuidado del detalle y acompañamiento profesional.",
    },
    {
        image: resultImages.implantPostAugust,
        toneDown: true,
        alt: "Post inmediato de implante capilar con técnica FUE en Dermaraíz",
        category: "Implante capilar",
        title: "Post inmediato documentado",
        description:
            "Registro clínico del área implantada al finalizar el procedimiento.",
    },
    {
        image: treatmentImages.implantDoubleImplantation,
        alt: "Equipo Dermaraíz trabajando en implantación capilar con técnica FUE",
        category: "Implante capilar",
        title: "Implantación con equipo técnico",
        description:
            "Registro del procedimiento durante la etapa de implantación folicular.",
    },
    {
        image: resultImages.implantFue,
        alt: "Registro posterior a implante capilar FUE realizado en Dermaraíz",
        category: "Implante capilar",
        title: "Registro post procedimiento",
        description:
            "Imagen de control inmediato del procedimiento, presentada como registro clínico y no como comparación.",
    },
    {
        image: treatmentImages.implantDetail,
        alt: "Detalle técnico de procedimiento de implante capilar FUE en Dermaraíz",
        category: "Implante capilar",
        title: "Detalle técnico del procedimiento",
        description:
            "Registro del trabajo por unidades foliculares durante una etapa del procedimiento FUE.",
    },
    {
        image: treatmentImages.prpApplication,
        alt: "Aplicación localizada de tratamiento capilar en Dermaraíz Buenos Aires",
        category: "Tratamiento capilar",
        title: "Aplicación localizada",
        description:
            "Registro de aplicación en cuero cabelludo como parte de un abordaje capilar personalizado.",
    },
    {
        image: treatmentImages.consultation,
        alt: "Consulta de diagnóstico capilar en Dermaraíz CABA",
        category: "Consulta",
        title: "Evaluación y planificación",
        description:
            "La consulta inicial permite evaluar el caso y definir un plan acorde a cada paciente.",
    },
];
