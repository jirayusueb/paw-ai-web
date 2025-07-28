import { useEffect, useState, useRef, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

interface UseIntersectionObserverReturn<T extends Element = Element> {
  ref: RefObject<T | null>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

export function useIntersectionObserver<T extends Element = Element>(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn<T> {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      {
        threshold: options.threshold ?? 0,
        rootMargin: options.rootMargin ?? "0px",
        root: options.root ?? null,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.root]);

  return { ref, isIntersecting, entry };
}
