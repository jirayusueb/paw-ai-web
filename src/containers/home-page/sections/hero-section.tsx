import Image from "next/image";
import HERO_BANNER from "@/assets/media/image/hero-website.png";
import SHADE_BLACK from "@/assets/media/image/shade-black.png";
import { Button } from "@/components/ui/button";

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
}

// Constants
const DEFAULT_CONTENT: HeroContent = {
  title: "From Idea to AI Power",
  subtitle: "Deploy in Seconds",
  description: "Scale your compute. Simplify your workflow. Deploy instantly.",
  ctaText: "Get Started",
};

export function HeroSection({ content, onGetStarted }: HeroSectionProps) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section
      className="relative container mx-auto mt-[24px] md:mt-[200px] px-4 sm:px-0"
      aria-labelledby="hero-title"
    >
      <header className="flex flex-col items-center gap-2 md:gap-4 text-center md:text-left">
        <h1 className="font-semibold text-3xl md:text-5xl leading-none">
          {c.title}
        </h1>
        <p className="font-semibold text-3xl text-muted-foreground md:text-5xl">
          {c.subtitle}
        </p>
        <p className="text-sm md:text-2xl text-muted-foreground">
          {c.description}
        </p>
      </header>

      <div className="mt-6 md:mt-10 flex items-center justify-center">
        <Button
          variant="outline"
          onClick={onGetStarted}
          size="lg"
          className="text-base px-8 py-3"
        >
          {c.ctaText}
        </Button>
      </div>

      <div className="mt-11 md:mt-20 flex items-center justify-center">
        <Image
          alt="AI-powered platform demonstration showing deployment workflow"
          src={HERO_BANNER}
          priority
          className="w-full"
        />
      </div>

      <Image
        alt="shade black"
        className="absolute bottom-0 left-0 h-[90px] md:h-[360px] w-full pointer-events-none"
        src={SHADE_BLACK}
        aria-hidden="true"
      />
    </section>
  );
}
