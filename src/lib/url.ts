import { env } from "@/env";

/**
 * URL Builder class for constructing and managing URLs
 */
export class UrlBuilder {
  private baseUrl: string;
  private path: string;
  private queryParams: Map<string, string>;
  private hash: string;

  constructor(baseUrl?: string) {
    this.baseUrl =
      baseUrl || env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    this.path = "";
    this.queryParams = new Map();
    this.hash = "";
  }

  /**
   * Set the path for the URL
   */
  setPath(path: string): UrlBuilder {
    // Ensure path starts with / if it's not empty
    this.path = path.startsWith("/") ? path : `/${path}`;
    return this;
  }

  /**
   * Add a query parameter
   */
  addQueryParam(key: string, value: string): UrlBuilder {
    this.queryParams.set(key, value);
    return this;
  }

  /**
   * Add multiple query parameters
   */
  addQueryParams(params: Record<string, string>): UrlBuilder {
    Object.entries(params).forEach(([key, value]) => {
      this.queryParams.set(key, value);
    });
    return this;
  }

  /**
   * Set the hash fragment
   */
  setHash(hash: string): UrlBuilder {
    this.hash = hash.startsWith("#") ? hash : `#${hash}`;
    return this;
  }

  /**
   * Build the final URL
   */
  build(): string {
    let url = `${this.baseUrl}${this.path}`;

    // Add query parameters
    if (this.queryParams.size > 0) {
      const queryString = Array.from(this.queryParams.entries())
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");
      url += `?${queryString}`;
    }

    // Add hash
    if (this.hash) {
      url += this.hash;
    }

    return url;
  }

  /**
   * Get the URL as a URL object
   */
  toURL(): URL {
    return new URL(this.build());
  }

  /**
   * Reset the builder to initial state
   */
  reset(): UrlBuilder {
    this.path = "";
    this.queryParams.clear();
    this.hash = "";
    return this;
  }

  /**
   * Clone the current builder state
   */
  clone(): UrlBuilder {
    const cloned = new UrlBuilder(this.baseUrl);
    cloned.path = this.path;
    cloned.queryParams = new Map(this.queryParams);
    cloned.hash = this.hash;
    return cloned;
  }
}

/**
 * Utility functions for common URL operations
 */
export const urlUtils = {
  /**
   * Create a new URL builder instance
   */
  create(baseUrl?: string): UrlBuilder {
    return new UrlBuilder(baseUrl);
  },

  /**
   * Build a simple URL with path
   */
  path(path: string): string {
    return new UrlBuilder().setPath(path).build();
  },

  /**
   * Build a URL with query parameters
   */
  withParams(path: string, params: Record<string, string>): string {
    return new UrlBuilder().setPath(path).addQueryParams(params).build();
  },

  /**
   * Build a URL with hash fragment
   */
  withHash(path: string, hash: string): string {
    return new UrlBuilder().setPath(path).setHash(hash).build();
  },

  /**
   * Check if a URL is external (not same origin)
   */
  isExternal(url: string): boolean {
    try {
      const urlObj = new URL(url);
      const currentOrigin = new URL(
        env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      ).origin;
      return urlObj.origin !== currentOrigin;
    } catch {
      return false;
    }
  },

  /**
   * Check if a URL is absolute
   */
  isAbsolute(url: string): boolean {
    return url.startsWith("http://") || url.startsWith("https://");
  },

  /**
   * Check if a URL is relative
   */
  isRelative(url: string): boolean {
    return !urlUtils.isAbsolute(url) && !url.startsWith("//");
  },

  /**
   * Normalize a URL (ensure it's absolute)
   */
  normalize(url: string): string {
    if (urlUtils.isAbsolute(url)) {
      return url;
    }
    return new UrlBuilder().setPath(url).build();
  },

  /**
   * Join URL parts
   */
  join(...parts: string[]): string {
    return parts
      .map((part, index) => {
        if (index === 0) {
          return part.replace(/\/+$/, "");
        }
        return part.replace(/^\/+|\/+$/g, "");
      })
      .filter(Boolean)
      .join("/");
  },
};

/**
 * Predefined URL builders for common routes
 */
export const routes = {
  home: () => new UrlBuilder().setPath("/"),
  about: () => new UrlBuilder().setPath("/about"),
  contact: () => new UrlBuilder().setPath("/contact"),
  api: {
    webhook: () => new UrlBuilder().setPath("/api/webhook"),
    health: () => new UrlBuilder().setPath("/api/health"),
  },
  auth: {
    signin: () => new UrlBuilder().setPath("/auth/signin"),
    signout: () => new UrlBuilder().setPath("/auth/signout"),
  },
} as const;
