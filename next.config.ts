import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Disables the devtools segment explorer (on by default in Next 15+), which can
   * throw SegmentViewNode / React Client Manifest errors and corrupt webpack
   * after HMR. Re-enable if you need that panel.
   * After saving this file, stop the dev server and run `npm run dev:clean` once —
   * hot-restarting on config change can leave `.next` half-written (missing manifests).
   * Default dev uses Turbopack (`npm run dev`) to avoid webpack chunk corruption; use
   * `npm run dev:webpack` if you need the webpack dev server.
   */
  experimental: {
    devtoolSegmentExplorer: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
    ],
  },
  /**
   * Webpack: transpile ESM/CJS-heavy deps so server/client chunks stay aligned.
   * Include framer-motion to reduce occasional dev HMR / MODULE_NOT_FOUND mismatches.
   */
  transpilePackages: [
    "swiper",
    "typed.js",
    "vanilla-tilt",
    "framer-motion",
  ],

  /**
   * Dev-only: use in-memory webpack cache instead of pack files under `.next/cache/webpack`.
   * Prevents ENOENT / rename errors (`1.pack.gz_` → `1.pack.gz`) and missing
   * `routes-manifest.json` when the cache dir is busy, deleted mid-compile, or
   * the project path contains spaces.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" as const, maxGenerations: 1 };
    }
    return config;
  },
};

export default nextConfig;
