import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  turbopack: {}, // dev only, 80% faster HMR
  output: "standalone", // smallest Docker image
  productionBrowserSourceMaps: false,
  // Security headers (Netlify, Vercel, any CDN) */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self';",
          },
        ],
      },
    ];
  },
  compress: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1080, 1920], // real traffic breakpoints
    dangerouslyAllowSVG: false,
  },
  typescript: {
    ignoreBuildErrors: !isProduction,
  },
  poweredByHeader: false,
  generateEtags: true,
};

export default withNextVideo(nextConfig);
