import type { Metadata } from "next";
import "./globals.css";
import { ClientProvider } from "@/app/client-provider";
import { ThemeProvider } from "@/lib/theme-provider";
import { fontSans, fontMono } from "@/lib/font";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.shortDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Compute Platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
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
  verification: siteConfig.verification,
  icons: {
    icon: [
      { url: siteConfig.icons.favicon, type: "image/svg+xml" },
      { url: siteConfig.icons.faviconPng, sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: siteConfig.icons.appleTouch, sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: siteConfig.icons.webApp192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: siteConfig.icons.webApp512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: siteConfig.icons.manifest,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content={siteConfig.themeColor} />
        <meta name="msapplication-TileColor" content={siteConfig.themeColor} />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased font-display-swap`}
      >
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
