/**
 * Result type for type-safe error handling
 */
export type Result<T, E = Error> = Ok<T, E> | Err<T, E>;

/**
 * Success result type
 */
export class Ok<T, E> {
  readonly _tag = "ok" as const;
  readonly _type!: T;
  readonly _error!: E;

  constructor(readonly value: T) {}

  /**
   * Check if this is a success result
   */
  isOk(): this is Ok<T, E> {
    return true;
  }

  /**
   * Check if this is an error result
   */
  isErr(): this is Err<T, E> {
    return false;
  }

  /**
   * Map the success value
   */
  map<U>(fn: (value: T) => U): Result<U, E> {
    return new Ok(fn(this.value));
  }

  /**
   * Map the error value (no-op for Ok)
   */
  mapErr<F>(_fn: (error: E) => F): Result<T, F> {
    return new Ok(this.value) as Result<T, F>;
  }

  /**
   * Flat map the success value
   */
  flatMap<U>(fn: (value: T) => Result<U, E>): Result<U, E> {
    return fn(this.value);
  }

  /**
   * Get the value or throw if error
   */
  unwrap(): T {
    return this.value;
  }

  /**
   * Get the value or return default
   */
  unwrapOr(_default: T): T {
    return this.value;
  }

  /**
   * Get the value or compute default
   */
  unwrapOrElse(_fn: (error: E) => T): T {
    return this.value;
  }

  /**
   * Get the error (throws for Ok)
   */
  unwrapErr(): never {
    throw new Error("Called unwrapErr on Ok result");
  }

  /**
   * Match on the result type
   */
  match<U>(onOk: (value: T) => U, onErr: (error: E) => U): U {
    return onOk(this.value);
  }

  /**
   * Execute side effect on success
   */
  tap(fn: (value: T) => void): Result<T, E> {
    fn(this.value);
    return this;
  }

  /**
   * Execute side effect on error (no-op for Ok)
   */
  tapErr(_fn: (error: E) => void): Result<T, E> {
    return this;
  }
}

/**
 * Error result type
 */
export class Err<T, E> {
  readonly _tag = "err" as const;
  readonly _type!: T;
  readonly _error!: E;

  constructor(readonly error: E) {}

  /**
   * Check if this is a success result
   */
  isOk(): this is Ok<T, E> {
    return false;
  }

  /**
   * Check if this is an error result
   */
  isErr(): this is Err<T, E> {
    return true;
  }

  /**
   * Map the success value (no-op for Err)
   */
  map<U>(_fn: (value: T) => U): Result<U, E> {
    return new Err(this.error) as Result<U, E>;
  }

  /**
   * Map the error value
   */
  mapErr<F>(fn: (error: E) => F): Result<T, F> {
    return new Err(fn(this.error));
  }

  /**
   * Flat map the success value (no-op for Err)
   */
  flatMap<U>(_fn: (value: T) => Result<U, E>): Result<U, E> {
    return new Err(this.error) as Result<U, E>;
  }

  /**
   * Get the value or throw if error
   */
  unwrap(): never {
    throw this.error instanceof Error
      ? this.error
      : new Error(String(this.error));
  }

  /**
   * Get the value or return default
   */
  unwrapOr(defaultValue: T): T {
    return defaultValue;
  }

  /**
   * Get the value or compute default
   */
  unwrapOrElse(fn: (error: E) => T): T {
    return fn(this.error);
  }

  /**
   * Get the error
   */
  unwrapErr(): E {
    return this.error;
  }

  /**
   * Match on the result type
   */
  match<U>(_onOk: (value: T) => U, onErr: (error: E) => U): U {
    return onErr(this.error);
  }

  /**
   * Execute side effect on success (no-op for Err)
   */
  tap(_fn: (value: T) => void): Result<T, E> {
    return this;
  }

  /**
   * Execute side effect on error
   */
  tapErr(fn: (error: E) => void): Result<T, E> {
    fn(this.error);
    return this;
  }
}

/**
 * Create a success result
 */
export function ok<T, E = Error>(value: T): Result<T, E> {
  return new Ok(value);
}

/**
 * Create an error result
 */
export function err<T, E = Error>(error: E): Result<T, E> {
  return new Err(error);
}

/**
 * Wrap a synchronous function that might throw
 */
export function safe<T, E = Error>(
  fn: () => T,
  errorHandler?: (error: unknown) => E
): Result<T, E> {
  try {
    const value = fn();
    return ok(value);
  } catch (error) {
    const mappedError = errorHandler ? errorHandler(error) : (error as E);
    return err(mappedError);
  }
}

/**
 * Wrap an asynchronous function that might throw
 */
export async function safeAsync<T, E = Error>(
  fn: () => Promise<T>,
  errorHandler?: (error: unknown) => E
): Promise<Result<T, E>> {
  try {
    const value = await fn();
    return ok(value);
  } catch (error) {
    const mappedError = errorHandler ? errorHandler(error) : (error as E);
    return err(mappedError);
  }
}

/**
 * Utility functions for working with results
 */
export const ResultUtils = {
  /**
   * Combine multiple results into a single result
   */
  combine<T extends readonly unknown[], E>(results: {
    [K in keyof T]: Result<T[K], E>;
  }): Result<T, E> {
    const values: unknown[] = [];

    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (result.isErr()) {
        return err(result.unwrapErr());
      }
      values.push(result.unwrap());
    }

    return ok(values as unknown as T);
  },

  /**
   * Collect all results, separating successes and errors
   */
  partition<T, E>(results: Result<T, E>[]): [T[], E[]] {
    const successes: T[] = [];
    const errors: E[] = [];

    for (const result of results) {
      if (result.isOk()) {
        successes.push(result.unwrap());
      } else {
        errors.push(result.unwrapErr());
      }
    }

    return [successes, errors];
  },

  /**
   * Filter results to only successes
   */
  successes<T, E>(results: Result<T, E>[]): T[] {
    return results
      .filter((result): result is Ok<T, E> => result.isOk())
      .map((result) => result.unwrap());
  },

  /**
   * Filter results to only errors
   */
  errors<T, E>(results: Result<T, E>[]): E[] {
    return results
      .filter((result): result is Err<T, E> => result.isErr())
      .map((result) => result.unwrapErr());
  },

  /**
   * Create a result from a nullable value
   */
  fromNullable<T, E = Error>(
    value: T | null | undefined,
    error: E
  ): Result<T, E> {
    return value != null ? ok(value) : err(error);
  },

  /**
   * Create a result from a promise
   */
  fromPromise<T, E = Error>(
    promise: Promise<T>,
    errorHandler?: (error: unknown) => E
  ): Promise<Result<T, E>> {
    return safeAsync(() => promise, errorHandler);
  },
};
