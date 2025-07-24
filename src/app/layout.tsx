import type { Metadata } from "next";
import { Sora as FontMono, Geist as FontSans } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/app/client-provider";
import { ThemeProvider } from "@/lib/theme-provider";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = FontMono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PAW AI - Powerful AI Compute Platform",
    template: "%s | PAW AI",
  },
  description:
    "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications with lightning-fast performance and enterprise-grade security.",
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
  creator: "PAW AI",
  publisher: "PAW AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    "https://paw-ai-a1b4z0uas-jirayusuebs-projects.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paw-ai-a1b4z0uas-jirayusuebs-projects.vercel.app",
    title: "PAW AI - Powerful AI Compute Platform",
    description:
      "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications with lightning-fast performance.",
    siteName: "PAW AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PAW AI - AI Compute Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAW AI - Powerful AI Compute Platform",
    description:
      "Access cutting-edge GPUs and AI compute resources on demand. Train models, process data, and deploy AI applications.",
    images: ["/og.png"],
    creator: "@pawai",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#602A9A" />
        <meta name="msapplication-TileColor" content="#602A9A" />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <ClientProvider>{children}</ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
