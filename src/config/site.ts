import { env } from "@/env";

export const siteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
  fullName: `${env.NEXT_PUBLIC_SITE_NAME} - ${env.NEXT_PUBLIC_SITE_DESCRIPTION}`,
  tagline:
    "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications with lightning-fast performance and enterprise-grade security.",
  shortDescription:
    "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications with lightning-fast performance.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: "/og.png",
  creator: "@pawai",
  keywords: [
    "AI compute",
    "GPU cloud",
    "machine learning",
    "AI training",
    "data processing",
    "AI inference",
    "cloud computing",
    "artificial intelligence",
    "deep learning",
    "AI platform",
  ],
  authors: [{ name: "PAW AI Team" }],
  themeColor: "#602A9A",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    favicon: "/favicon.svg",
    faviconPng: "/favicon-96x96.png",
    appleTouch: "/apple-touch-icon.png",
    manifest: "/site.webmanifest",
    webApp192: "/web-app-manifest-192x192.png",
    webApp512: "/web-app-manifest-512x512.png",
  },
};
