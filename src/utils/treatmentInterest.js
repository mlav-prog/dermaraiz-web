export const TREATMENT_INTERESTS = {
  diagnostico: "Diagnóstico capilar",
  prp: "PRP capilar",
  mesoterapia: "Mesoterapia capilar",
  implante: "Implante capilar FUE",
  esteticaPrp: "Plasma rico en plaquetas",
  esteticaMesoterapia: "Mesoterapia facial y corporal",
  nctf: "NCTF / PDRN",
  botox: "Toxina botulínica",
  peeling: "Peeling médico",
  skinbooster: "Skinbooster",
  unsure: "No estoy seguro",
};

const CONTACT_PATH = "/#contacto";

export function getTreatmentContactHref(treatmentKey) {
  if (!treatmentKey || !TREATMENT_INTERESTS[treatmentKey]) {
    return CONTACT_PATH;
  }

  return `/?tratamiento=${encodeURIComponent(treatmentKey)}#contacto`;
}

export function getTreatmentInterestFromSearch(search) {
  const params = new URLSearchParams(search);
  const treatmentKey = params.get("tratamiento");

  return TREATMENT_INTERESTS[treatmentKey] || "";
}
