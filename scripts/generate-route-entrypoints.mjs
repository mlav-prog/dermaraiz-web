import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const sitemapPath = join(projectRoot, "public", "sitemap.xml");
const sourceHtmlPath = join(projectRoot, "dist", "index.html");
const sitemap = await readFile(sitemapPath, "utf8");

const routePaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(([, location]) => new URL(location).pathname)
  .filter((pathname) => pathname !== "/");

for (const pathname of routePaths) {
  const routeDirectory = join(projectRoot, "dist", pathname.replace(/^\/+|\/+$/g, ""));

  await mkdir(routeDirectory, { recursive: true });
  await copyFile(sourceHtmlPath, join(routeDirectory, "index.html"));
}

console.log(`Generated ${routePaths.length} route entrypoints for GitHub Pages.`);
