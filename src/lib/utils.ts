import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely get the app URL that works in both client and server environments
 */
export function getAppUrl(): string {
  // Check if we're in a browser environment
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // Check if we have the environment variable
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // Fallback for development
  return "http://localhost:3000";
}
