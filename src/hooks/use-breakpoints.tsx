import {
  useBreakpoints as useBaseBreakpoints,
  useEventListener,
  useLayoutMount,
  useSafeState,
} from '@shined/react-use';
import { useEffect, useRef } from 'react';

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const;

type Breakpoints = keyof typeof BREAKPOINTS;

const currentBreakpoint = () => {
  const width = window.innerWidth;

  switch (true) {
    case width < BREAKPOINTS.sm:
      return 'sm';
    case width < BREAKPOINTS.md:
      return 'md';
    case width < BREAKPOINTS.lg:
      return 'lg';
    case width < BREAKPOINTS.xl:
      return 'xl';
    default:
      return 'xxl';
  }
};

interface BreakpointInfo {
  /**
   * Check if current breakpoint is between two breakpoints (inclusive)
   */
  between: (min: Breakpoints, max: Breakpoints) => boolean;
  /**
   * Check if current breakpoint is greater than given breakpoint
   */
  isGreater: (bp: Breakpoints) => boolean;
  /**
   * Check if current breakpoint is greater than or equal to given breakpoint
   */
  isGreaterOrEqual: (bp: Breakpoints) => boolean;
  /**
   * Check if current breakpoint is smaller than given breakpoint
   */
  isSmaller: (bp: Breakpoints) => boolean;
  /**
   * Check if current breakpoint is smaller than or equal to given breakpoint
   */
  isSmallerOrEqual: (bp: Breakpoints) => boolean;
  /**
   * Current window width
   */
  width: number;
  /**
   * Current window height
   */
  height: number;
  /**
   * Boolean flags for common breakpoint checks
   */
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLg: boolean;
  isDesktopXl: boolean;
}

interface UseBreakpointsOptions {
  /**
   * Callback function that gets called when the breakpoint changes
   * @param breakpoint - The new breakpoint value
   * @param info - Additional breakpoint information and utility functions
   */
  onChange?: (breakpoint: Breakpoints, info: BreakpointInfo) => void;
}

// Helper function to create breakpoint info (moved outside component)
const createBreakpointInfo = (currentBp: Breakpoints): BreakpointInfo => {
  const breakpointKeys = Object.keys(BREAKPOINTS) as Breakpoints[];
  const currentIndex = breakpointKeys.indexOf(currentBp);

  return {
    between: (min: Breakpoints, max: Breakpoints) => {
      const minIndex = breakpointKeys.indexOf(min);
      const maxIndex = breakpointKeys.indexOf(max);
      return currentIndex >= minIndex && currentIndex <= maxIndex;
    },
    isGreater: (bp: Breakpoints) => {
      const bpIndex = breakpointKeys.indexOf(bp);
      return currentIndex > bpIndex;
    },
    isGreaterOrEqual: (bp: Breakpoints) => {
      const bpIndex = breakpointKeys.indexOf(bp);
      return currentIndex >= bpIndex;
    },
    isSmaller: (bp: Breakpoints) => {
      const bpIndex = breakpointKeys.indexOf(bp);
      return currentIndex < bpIndex;
    },
    isSmallerOrEqual: (bp: Breakpoints) => {
      const bpIndex = breakpointKeys.indexOf(bp);
      return currentIndex <= bpIndex;
    },
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: currentBp === 'sm',
    isTablet: currentBp === 'md',
    isDesktop: currentBp === 'lg',
    isDesktopLg: currentBp === 'xl',
    isDesktopXl: currentBp === 'xxl',
  };
};

const getInitialBreakpoint = (): Breakpoints => {
  if (typeof window === 'undefined') {
    // Default to 'sm' or whatever makes sense for your app
    return 'sm';
  }
  return currentBreakpoint();
};

export function useBreakpoints(options?: UseBreakpointsOptions) {
  const { onChange } = options || {};
  const [breakpoint, setBreakpoint] =
    useSafeState<Breakpoints>(getInitialBreakpoint);
  const baseBreakpoints = useBaseBreakpoints(BREAKPOINTS);
  const previousBreakpoint = useRef<Breakpoints>(breakpoint);

  const updateState = () => {
    const newBreakpoint = currentBreakpoint();
    setBreakpoint(newBreakpoint);
  };

  useLayoutMount(updateState);

  useEventListener(() => window, 'resize', updateState);

  // Call onChange when breakpoint changes
  useEffect(() => {
    if (onChange && breakpoint !== previousBreakpoint.current) {
      const info = createBreakpointInfo(breakpoint);
      onChange(breakpoint, info);
      previousBreakpoint.current = breakpoint;
    }
  }, [breakpoint, onChange]);

  return {
    breakpoint,
    isMobile: breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg',
    isDesktopLg: breakpoint === 'xl',
    isDesktopXl: breakpoint === 'xxl',
    ...baseBreakpoints,
  };
}
