import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const sitemapPath = join(projectRoot, "public", "sitemap.xml");
const sourceHtmlPath = join(projectRoot, "dist", "index.html");
const sitemap = await readFile(sitemapPath, "utf8");

const routeMetadata = {
  "/implante-capilar/": {
    title: "Implante capilar en Buenos Aires y CABA | Técnica FUE",
    description:
      "Implante capilar FUE en Buenos Aires con evaluación profesional, diseño personalizado y seguimiento. Conocé casos reales y reservá tu consulta en CABA.",
    language: "es-AR",
  },
  "/prp-capilar/": {
    title: "PRP capilar en CABA para caída del cabello | Dermaraíz",
    description:
      "PRP capilar con plasma propio para caída, afinamiento y fortalecimiento del cabello. Evaluación profesional y turnos en Dermaraíz, CABA.",
    language: "es-AR",
  },
  "/mesoterapia-capilar/": {
    title: "Mesoterapia capilar en Buenos Aires y CABA | Dermaraíz",
    description:
      "Mesoterapia capilar en Buenos Aires para caída y fortalecimiento. Activos seleccionados según diagnóstico, seguimiento y turnos en CABA.",
    language: "es-AR",
  },
  "/diagnostico-capilar/": {
    title: "Diagnóstico capilar en CABA | Tricoscopia | Dermaraíz",
    description:
      "Diagnóstico capilar en CABA con evaluación del cuero cabelludo, tricoscopia y orientación para alopecia o caída del cabello. Reservá tu consulta.",
    language: "es-AR",
  },
  "/en/": {
    title: "Hair clinic in Buenos Aires | Dermaraiz",
    description:
      "Personalized hair diagnosis, PRP, mesotherapy and FUE hair transplant planning in Buenos Aires for international patients.",
    language: "en",
  },
  "/pt/": {
    title: "Clinica capilar em Buenos Aires | Dermaraiz",
    description:
      "Diagnostico capilar, PRP, mesoterapia e planejamento de transplante capilar FUE em Buenos Aires para pacientes internacionais.",
    language: "pt-BR",
  },
};

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildRouteHtml(sourceHtml, pathname) {
  const metadata = routeMetadata[pathname];
  if (!metadata) return sourceHtml;

  const canonical = new URL(pathname, "https://dermaraiz.com.ar").href;
  let html = sourceHtml
    .replace(/<html lang="[^"]+">/i, `<html lang="${metadata.language}">`)
    .replace(/<title>.*?<\/title>/i, `<title>${metadata.title}</title>`)
    .replace(
      /<link rel="canonical" href="[^"]+"\s*\/?>/i,
      `<link rel="canonical" href="${canonical}">`,
    );

  html = html.replace(
    /<meta\s+name="description"[\s\S]*?>/i,
    `<meta name="description" content="${escapeAttribute(metadata.description)}">`,
  );
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?>/i,
    `<meta property="og:title" content="${escapeAttribute(metadata.title)}">`,
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?>/i,
    `<meta property="og:description" content="${escapeAttribute(metadata.description)}">`,
  );
  html = html.replace(
    /<meta\s+property="og:url"[\s\S]*?>/i,
    `<meta property="og:url" content="${canonical}">`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?>/i,
    `<meta name="twitter:title" content="${escapeAttribute(metadata.title)}">`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?>/i,
    `<meta name="twitter:description" content="${escapeAttribute(metadata.description)}">`,
  );

  return html;
}

const routePaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(([, location]) => new URL(location).pathname)
  .filter((pathname) => pathname !== "/");

for (const pathname of routePaths) {
  const routeDirectory = join(projectRoot, "dist", pathname.replace(/^\/+|\/+$/g, ""));

  await mkdir(routeDirectory, { recursive: true });
  const sourceHtml = await readFile(sourceHtmlPath, "utf8");
  await writeFile(join(routeDirectory, "index.html"), buildRouteHtml(sourceHtml, pathname));
}

console.log(`Generated ${routePaths.length} route entrypoints for GitHub Pages.`);
