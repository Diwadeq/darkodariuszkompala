/** @type {import('next').NextConfig} */

// Nazwa repozytorium na GitHubie — używana jako basePath na GitHub Pages,
// bo strona serwowana jest pod adresem .../darkodariuszkompala/.
const repo = "darkodariuszkompala";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  // Statyczny eksport (SSG) -> folder `out/`, gotowy pod GitHub Pages.
  output: "export",

  // GitHub Pages nie obsługuje optymalizatora obrazów Next.js.
  images: { unoptimized: true },

  // Prefiksy tylko w produkcji; lokalnie (npm run dev) działa pod "/".
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // Pages lepiej serwuje katalogi z trailing slash.
  trailingSlash: true,
};

export default nextConfig;
