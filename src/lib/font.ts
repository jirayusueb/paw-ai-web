import { Sora as FontMono, Geist as FontSans } from "next/font/google";

export const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const fontMono = FontMono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
  adjustFontFallback: true,
});
