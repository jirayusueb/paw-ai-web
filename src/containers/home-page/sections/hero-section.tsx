"use client";

import { useRef, useEffect, useCallback } from "react";
import HERO_BANNER from "@/assets/media/image/hero-website.png";
import SHADE_BLACK from "@/assets/media/image/shade-black.png";
import { IconAsset } from "@/assets/media/svg/icon";
import { promoterIcons } from "@/assets/media/svg/home-promotor";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Player from "next-video/player";
import Image from "next/image";

// Types
interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

interface HeroSectionProps {
  content?: Partial<HeroContent>;
  onGetStarted?: () => void;
  className?: string;
}

// Constants
const DEFAULT_CONTENT: HeroContent = {
  title: "From Idea to AI Power",
  subtitle: "Deploy in Seconds",
  description: "Scale your compute. Simplify your workflow. Deploy instantly.",
  ctaText: "Get Started",
};

const INTERSECTION_OPTIONS = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
} as const;

// Sub-components
function VideoBackground({ playerRef }: { playerRef: React.RefObject<any> }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Player
        ref={playerRef}
        src="/videos/bg-space.webm"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
    </div>
  );
}

function PromoterImages() {
  return (
    <>
      <Image
        alt="hero promoter"
        className="absolute hidden xl:block top-[140px] left-1/2 -translate-x-[300%] h-[92px] z-10"
        src={promoterIcons.promoter4}
      />
      <Image
        alt="hero promoter"
        className="absolute hidden xl:block top-[272px] left-1/2 -translate-x-[350%] h-[92px] z-10"
        src={promoterIcons.promoter2}
      />
      <Image
        alt="hero promoter"
        className="absolute hidden xl:block top-[140px] right-1/2 translate-x-[300%] h-[92px] z-10"
        src={promoterIcons.promoter1}
      />
      <Image
        alt="hero promoter"
        className="absolute hidden xl:block top-[272px] right-1/2 translate-x-[350%] h-[92px] z-10"
        src={promoterIcons.promoter3}
      />
    </>
  );
}

function HeroContent({
  content,
  onGetStarted,
}: {
  content: HeroContent;
  onGetStarted?: () => void;
}) {
  const handleGetStarted = useCallback(() => {
    onGetStarted?.();
  }, [onGetStarted]);

  return (
    <div className="container mx-auto mt-[24px] md:mt-[200px] px-4 sm:px-0 relative z-10">
      <header className="flex flex-col items-center gap-2 md:gap-4 text-center md:text-left">
        <h1
          id="hero-title"
          className="font-semibold text-3xl md:text-5xl leading-none"
        >
          {content.title}
        </h1>
        <p className="font-semibold text-3xl text-muted-foreground md:text-5xl">
          {content.subtitle}
        </p>
        <p className="text-sm md:text-2xl text-muted-foreground">
          {content.description}
        </p>
      </header>

      <div className="mt-6 md:mt-10 flex items-center justify-center">
        <ShimmerButton onClick={handleGetStarted}>
          {content.ctaText}
          <Image src={IconAsset.rocket} alt="rocket" />
        </ShimmerButton>
      </div>

      <div className="mt-11 md:mt-20 flex items-center justify-center">
        <Image
          alt="AI-powered platform demonstration showing deployment workflow"
          src={HERO_BANNER}
          priority
          className="w-full z-10"
        />
      </div>

      <div
        className="absolute top-[80px] left-1/2 rounded-full -translate-x-1/2 w-full h-[600px] pointer-events-none z-0"
        style={{
          background: "rgba(96, 42, 154, 0.24)",
          filter: "blur(400px)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

function ShadeOverlay() {
  return (
    <Image
      alt="shade black"
      className="absolute bottom-0 left-0 h-[90px] md:h-[360px] w-full pointer-events-none z-20"
      src={SHADE_BLACK}
      aria-hidden="true"
    />
  );
}

// Main component
export function HeroSection({
  content,
  onGetStarted,
  className,
}: HeroSectionProps) {
  const mergedContent = { ...DEFAULT_CONTENT, ...content };
  const playerRef = useRef<any>(null);

  const { ref: sectionRef, isIntersecting } =
    useIntersectionObserver<HTMLElement>(INTERSECTION_OPTIONS);

  // Video playback control
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handlePlayback = async () => {
      try {
        if (isIntersecting) {
          await player.play();
        } else {
          player.pause();
        }
      } catch (error) {
        // Silently handle autoplay restrictions
        console.debug("Video playback control:", error);
      }
    };

    handlePlayback();
  }, [isIntersecting]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className || ""}`}
      aria-labelledby="hero-title"
    >
      <VideoBackground playerRef={playerRef} />
      <PromoterImages />
      <HeroContent content={mergedContent} onGetStarted={onGetStarted} />
      <ShadeOverlay />
    </section>
  );
}
