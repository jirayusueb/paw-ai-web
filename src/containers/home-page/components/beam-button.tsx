"use client";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends PropsWithChildren<React.ComponentProps<"button">> {
  size?: "default" | "sm" | "lg" | "icon";
  /**
   * Size of the border beam in pixels
   * @default 50
   */
  beamSize?: number;
  /**
   * Duration of the border beam animation in seconds
   * @default 6
   */
  duration?: number;
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number;
  /**
   * Starting color of the border beam gradient
   * @default "#ffaa40"
   */
  colorFrom?: string;
  /**
   * Ending color of the border beam gradient
   * @default "#9c40ff"
   */
  colorTo?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Initial offset position (0-100)
   * @default 0
   */
  initialOffset?: number;
  /**
   * Width of the border beam
   * @default 2
   */
  borderWidth?: number;
  /**
   * Whether to show beam effect on hover only
   * @default false
   */
  hoverOnly?: boolean;
  /**
   * Additional beam effect intensity
   * @default "medium"
   */
  intensity?: "low" | "medium" | "high";
}

export function BeamButton({
  children,
  className,
  size,
  beamSize = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#FFFFFF",
  colorTo = "#e5e5e5",
  reverse = false,
  initialOffset = 0,
  borderWidth = 2,
  hoverOnly = false,
  intensity = "medium",
  ...props
}: ShimmerButtonProps) {
  const intensityClasses = {
    low: "opacity-30",
    medium: "opacity-60",
    high: "opacity-90",
  };

  const beamOpacity = hoverOnly
    ? "opacity-0 group-hover:opacity-100"
    : intensityClasses[intensity];

  return (
    <div className="relative group rounded-md">
      <Button
        variant="outline"
        size={size}
        className={cn(
          "relative z-10",
          // "hover:scale-[1.02] transition-all duration-300 ease-out",
          "hover:shadow-lg hover:shadow-white/10",
          "border-white/20 hover:border-white/40",
          "bg-black/20 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {children}
      </Button>

      <BorderBeam
        size={beamSize}
        duration={duration}
        delay={delay}
        colorFrom={colorFrom}
        colorTo={colorTo}
        reverse={reverse}
        initialOffset={initialOffset}
        borderWidth={borderWidth}
        className={cn(
          "transition-opacity duration-500 ease-in-out rounded-md",
          beamOpacity
        )}
      />
    </div>
  );
}
