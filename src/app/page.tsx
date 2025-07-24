import type { Metadata } from "next";
import { HomePageContainer } from "@/containers/home-page";

export const metadata: Metadata = {
  title: "Home",
  description:
    "PAW AI - The smarter way to compute. Access cutting-edge GPUs and AI compute resources on demand for training, inference, and data processing.",
  keywords: [
    "AI compute platform",
    "GPU cloud computing",
    "machine learning infrastructure",
    "AI model training",
    "real-time AI inference",
    "data processing platform",
    "AI development tools",
    "cloud GPU rental",
    "AI compute resources",
    "enterprise AI platform",
  ],
  openGraph: {
    title: "PAW AI - Powerful AI Compute Platform",
    description:
      "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications with lightning-fast performance.",
    url: "https://paw-ai-a1b4z0uas-jirayusuebs-projects.vercel.app",
    siteName: "PAW AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PAW AI - AI Compute Platform Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAW AI - Powerful AI Compute Platform",
    description:
      "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://paw-ai-a1b4z0uas-jirayusuebs-projects.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return <HomePageContainer />;
}
