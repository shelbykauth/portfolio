import "dotenv";
import type { NextConfig } from "next";
import path from "path";

const basePath = process.env.PAGES_BASE_PATH || undefined;
const distDir = (() => {
  if (process.env.NODE_ENV === "production") {
    return basePath ? path.join("out" + basePath) : "out/_";
  } else {
    return undefined;
  }
})();

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir,
  basePath,
  trailingSlash: true,
  images: {
    // @todo, Maybe later: Replace this with an image optimizer that redirects to one of several static versions based on width
    path: basePath,
    unoptimized: true,
  },
  /**
   * Modify PAGES_BASE_PATH in .env or via environment.
   * Utilized to build for different deployment paths.
   * @see https://github.com/nextjs/deploy-github-pages/blob/main/next.config.ts
   */
};

export default nextConfig;
