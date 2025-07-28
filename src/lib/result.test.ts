import { Result, ok, err, safe, safeAsync, ResultUtils } from "./result";

// Example usage and tests for Result class
export async function demonstrateResult() {
  console.log("=== Result Examples ===");

  // Basic Result creation
  const successResult = ok("Hello, World!");
  const errorResult = err(new Error("Something went wrong"));

  console.log("Success result:", successResult.isOk()); // true
  console.log("Error result:", errorResult.isErr()); // true

  // Mapping results
  const mappedSuccess = successResult.map((str) => str.toUpperCase());
  console.log("Mapped success:", mappedSuccess.unwrap()); // "HELLO, WORLD!"

  const mappedError = errorResult.mapErr(
    (err) => new Error(`Custom: ${err.message}`)
  );
  console.log("Mapped error:", mappedError.unwrapErr().message); // "Custom: Something went wrong"

  // Flat mapping
  const flatMapped = successResult.flatMap((str) => ok(str.length));
  console.log("Flat mapped:", flatMapped.unwrap()); // 13

  // Unwrapping with fallbacks
  const unwrappedOr = errorResult.unwrapOr("Default value");
  console.log("Unwrap or default:", unwrappedOr); // "Default value"

  const unwrappedOrElse = errorResult.unwrapOrElse(
    (err) => `Error: ${err.message}`
  );
  console.log("Unwrap or else:", unwrappedOrElse); // "Error: Something went wrong"

  // Matching on results
  const matched = successResult.match(
    (value) => `Success: ${value}`,
    (error) => `Error: ${error.message}`
  );
  console.log("Matched:", matched); // "Success: Hello, World!"

  // Tapping for side effects
  successResult.tap((value) => console.log("Tapped value:", value));
  errorResult.tapErr((error) => console.log("Tapped error:", error.message));

  // Safe function wrapping
  console.log("\n=== Safe Function Examples ===");

  // Synchronous safe function
  const safeResult = safe(() => {
    const random = Math.random();
    if (random > 0.5) {
      return "Success!";
    } else {
      throw new Error("Random failure");
    }
  });

  console.log(
    "Safe result:",
    safeResult.isOk() ? safeResult.unwrap() : safeResult.unwrapErr().message
  );

  // Asynchronous safe function
  const safeAsyncResult = await safeAsync(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const random = Math.random();
    if (random > 0.5) {
      return "Async success!";
    } else {
      throw new Error("Async random failure");
    }
  });

  console.log(
    "Safe async result:",
    safeAsyncResult.isOk()
      ? safeAsyncResult.unwrap()
      : safeAsyncResult.unwrapErr().message
  );

  // Result utilities
  console.log("\n=== Result Utilities Examples ===");

  // Combining results
  const results = [ok(1), ok(2), ok(3)];

  const combined = ResultUtils.combine(results);
  console.log("Combined success:", combined.unwrap()); // [1, 2, 3]

  const mixedResults = [ok(1), err(new Error("Second failed")), ok(3)];

  const combinedWithError = ResultUtils.combine(mixedResults);
  console.log(
    "Combined with error:",
    combinedWithError.isErr()
      ? (combinedWithError.unwrapErr() as Error).message
      : "Unexpected success"
  );

  // Partitioning results
  const [successes, errors] = ResultUtils.partition(mixedResults);
  console.log("Successes:", successes); // [1, 3]
  console.log("Errors:", errors.length); // 1

  // Filtering results
  const onlySuccesses = ResultUtils.successes(mixedResults);
  const onlyErrors = ResultUtils.errors(mixedResults);
  console.log("Only successes:", onlySuccesses); // [1, 3]
  console.log("Only errors:", onlyErrors.length); // 1

  // From nullable
  const nullableValue: string | null = "Hello";
  const nullableResult = ResultUtils.fromNullable(
    nullableValue,
    new Error("Value is null")
  );
  console.log("From nullable:", nullableResult.unwrap()); // "Hello"

  const nullValue: string | null = null;
  const nullResult = ResultUtils.fromNullable(
    nullValue,
    new Error("Value is null")
  );
  console.log("From null:", nullResult.isErr()); // true

  // From promise
  const promiseResult = await ResultUtils.fromPromise(
    Promise.resolve("Promise success"),
    (error: unknown) => new Error(`Promise failed: ${String(error)}`)
  );
  console.log("From promise:", promiseResult.unwrap()); // "Promise success"
}

// Example of using Result in a real-world scenario
export async function fetchUserData(
  userId: string
): Promise<Result<{ id: string; name: string }, Error>> {
  return safeAsync(async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (userId === "invalid") {
      throw new Error("Invalid user ID");
    }

    return { id: userId, name: `User ${userId}` };
  });
}

// Example of chaining results
export async function processUserWorkflow(userId: string) {
  const userResult = await fetchUserData(userId);

  return userResult
    .map((user) => ({ ...user, processed: true }))
    .tap((user) => console.log(`Processing user: ${user.name}`))
    .flatMap((user) => {
      if (user.name.includes("admin")) {
        return ok({ ...user, role: "admin" });
      } else {
        return err(new Error("User is not an admin"));
      }
    });
}

// Export for potential use in development
export { demonstrateResult as resultDemo };
