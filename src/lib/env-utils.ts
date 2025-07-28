import { env } from "@/env";

/**
 * Utility functions for working with environment variables
 */

export function isDevelopment() {
  return env.NODE_ENV === "development";
}

export function isProduction() {
  return env.NODE_ENV === "production";
}

export function isTest() {
  return env.NODE_ENV === "test";
}

/**
 * Get the full application URL
 */
export function getAppUrl(path = "") {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

// Add your custom environment utility functions here
