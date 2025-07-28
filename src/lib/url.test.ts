import { UrlBuilder, urlUtils, routes } from "./url";

// Example usage and tests for UrlBuilder
export function demonstrateUrlBuilder() {
  console.log("=== UrlBuilder Examples ===");

  // Basic URL building
  const basicUrl = new UrlBuilder().setPath("/about").build();
  console.log("Basic URL:", basicUrl);

  // URL with query parameters
  const urlWithParams = new UrlBuilder()
    .setPath("/search")
    .addQueryParam("q", "AI compute")
    .addQueryParam("category", "gpu")
    .build();
  console.log("URL with params:", urlWithParams);

  // URL with hash
  const urlWithHash = new UrlBuilder()
    .setPath("/docs")
    .setHash("installation")
    .build();
  console.log("URL with hash:", urlWithHash);

  // Complex URL
  const complexUrl = new UrlBuilder()
    .setPath("/products")
    .addQueryParams({
      category: "gpu",
      price: "1000-5000",
      brand: "nvidia",
    })
    .setHash("top")
    .build();
  console.log("Complex URL:", complexUrl);

  // Using utility functions
  console.log("\n=== Utility Functions ===");
  console.log("Simple path:", urlUtils.path("/contact"));
  console.log("With params:", urlUtils.withParams("/search", { q: "test" }));
  console.log("With hash:", urlUtils.withHash("/docs", "api"));
  console.log("Is external:", urlUtils.isExternal("https://google.com"));
  console.log("Is absolute:", urlUtils.isAbsolute("https://example.com"));
  console.log("Is relative:", urlUtils.isRelative("/about"));
  console.log("Normalized:", urlUtils.normalize("/about"));
  console.log("Joined:", urlUtils.join("api", "v1", "users"));

  // Using predefined routes
  console.log("\n=== Predefined Routes ===");
  console.log("Home:", routes.home().build());
  console.log("About:", routes.about().build());
  console.log("API Health:", routes.api.health().build());
  console.log("Auth Signin:", routes.auth.signin().build());

  // Chaining and cloning
  console.log("\n=== Chaining and Cloning ===");
  const baseBuilder = new UrlBuilder().setPath("/products");
  const gpuBuilder = baseBuilder.clone().addQueryParam("category", "gpu");
  const cpuBuilder = baseBuilder.clone().addQueryParam("category", "cpu");

  console.log("GPU products:", gpuBuilder.build());
  console.log("CPU products:", cpuBuilder.build());
  console.log("Base builder unchanged:", baseBuilder.build());
}

// Export for potential use in development
export { demonstrateUrlBuilder as urlBuilderDemo };
