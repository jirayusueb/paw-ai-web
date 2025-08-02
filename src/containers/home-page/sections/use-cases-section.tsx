import { FeatureCard } from "../components/feature-card";
import {
  AI_TRAINING_ICON,
  DATA_PROCESSING_ICON,
  RAPID_PROTOTYPE_ICON,
  MEDIA_PROCESSING_ICON,
  REAL_TIME_ICON,
  LAUNCH_CONTROL_ICON,
} from "@/assets/media/image/icon/use-case";
import type { StaticImageData } from "next/image";

// Types
interface UseCaseItem {
  title: string;
  description: string;
  src: StaticImageData;
}

interface UseCasesContent {
  label: string;
  title: string;
  description: string;
  useCases: UseCaseItem[];
}

interface UseCasesSectionProps {
  content?: Partial<UseCasesContent>;
}

// Constants
const DEFAULT_CONTENT: UseCasesContent = {
  label: "Use Cases",
  title: "Compute for AI. Built for You.",
  description: "Seamless access to powerful, scalable compute.",
  useCases: [
    {
      title: "AI Model Training",
      description:
        "Fine-tune models at scale with fewer steps and more control for optimal performance.",
      src: AI_TRAINING_ICON,
    },
    {
      title: "Real-Time Inference",
      description:
        "Deploy scalable AI services with lightning-fast response times for seamless experiences.",
      src: REAL_TIME_ICON,
    },
    {
      title: "Rapid Prototyping",
      description:
        "Quickly build and test prototypes using ready-made dev environments for faster iteration.",
      src: RAPID_PROTOTYPE_ICON,
    },
    {
      title: "Media Processing",
      description:
        "Accelerate rendering and processing of videos, images, and animations.",
      src: MEDIA_PROCESSING_ICON,
    },
    {
      title: "Data Research",
      description:
        "Gather, analyze, and interpret data for actionable, impactful results today fast.",
      src: DATA_PROCESSING_ICON,
    },
    {
      title: "Launch & Control",
      description:
        "Launch and control smarter training with fast setup and flexible customization.",
      src: LAUNCH_CONTROL_ICON,
    },
  ],
};

export function UseCasesSection({ content }: UseCasesSectionProps) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section
      className="container mx-auto py-10 md:py-40 px-4 lg:px-0"
      aria-labelledby="use-cases-title"
    >
      <header className="flex flex-col md:gap-10 gap-6 text-center">
        <p className="text-lg md:text-xl font-medium">{c.label}</p>
        <div className="flex flex-col gap-2 md:gap-4 text-center">
          <h2
            id="use-cases-title"
            className="font-semibold text-2xl md:text-5xl z-10"
          >
            {c.title}
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground">
            {c.description}
          </p>
        </div>
      </header>

      <ul className="mt-6 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 list-none p-0">
        {c.useCases.map((useCase, index) => (
          <li key={index}>
            <article className="h-[200px] md:h-[300px]">
              <FeatureCard {...useCase} />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
