import path from "node:path";
import { fileURLToPath } from "node:url";

/** Directory containing this config file (real project root for Turbopack) */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Smaller client bundles → faster route transitions & less parse time
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  // Fix: multiple lockfiles (e.g. in user home) made Turbopack pick wrong root — breaks dev routing/HMR
  turbopack: {
    root: projectRoot,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
    // Set NEXT_IMAGE_UNOPTIMIZED=1 only if your host cannot run the image optimizer
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
