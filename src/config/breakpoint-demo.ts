import {
  demonstrateBreakpoints,
  createResponsiveComponent,
  createCSSInJSExample,
  createTailwindExample,
  createReactHookExample,
} from "./breakpoint.config.test";

// Run all breakpoint demonstrations
async function main() {
  demonstrateBreakpoints();
  createResponsiveComponent();
  createCSSInJSExample();
  createTailwindExample();
  createReactHookExample();
}

// Run if this file is executed directly
if (require.main === module) {
  main().catch(console.error);
}

export { main as runBreakpointDemo };
