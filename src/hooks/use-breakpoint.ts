import { useState, useEffect } from "react";
import {
  breakpointUtils,
  breakpoints,
  type Breakpoint,
  type DeviceType,
} from "@/config/breakpoint.config";

/**
 * Hook to get current breakpoint and device information
 */
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");
  const [deviceType, setDeviceType] = useState<DeviceType>("mobile");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Set initial values
    const updateDimensions = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWidth(newWidth);
      setHeight(newHeight);
      setBreakpoint(breakpointUtils.getCurrentBreakpoint(newWidth));
      setDeviceType(breakpointUtils.getDeviceType(newWidth));
    };

    // Set initial values
    updateDimensions();

    // Add event listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return {
    breakpoint,
    deviceType,
    width,
    height,
    isMobile: breakpointUtils.isBelow(width, "md"),
    isTablet: breakpointUtils.isBetween(width, "md", "lg"),
    isDesktop: breakpointUtils.isAtLeast(width, "lg"),
    isLargeDesktop: breakpointUtils.isAtLeast(width, "2xl"),
    isLandscape: breakpointUtils.getOrientation(width, height) === "landscape",
    isPortrait: breakpointUtils.getOrientation(width, height) === "portrait",
  };
}

/**
 * Hook to get responsive value based on breakpoint
 */
export function useResponsiveValue<T>(
  values: Partial<Record<Breakpoint, T>>,
  defaultValue: T
): T {
  const { breakpoint } = useBreakpoint();

  // Find the best matching value for current breakpoint
  const sortedBreakpoints = Object.keys(breakpoints).sort(
    (a, b) => breakpoints[a as Breakpoint] - breakpoints[b as Breakpoint]
  ) as Breakpoint[];

  for (let i = sortedBreakpoints.length - 1; i >= 0; i--) {
    const bp = sortedBreakpoints[i];
    if (
      values[bp] !== undefined &&
      breakpointUtils.isAtLeast(breakpoints[breakpoint], bp)
    ) {
      return values[bp]!;
    }
  }

  return defaultValue;
}

/**
 * Hook to get responsive class names
 */
export function useResponsiveClasses(
  classes: Partial<Record<Breakpoint, string>>,
  baseClass: string = ""
): string {
  const { breakpoint } = useBreakpoint();

  const responsiveClasses = Object.entries(classes)
    .map(([bp, className]) => {
      if (bp === "xs") {
        return className;
      }
      return `${bp}:${className}`;
    })
    .filter(Boolean)
    .join(" ");

  return `${baseClass} ${responsiveClasses}`.trim();
}

/**
 * Hook to check if current breakpoint matches a condition
 */
export function useBreakpointMatch(
  condition: (breakpoint: Breakpoint) => boolean
): boolean {
  const { breakpoint } = useBreakpoint();
  return condition(breakpoint);
}

/**
 * Hook to get device-specific configuration
 */
export function useDeviceConfig() {
  const { deviceType } = useBreakpoint();

  const deviceConfigs = {
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

  return deviceConfigs[deviceType];
}

/**
 * Hook to get layout configuration
 */
export function useLayoutConfig() {
  const { deviceType } = useBreakpoint();

  const layoutConfigs = {
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

  return {
    container: layoutConfigs.container[deviceType],
    grid: layoutConfigs.grid[deviceType],
    spacing: layoutConfigs.spacing[deviceType],
  };
}

/**
 * Hook to get media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/**
 * Hook to get specific breakpoint media query matches
 */
export function useBreakpointQuery(breakpoint: Breakpoint): boolean {
  const query = `(min-width: ${breakpoints[breakpoint]}px)`;
  return useMediaQuery(query);
}
