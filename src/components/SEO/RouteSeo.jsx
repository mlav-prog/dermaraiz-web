import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import implanteSeoImage from "../../assets/treatments/implante-capilar-fue-procedimiento-dermaraiz.jpeg";
import prpSeoImage from "../../assets/treatments/prp-capilar-plasma-rico-en-plaquetas-dermaraiz.jpg";
import mesoterapiaSeoImage from "../../assets/treatments/mesoterapia-capilar-dermaraiz.jpeg";
import diagnosticoSeoImage from "../../assets/treatments/diagnostico-capilar-dermaraiz.jpg";
import resultadosSeoImage from "../../assets/results/resultado-tratamiento-capilar-dermaraiz.jpeg";

const SITE_URL = "https://dermaraiz.com.ar";

const pages = {
  "/": {
    title: "Dermaraiz | Tratamientos capilares en Buenos Aires",
    description:
      "Clinica capilar en CABA especializada en diagnostico, PRP, mesoterapia e implante capilar FUE con atencion personalizada.",
    keywords:
      "tratamiento capilar, implante capilar, caida del cabello, PRP capilar, mesoterapia capilar, clinica capilar Buenos Aires",
    image: resultadosSeoImage,
    imageAlt: "Resultados de tratamientos capilares en Dermaraiz Buenos Aires",
  },
  "/implante-capilar": {
    title: "Implante capilar FUE en Buenos Aires | Dermaraiz",
    description:
      "Implante capilar FUE con planificacion personalizada, extraccion folicular e implantacion orientada a resultados naturales.",
    keywords:
      "implante capilar FUE, implante capilar Buenos Aires, transplante capilar, recuperar cabello",
    image: implanteSeoImage,
    imageAlt: "Procedimiento de implante capilar FUE en Dermaraiz Buenos Aires",
  },
  "/prp-capilar": {
    title: "PRP capilar en Buenos Aires | Dermaraiz",
    description:
      "Tratamiento de PRP capilar con plasma rico en plaquetas para estimular el foliculo y acompanar la recuperacion capilar.",
    keywords:
      "PRP capilar, plasma rico en plaquetas capilar, tratamiento caida cabello, fortalecimiento capilar",
    image: prpSeoImage,
    imageAlt: "Plasma rico en plaquetas para PRP capilar en Dermaraiz",
  },
  "/mesoterapia-capilar": {
    title: "Mesoterapia capilar en Buenos Aires | Dermaraiz",
    description:
      "Mesoterapia capilar con aplicacion localizada de activos para nutrir la raiz, mejorar la calidad del cabello y acompanar tratamientos capilares.",
    keywords:
      "mesoterapia capilar, mesoterapia para caida cabello, tratamiento capilar Buenos Aires",
    image: mesoterapiaSeoImage,
    imageAlt: "Aplicacion de mesoterapia capilar en Dermaraiz Buenos Aires",
  },
  "/diagnostico-capilar": {
    title: "Diagnostico capilar en Buenos Aires | Dermaraiz",
    description:
      "Evaluacion profesional del cuero cabelludo para identificar tipos de alopecia y definir un plan capilar personalizado.",
    keywords:
      "diagnostico capilar, evaluacion capilar, alopecia, caida del cabello, cuero cabelludo",
    image: diagnosticoSeoImage,
    imageAlt: "Diagnostico capilar profesional en Dermaraiz CABA",
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

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`script[data-seo="${id}"]`);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.setAttribute("data-seo", id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function RouteSeo() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/"];
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const imageUrl = new URL(page.image, window.location.origin).href;

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
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "es_AR",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: page.imageAlt,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: page.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: page.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: page.imageAlt,
    });

    upsertCanonical(canonical);

    upsertJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: "Dermaraiz Capilar & Estetica",
      url: SITE_URL,
      image: imageUrl,
      telephone: "+54 9 11 7356-5160",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ciudad de la Paz 2984 Depto 2",
        addressLocality: "Ciudad Autonoma de Buenos Aires",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
      medicalSpecialty: [
        "HairTransplantation",
        "Dermatology",
      ],
      areaServed: [
        "Buenos Aires",
        "CABA",
      ],
      sameAs: [
        "https://www.instagram.com/derma_raiz/",
      ],
    });

    upsertJsonLd("web-page", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: canonical,
      image: imageUrl,
      inLanguage: "es-AR",
      isPartOf: {
        "@type": "WebSite",
        name: "Dermaraiz",
        url: SITE_URL,
      },
    });
  }, [canonical, imageUrl, page]);

  return null;
}

export default RouteSeo;
