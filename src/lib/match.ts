/**
 * Pattern matching utility functions
 */

/**
 * Match function for Result types
 */
export function match<T, E, U>(
  result: { isOk(): boolean; unwrap(): T; unwrapErr(): E },
  onOk: (value: T) => U,
  onErr: (error: E) => U
): U {
  return result.isOk() ? onOk(result.unwrap()) : onErr(result.unwrapErr());
}

/**
 * Generic match function for any discriminated union
 */
export function matchDiscriminated<T extends { type: string }, U>(
  value: T,
  patterns: Record<T["type"], (value: T) => U>
): U {
  const handler = patterns[value.type as keyof typeof patterns];
  if (!handler) {
    throw new Error(`No handler found for type: ${value.type}`);
  }
  return handler(value);
}

/**
 * Match function for union types with type guards
 */
export function matchUnion<T, U>(
  value: T,
  patterns: Array<{
    guard: (value: T) => boolean;
    handler: (value: T) => U;
  }>,
  fallback?: (value: T) => U
): U {
  for (const pattern of patterns) {
    if (pattern.guard(value)) {
      return pattern.handler(value);
    }
  }

  if (fallback) {
    return fallback(value);
  }

  throw new Error(`No matching pattern found for value: ${String(value)}`);
}

/**
 * Match function for literal values
 */
export function matchLiteral<T extends string | number, U>(
  value: T,
  patterns: Record<T, () => U>,
  fallback?: () => U
): U {
  if (value in patterns) {
    return patterns[value]();
  }

  if (fallback) {
    return fallback();
  }

  throw new Error(`No matching pattern found for literal: ${String(value)}`);
}

/**
 * Match function for arrays
 */
export function matchArray<T, U>(
  array: T[],
  patterns: {
    empty: () => U;
    single: (item: T) => U;
    multiple: (items: T[]) => U;
  }
): U {
  if (array.length === 0) {
    return patterns.empty();
  } else if (array.length === 1) {
    return patterns.single(array[0]);
  } else {
    return patterns.multiple(array);
  }
}

/**
 * Match function for nullable values
 */
export function matchNullable<T, U>(
  value: T | null | undefined,
  patterns: {
    some: (value: T) => U;
    none: () => U;
  }
): U {
  return value != null ? patterns.some(value) : patterns.none();
}

/**
 * Match function for promises
 */
export async function matchPromise<T, U>(
  promise: Promise<T>,
  patterns: {
    resolved: (value: T) => U;
    rejected: (error: unknown) => U;
  }
): Promise<U> {
  try {
    const value = await promise;
    return patterns.resolved(value);
  } catch (error) {
    return patterns.rejected(error);
  }
}

/**
 * Match function for HTTP status codes
 */
export function matchHttpStatus(
  status: number,
  patterns: {
    success?: (status: number) => any;
    clientError?: (status: number) => any;
    serverError?: (status: number) => any;
    fallback?: (status: number) => any;
  }
): any {
  if (status >= 200 && status < 300) {
    return patterns.success?.(status) ?? patterns.fallback?.(status);
  } else if (status >= 400 && status < 500) {
    return patterns.clientError?.(status) ?? patterns.fallback?.(status);
  } else if (status >= 500) {
    return patterns.serverError?.(status) ?? patterns.fallback?.(status);
  } else {
    return patterns.fallback?.(status);
  }
}

/**
 * Match function for environment types
 */
export function matchEnvironment<T>(patterns: {
  development: () => T;
  test: () => T;
  production: () => T;
}): T {
  const env = process.env.NODE_ENV || "development";

  switch (env) {
    case "development":
      return patterns.development();
    case "test":
      return patterns.test();
    case "production":
      return patterns.production();
    default:
      return patterns.development();
  }
}

/**
 * Match function for device types
 */
export function matchDevice<T>(
  userAgent: string,
  patterns: {
    mobile: () => T;
    tablet: () => T;
    desktop: () => T;
    fallback?: () => T;
  }
): T {
  const ua = userAgent.toLowerCase();

  if (/mobile|android|iphone|ipad|phone/i.test(ua)) {
    return patterns.mobile();
  } else if (/tablet|ipad/i.test(ua)) {
    return patterns.tablet();
  } else if (/desktop|windows|mac|linux/i.test(ua)) {
    return patterns.desktop();
  } else {
    return patterns.fallback?.() ?? patterns.desktop();
  }
}

/**
 * Match function for screen sizes
 */
export function matchScreenSize<T>(
  width: number,
  patterns: {
    mobile: () => T;
    tablet: () => T;
    desktop: () => T;
    fallback?: () => T;
  }
): T {
  if (width < 768) {
    return patterns.mobile();
  } else if (width < 1024) {
    return patterns.tablet();
  } else {
    return patterns.desktop();
  }
}

/**
 * Match function for boolean conditions
 */
export function matchBoolean<T>(
  condition: boolean,
  patterns: {
    true: () => T;
    false: () => T;
  }
): T {
  return condition ? patterns.true() : patterns.false();
}

/**
 * Match function for number ranges
 */
export function matchRange<T>(
  value: number,
  patterns: Array<{
    range: [number, number];
    handler: (value: number) => T;
  }>,
  fallback?: (value: number) => T
): T {
  for (const pattern of patterns) {
    const [min, max] = pattern.range;
    if (value >= min && value <= max) {
      return pattern.handler(value);
    }
  }

  if (fallback) {
    return fallback(value);
  }

  throw new Error(`No matching range found for value: ${value}`);
}

/**
 * Match function for string patterns
 */
export function matchString<T>(
  value: string,
  patterns: Array<{
    pattern: string | RegExp;
    handler: (value: string) => T;
  }>,
  fallback?: (value: string) => T
): T {
  for (const pattern of patterns) {
    if (typeof pattern.pattern === "string") {
      if (value === pattern.pattern) {
        return pattern.handler(value);
      }
    } else {
      if (pattern.pattern.test(value)) {
        return pattern.handler(value);
      }
    }
  }

  if (fallback) {
    return fallback(value);
  }

  throw new Error(`No matching pattern found for string: ${value}`);
}
