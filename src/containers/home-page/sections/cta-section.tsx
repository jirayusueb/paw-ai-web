"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import HOME_PAW_AI_LOGO from "@/assets/media/image/home-paw-ai-logo.png";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Player from "next-video/player";
import type { StaticImageData } from "next/image";

// Types
interface CTAContent {
  logo: StaticImageData;
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
}

interface CTASectionProps {
  content?: Partial<CTAContent>;
  onSubmit?: (email: string) => void;
  className?: string;
}

// Constants
const DEFAULT_CONTENT: CTAContent = {
  logo: HOME_PAW_AI_LOGO,
  title: "Spin up your first GPU node now.",
  description: "Get started building the future of AI.",
  inputPlaceholder: "Enter your email",
  buttonText: "Try Demo !",
};

const INTERSECTION_OPTIONS = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px",
} as const;

// Sub-components
function VideoBackground({ playerRef }: { playerRef: React.RefObject<any> }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Player
        ref={playerRef}
        src="/videos/bg-space-2.webm"
        className="w-full h-full object-cover rounded-2xl"
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
      <div
        className="absolute inset-0 bg-purple-haze opacity-20 rounded-2xl"
        aria-hidden="true"
      />
    </div>
  );
}

function CTAContent({ content }: { content: CTAContent }) {
  return (
    <header className="flex flex-col items-center gap-8 md:gap-10 text-center relative z-10">
      <Image
        alt="Paw AI logo"
        src={content.logo}
        className="w-auto h-20"
        priority
      />
      <div className="flex flex-col gap-4 text-center">
        <h2 id="cta-title" className="font-semibold text-3xl md:text-5xl">
          {content.title}
        </h2>
        <p className="text-sm md:text-2xl text-muted-foreground">
          {content.description}
        </p>
      </div>
    </header>
  );
}

function EmailForm({
  placeholder,
  buttonText,
  onSubmit,
}: {
  placeholder: string;
  buttonText: string;
  onSubmit: (email: string) => void;
}) {
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const email = formData.get("email") as string;

      if (email && email.trim()) {
        onSubmit(email.trim());
      }
    },
    [onSubmit]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-2 mt-12 md:mt-16 flex items-center justify-center sm:flex-row w-full relative z-10"
      noValidate
    >
      <div className="relative w-[300px]">
        <input
          name="email"
          type="email"
          placeholder={placeholder}
          required
          className="w-full bg-white rounded-md h-10 px-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#602A9A] focus:ring-opacity-50"
          aria-label="Email address"
        />
        <Button
          className="absolute right-1 translate-y-1 bg-[#602A9A] text-white hover:bg-[#4A1F7A] transition-colors"
          size="sm"
          type="submit"
          aria-label="Submit email"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

// Main component
export function CTASection({ content, onSubmit, className }: CTASectionProps) {
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

  // Handle form submission
  const handleSubmit = useCallback(
    (email: string) => {
      onSubmit?.(email);
    },
    [onSubmit]
  );

  return (
    <section
      ref={sectionRef}
      className={`container mx-auto flex flex-col items-center py-10 md:py-40 px-4 lg:px-0 ${
        className || ""
      }`}
      aria-labelledby="cta-title"
    >
      <div className="relative border border-[#602A9A29] rounded-2xl py-15 px-4 md:py-30 bg-purple-haze w-full overflow-hidden">
        <VideoBackground playerRef={playerRef} />

        <BorderBeam
          size={500}
          duration={8}
          colorFrom="#fff"
          colorTo="#e5e5e5"
          borderWidth={2}
          className="opacity-60"
        />

        <CTAContent content={mergedContent} />

        <EmailForm
          placeholder={mergedContent.inputPlaceholder}
          buttonText={mergedContent.buttonText}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
