import {
  breakpoints,
  breakpointUtils,
  breakpointCSS,
  tailwindBreakpoints,
  mediaQueries,
  deviceConfigs,
  layoutConfigs,
  breakpointHooks,
} from "./breakpoint.config";

// Example usage and tests for breakpoint configuration
export function demonstrateBreakpoints() {
  console.log("=== Breakpoint Configuration Examples ===");

  // 1. Basic breakpoint values
  console.log("\n--- Breakpoint Values ---");
  console.log("Breakpoints:", breakpoints);
  console.log("XS:", breakpoints.xs, "px");
  console.log("SM:", breakpoints.sm, "px");
  console.log("MD:", breakpoints.md, "px");
  console.log("LG:", breakpoints.lg, "px");
  console.log("XL:", breakpoints.xl, "px");
  console.log("2XL:", breakpoints["2xl"], "px");

  // 2. Breakpoint utilities
  console.log("\n--- Breakpoint Utilities ---");
  const testWidth = 1024;

  console.log(`Width ${testWidth}px:`);
  console.log("- Is at least SM:", breakpointUtils.isAtLeast(testWidth, "sm")); // true
  console.log("- Is at least MD:", breakpointUtils.isAtLeast(testWidth, "md")); // true
  console.log("- Is at least LG:", breakpointUtils.isAtLeast(testWidth, "lg")); // true
  console.log("- Is at least XL:", breakpointUtils.isAtLeast(testWidth, "xl")); // false

  console.log("- Is below LG:", breakpointUtils.isBelow(testWidth, "lg")); // false
  console.log("- Is below XL:", breakpointUtils.isBelow(testWidth, "xl")); // true

  console.log(
    "- Is between MD and XL:",
    breakpointUtils.isBetween(testWidth, "md", "xl")
  ); // true

  console.log(
    "- Current breakpoint:",
    breakpointUtils.getCurrentBreakpoint(testWidth)
  ); // "lg"
  console.log("- Device type:", breakpointUtils.getDeviceType(testWidth)); // "desktop"
  console.log("- Orientation:", breakpointUtils.getOrientation(testWidth, 768)); // "landscape"

  // 3. CSS custom properties
  console.log("\n--- CSS Custom Properties ---");
  console.log("CSS Variables:", breakpointCSS);

  // 4. Tailwind configuration
  console.log("\n--- Tailwind Configuration ---");
  console.log("Tailwind Screens:", tailwindBreakpoints.screens);

  // 5. Media queries
  console.log("\n--- Media Queries ---");
  console.log("SM Media Query:", mediaQueries.sm);
  console.log("LG Media Query:", mediaQueries.lg);

  // 6. Device configurations
  console.log("\n--- Device Configurations ---");
  console.log("Mobile config:", deviceConfigs.mobile);
  console.log("Tablet config:", deviceConfigs.tablet);
  console.log("Desktop config:", deviceConfigs.desktop);
  console.log("Large Desktop config:", deviceConfigs["large-desktop"]);

  // 7. Layout configurations
  console.log("\n--- Layout Configurations ---");
  console.log("Container classes:", layoutConfigs.container);
  console.log("Grid classes:", layoutConfigs.grid);
  console.log("Spacing classes:", layoutConfigs.spacing);

  // 8. Hook utilities
  console.log("\n--- Hook Utilities ---");

  const responsiveValues = {
    xs: "mobile-value",
    md: "tablet-value",
    lg: "desktop-value",
  };

  const responsiveClasses = {
    xs: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  console.log(
    "Responsive value (default):",
    breakpointHooks.getResponsiveValue(responsiveValues, "default-value")
  );
  console.log(
    "Responsive classes:",
    breakpointHooks.getResponsiveClasses(responsiveClasses, "base-class")
  );
}

// Example of responsive component usage
export function createResponsiveComponent() {
  console.log("\n=== Responsive Component Example ===");

  const getResponsiveLayout = (width: number) => {
    const deviceType = breakpointUtils.getDeviceType(width);
    const config = deviceConfigs[deviceType];
    const layout = layoutConfigs.container[deviceType];

    return {
      deviceType,
      columns: config.columns,
      containerClass: layout,
      spacing: config.spacing,
      fontSize: config.fontSize,
    };
  };

  // Test different screen sizes
  const testSizes = [320, 768, 1024, 1600];

  testSizes.forEach((width) => {
    const layout = getResponsiveLayout(width);
    console.log(`${width}px:`, layout);
  });
}

// Example of CSS-in-JS usage
export function createCSSInJSExample() {
  console.log("\n=== CSS-in-JS Example ===");

  const responsiveStyles = {
    container: {
      padding: "1rem",
      [mediaQueries.md]: {
        padding: "1.5rem",
      },
      [mediaQueries.lg]: {
        padding: "2rem",
      },
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "1rem",
      [mediaQueries.md]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      },
      [mediaQueries.lg]: {
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
      },
    },
  };

  console.log("Responsive Styles:", JSON.stringify(responsiveStyles, null, 2));
}

// Example of Tailwind CSS usage
export function createTailwindExample() {
  console.log("\n=== Tailwind CSS Example ===");

  const responsiveClasses = {
    container: "px-4 md:px-6 lg:px-8 xl:px-12",
    grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8",
    text: "text-sm md:text-base lg:text-lg xl:text-xl",
    spacing: "space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10",
  };

  console.log("Responsive Tailwind Classes:");
  Object.entries(responsiveClasses).forEach(([key, classes]) => {
    console.log(`${key}:`, classes);
  });
}

// Example of React hook usage
export function createReactHookExample() {
  console.log("\n=== React Hook Example ===");

  // Simulate a React hook that returns current breakpoint
  const useBreakpoint = (width: number) => {
    return {
      breakpoint: breakpointUtils.getCurrentBreakpoint(width),
      deviceType: breakpointUtils.getDeviceType(width),
      isMobile: breakpointUtils.isBelow(width, "md"),
      isTablet: breakpointUtils.isBetween(width, "md", "lg"),
      isDesktop: breakpointUtils.isAtLeast(width, "lg"),
      isLargeDesktop: breakpointUtils.isAtLeast(width, "2xl"),
    };
  };

  // Test the hook with different widths
  const testWidths = [320, 768, 1024, 1600];

  testWidths.forEach((width) => {
    const breakpoint = useBreakpoint(width);
    console.log(`${width}px:`, breakpoint);
  });
}

// Export for potential use in development
export {
  demonstrateBreakpoints as breakpointDemo,
  createResponsiveComponent as responsiveComponentDemo,
  createCSSInJSExample as cssInJSDemo,
  createTailwindExample as tailwindDemo,
  createReactHookExample as reactHookDemo,
};
