import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://dermaraiz.com.ar";
const DEFAULT_IMAGE = `${SITE_URL}/preview.png`;

const pages = {
  "/": {
    title: "Dermaraiz | Tratamientos capilares en Buenos Aires",
    description:
      "Clinica capilar en CABA especializada en diagnostico, PRP, mesoterapia e implante capilar FUE con atencion personalizada.",
    keywords:
      "tratamiento capilar, implante capilar, caida del cabello, PRP capilar, mesoterapia capilar, clinica capilar Buenos Aires",
  },
  "/implante-capilar": {
    title: "Implante capilar FUE en Buenos Aires | Dermaraiz",
    description:
      "Implante capilar FUE con planificacion personalizada, extraccion folicular e implantacion orientada a resultados naturales.",
    keywords:
      "implante capilar FUE, implante capilar Buenos Aires, transplante capilar, recuperar cabello",
  },
  "/prp-capilar": {
    title: "PRP capilar en Buenos Aires | Dermaraiz",
    description:
      "Tratamiento de PRP capilar con plasma rico en plaquetas para estimular el foliculo y acompanar la recuperacion capilar.",
    keywords:
      "PRP capilar, plasma rico en plaquetas capilar, tratamiento caida cabello, fortalecimiento capilar",
  },
  "/mesoterapia-capilar": {
    title: "Mesoterapia capilar en Buenos Aires | Dermaraiz",
    description:
      "Mesoterapia capilar con aplicacion localizada de activos para nutrir la raiz, mejorar la calidad del cabello y acompanar tratamientos capilares.",
    keywords:
      "mesoterapia capilar, mesoterapia para caida cabello, tratamiento capilar Buenos Aires",
  },
  "/diagnostico-capilar": {
    title: "Diagnostico capilar en Buenos Aires | Dermaraiz",
    description:
      "Evaluacion profesional del cuero cabelludo para identificar tipos de alopecia y definir un plan capilar personalizado.",
    keywords:
      "diagnostico capilar, evaluacion capilar, alopecia, caida del cabello, cuero cabelludo",
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function RouteSeo() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/"];
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = page.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: page.description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: page.keywords,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: page.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: page.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: DEFAULT_IMAGE,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: page.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: page.description,
    });

    upsertCanonical(canonical);
  }, [canonical, page]);

  return null;
}

export default RouteSeo;
