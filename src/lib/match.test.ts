import { ok, err } from "./result";
import {
  match,
  matchDiscriminated,
  matchUnion,
  matchLiteral,
  matchArray,
  matchNullable,
  matchPromise,
  matchHttpStatus,
  matchEnvironment,
  matchDevice,
  matchScreenSize,
  matchBoolean,
  matchRange,
  matchString,
} from "./match";

// Example usage and tests for match functions
export function demonstrateMatch() {
  console.log("=== Match Function Examples ===");

  // 1. Result matching
  console.log("\n--- Result Matching ---");
  const successResult = ok("Hello, World!");
  const errorResult = err(new Error("Something went wrong"));

  const successMessage = match(
    successResult,
    (value) => `Success: ${value}`,
    (error) => `Error: ${error.message}`
  );
  console.log("Success match:", successMessage); // "Success: Hello, World!"

  const errorMessage = match(
    errorResult,
    (value) => `Success: ${value}`,
    (error) => `Error: ${error.message}`
  );
  console.log("Error match:", errorMessage); // "Error: Something went wrong"

  // 2. Discriminated union matching
  console.log("\n--- Discriminated Union Matching ---");
  type Action =
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: number }
    | { type: "reset" };

  const incrementAction: Action = { type: "increment", payload: 5 };
  const decrementAction: Action = { type: "decrement", payload: 3 };
  const resetAction: Action = { type: "reset" };

  const handleAction = (action: Action) => {
    switch (action.type) {
      case "increment":
        return `Increment by ${action.payload}`;
      case "decrement":
        return `Decrement by ${action.payload}`;
      case "reset":
        return "Reset to zero";
    }
  };

  console.log("Increment:", handleAction(incrementAction)); // "Increment by 5"
  console.log("Decrement:", handleAction(decrementAction)); // "Decrement by 3"
  console.log("Reset:", handleAction(resetAction)); // "Reset to zero"

  // 3. Union type matching
  console.log("\n--- Union Type Matching ---");
  type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number };

  const circle: Shape = { kind: "circle", radius: 5 };
  const rectangle: Shape = { kind: "rectangle", width: 10, height: 20 };

  const calculateArea = (shape: Shape) => {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
    } else {
      return shape.width * shape.height;
    }
  };

  console.log("Circle area:", calculateArea(circle)); // ~78.54
  console.log("Rectangle area:", calculateArea(rectangle)); // 200

  // 4. Literal matching
  console.log("\n--- Literal Matching ---");
  const status = "success" as const;
  const message = matchLiteral(status, {
    success: () => "Operation completed successfully",
  });
  console.log("Status message:", message); // "Operation completed successfully"

  // 5. Array matching
  console.log("\n--- Array Matching ---");
  const emptyArray: number[] = [];
  const singleArray = [42];
  const multipleArray = [1, 2, 3, 4, 5];

  const describeArray = (array: number[]) =>
    matchArray(array, {
      empty: () => "Array is empty",
      single: (item) => `Array has one item: ${item}`,
      multiple: (items) =>
        `Array has ${items.length} items: ${items.join(", ")}`,
    });

  console.log("Empty:", describeArray(emptyArray)); // "Array is empty"
  console.log("Single:", describeArray(singleArray)); // "Array has one item: 42"
  console.log("Multiple:", describeArray(multipleArray)); // "Array has 5 items: 1, 2, 3, 4, 5"

  // 6. Nullable matching
  console.log("\n--- Nullable Matching ---");
  const someValue = "Hello";
  const nullValue = null;

  const describeValue = (value: string | null) =>
    matchNullable(value, {
      some: (value) => `Value is: ${value}`,
      none: () => "Value is null or undefined",
    });

  console.log("Some value:", describeValue(someValue)); // "Value is: Hello"
  console.log("Null value:", describeValue(nullValue)); // "Value is null or undefined"

  // 7. HTTP Status matching
  console.log("\n--- HTTP Status Matching ---");
  const handleHttpStatus = (status: number) =>
    matchHttpStatus(status, {
      success: (status) => `Success (${status})`,
      clientError: (status) => `Client Error (${status})`,
      serverError: (status) => `Server Error (${status})`,
      fallback: (status) => `Unknown Status (${status})`,
    });

  console.log("200:", handleHttpStatus(200)); // "Success (200)"
  console.log("404:", handleHttpStatus(404)); // "Client Error (404)"
  console.log("500:", handleHttpStatus(500)); // "Server Error (500)"
  console.log("999:", handleHttpStatus(999)); // "Unknown Status (999)"

  // 8. Environment matching
  console.log("\n--- Environment Matching ---");
  const config = matchEnvironment({
    development: () => ({ debug: true, apiUrl: "http://localhost:3000" }),
    test: () => ({ debug: false, apiUrl: "http://test-api.com" }),
    production: () => ({ debug: false, apiUrl: "https://api.production.com" }),
  });
  console.log("Environment config:", config);

  // 9. Device matching
  console.log("\n--- Device Matching ---");
  const mobileUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)";
  const desktopUA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

  const getDeviceType = (userAgent: string) =>
    matchDevice(userAgent, {
      mobile: () => "Mobile device",
      tablet: () => "Tablet device",
      desktop: () => "Desktop device",
    });

  console.log("Mobile UA:", getDeviceType(mobileUA)); // "Mobile device"
  console.log("Desktop UA:", getDeviceType(desktopUA)); // "Desktop device"

  // 10. Screen size matching
  console.log("\n--- Screen Size Matching ---");
  const getLayout = (width: number) =>
    matchScreenSize(width, {
      mobile: () => "Single column layout",
      tablet: () => "Two column layout",
      desktop: () => "Three column layout",
    });

  console.log("320px:", getLayout(320)); // "Single column layout"
  console.log("768px:", getLayout(768)); // "Two column layout"
  console.log("1200px:", getLayout(1200)); // "Three column layout"

  // 11. Boolean matching
  console.log("\n--- Boolean Matching ---");
  const isLoggedIn = true;
  const authMessage = matchBoolean(isLoggedIn, {
    true: () => "Welcome back!",
    false: () => "Please log in",
  });
  console.log("Auth message:", authMessage); // "Welcome back!"

  // 12. Range matching
  console.log("\n--- Range Matching ---");
  const getGrade = (score: number) =>
    matchRange(score, [
      { range: [90, 100], handler: () => "A" },
      { range: [80, 89], handler: () => "B" },
      { range: [70, 79], handler: () => "C" },
      { range: [60, 69], handler: () => "D" },
      { range: [0, 59], handler: () => "F" },
    ]);
  console.log("Score 95:", getGrade(95)); // "A"
  console.log("Score 75:", getGrade(75)); // "C"

  // 13. String pattern matching
  console.log("\n--- String Pattern Matching ---");
  const getFileType = (filename: string) =>
    matchString(
      filename,
      [
        { pattern: /\.js$/, handler: () => "JavaScript" },
        { pattern: /\.ts$/, handler: () => "TypeScript" },
        { pattern: /\.json$/, handler: () => "JSON" },
        { pattern: /\.md$/, handler: () => "Markdown" },
      ],
      () => "Unknown file type"
    );

  console.log("app.js:", getFileType("app.js")); // "JavaScript"
  console.log("config.ts:", getFileType("config.ts")); // "TypeScript"
  console.log("data.json:", getFileType("data.json")); // "JSON"
  console.log("README.md:", getFileType("README.md")); // "Markdown"
  console.log("unknown.txt:", getFileType("unknown.txt")); // "Unknown file type"
}

// Example of async promise matching
export async function demonstrateAsyncMatch() {
  console.log("\n=== Async Promise Matching ===");

  const successPromise = Promise.resolve("Async success");
  const errorPromise = Promise.reject(new Error("Async error"));

  const successResult = await matchPromise(successPromise, {
    resolved: (value) => `Resolved: ${value}`,
    rejected: (error) =>
      `Rejected: ${error instanceof Error ? error.message : String(error)}`,
  });
  console.log("Success promise:", successResult); // "Resolved: Async success"

  const errorResult = await matchPromise(errorPromise, {
    resolved: (value) => `Resolved: ${value}`,
    rejected: (error) =>
      `Rejected: ${error instanceof Error ? error.message : String(error)}`,
  });
  console.log("Error promise:", errorResult); // "Rejected: Async error"
}

// Export for potential use in development
export {
  demonstrateMatch as matchDemo,
  demonstrateAsyncMatch as asyncMatchDemo,
};
