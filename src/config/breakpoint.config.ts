/**
 * Breakpoint configuration for responsive design
 */

/**
 * Breakpoint values in pixels
 */
export const breakpoints = {
  xs: 0, // Extra small devices (phones)
  sm: 640, // Small devices (large phones)
  md: 768, // Medium devices (tablets)
  lg: 1024, // Large devices (laptops)
  xl: 1280, // Extra large devices (desktops)
  "2xl": 1536, // 2X large devices (large desktops)
} as const;

/**
 * Breakpoint names as union type
 */
export type Breakpoint = keyof typeof breakpoints;

/**
 * Breakpoint values as union type
 */
export type BreakpointValue = (typeof breakpoints)[Breakpoint];

/**
 * Device type based on breakpoints
 */
export type DeviceType = "mobile" | "tablet" | "desktop" | "large-desktop";

/**
 * Orientation type
 */
export type Orientation = "portrait" | "landscape";

/**
 * Breakpoint comparison utilities
 */
export const breakpointUtils = {
  /**
   * Check if a width is at or above a breakpoint
   */
  isAtLeast(width: number, breakpoint: Breakpoint): boolean {
    return width >= breakpoints[breakpoint];
  },

  /**
   * Check if a width is below a breakpoint
   */
  isBelow(width: number, breakpoint: Breakpoint): boolean {
    return width < breakpoints[breakpoint];
  },

  /**
   * Check if a width is between two breakpoints (inclusive)
   */
  isBetween(width: number, min: Breakpoint, max: Breakpoint): boolean {
    return width >= breakpoints[min] && width <= breakpoints[max];
  },

  /**
   * Get the current breakpoint for a given width
   */
  getCurrentBreakpoint(width: number): Breakpoint {
    const sortedBreakpoints = Object.entries(breakpoints).sort(
      ([, a], [, b]) => b - a
    ) as [Breakpoint, number][];

    for (const [breakpoint, value] of sortedBreakpoints) {
      if (width >= value) {
        return breakpoint;
      }
    }

    return "xs";
  },

  /**
   * Get the device type for a given width
   */
  getDeviceType(width: number): DeviceType {
    if (width < breakpoints.md) {
      return "mobile";
    } else if (width < breakpoints.lg) {
      return "tablet";
    } else if (width < breakpoints["2xl"]) {
      return "desktop";
    } else {
      return "large-desktop";
    }
  },

  /**
   * Get orientation for given dimensions
   */
  getOrientation(width: number, height: number): Orientation {
    return width > height ? "landscape" : "portrait";
  },

  /**
   * Get responsive class names based on breakpoint
   */
  getResponsiveClasses(baseClass: string, breakpoint: Breakpoint): string {
    return `${baseClass} ${baseClass}-${breakpoint}`;
  },

  /**
   * Get all breakpoints as an array
   */
  getAllBreakpoints(): Breakpoint[] {
    return Object.keys(breakpoints) as Breakpoint[];
  },

  /**
   * Get breakpoint values as an array
   */
  getAllBreakpointValues(): number[] {
    return Object.values(breakpoints);
  },
};

/**
 * CSS custom properties for breakpoints
 */
export const breakpointCSS = {
  "--breakpoint-xs": `${breakpoints.xs}px`,
  "--breakpoint-sm": `${breakpoints.sm}px`,
  "--breakpoint-md": `${breakpoints.md}px`,
  "--breakpoint-lg": `${breakpoints.lg}px`,
  "--breakpoint-xl": `${breakpoints.xl}px`,
  "--breakpoint-2xl": `${breakpoints["2xl"]}px`,
} as const;

/**
 * Tailwind CSS breakpoint configuration
 */
export const tailwindBreakpoints = {
  screens: {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
    "2xl": `${breakpoints["2xl"]}px`,
  },
} as const;

/**
 * Media query strings for CSS-in-JS
 */
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]}px)`,
} as const;

/**
 * Device-specific configurations
 */
export const deviceConfigs = {
  mobile: {
    maxWidth: breakpoints.md - 1,
    columns: 1,
    spacing: "compact",
    fontSize: "small",
  },
  tablet: {
    minWidth: breakpoints.md,
    maxWidth: breakpoints.lg - 1,
    columns: 2,
    spacing: "normal",
    fontSize: "medium",
  },
  desktop: {
    minWidth: breakpoints.lg,
    maxWidth: breakpoints["2xl"] - 1,
    columns: 3,
    spacing: "comfortable",
    fontSize: "large",
  },
  "large-desktop": {
    minWidth: breakpoints["2xl"],
    columns: 4,
    spacing: "spacious",
    fontSize: "xlarge",
  },
} as const;

/**
 * Responsive layout configurations
 */
export const layoutConfigs = {
  container: {
    mobile: "px-4",
    tablet: "px-6",
    desktop: "px-8",
    "large-desktop": "px-12",
  },
  grid: {
    mobile: "grid-cols-1 gap-4",
    tablet: "grid-cols-2 gap-6",
    desktop: "grid-cols-3 gap-8",
    "large-desktop": "grid-cols-4 gap-10",
  },
  spacing: {
    mobile: "space-y-4",
    tablet: "space-y-6",
    desktop: "space-y-8",
    "large-desktop": "space-y-10",
  },
} as const;

/**
 * Hook-friendly breakpoint utilities
 */
export const breakpointHooks = {
  /**
   * Get responsive value based on breakpoint
   */
  getResponsiveValue<T>(
    values: Partial<Record<Breakpoint, T>>,
    defaultValue: T
  ): T {
    return (values as any) || defaultValue;
  },

  /**
   * Get responsive class names
   */
  getResponsiveClasses(
    classes: Partial<Record<Breakpoint, string>>,
    baseClass: string = ""
  ): string {
    const responsiveClasses = Object.entries(classes)
      .map(([breakpoint, className]) => {
        if (breakpoint === "xs") {
          return className;
        }
        return `${breakpoint}:${className}`;
      })
      .filter(Boolean)
      .join(" ");

    return `${baseClass} ${responsiveClasses}`.trim();
  },
};

/**
 * Export all breakpoint-related utilities
 */
export default {
  breakpoints,
  breakpointUtils,
  breakpointCSS,
  tailwindBreakpoints,
  mediaQueries,
  deviceConfigs,
  layoutConfigs,
  breakpointHooks,
};
