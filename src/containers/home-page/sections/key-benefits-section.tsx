import { FeatureCard } from "../components/feature-card";
import {
  PROCESSOR_ICON,
  COST_EFFECTIVE_ICON,
  DEPLOYMENT_ICON,
  SCALABLE_ICON,
  SCALABLE_ALT_ICON,
} from "@/assets/media/image/icon/feature";
import type { StaticImageData } from "next/image";

// Types
interface BenefitItem {
  title: string;
  description: string;
  src: StaticImageData;
}

interface KeyBenefitsContent {
  label: string;
  title: string;
  description: string;
  benefits: BenefitItem[];
}

interface KeyBenefitsSectionProps {
  content?: Partial<KeyBenefitsContent>;
}

// Constants
const DEFAULT_CONTENT: KeyBenefitsContent = {
  label: "Key Benefits",
  title: "The Smarter Way to Compute",
  description:
    "Fast, flexible, and affordable compute — built for AI, data, and high-performance tasks.",
  benefits: [
    {
      title: "High Performance",
      description: "Access cutting-edge GPUs and CPUs for maximum performance",
      src: PROCESSOR_ICON,
    },
    {
      title: "Lightning Fast",
      description: "Ultra-fast processing speeds for time-sensitive workloads",
      src: SCALABLE_ICON,
    },
    {
      title: "Cost Effective",
      description:
        "No long-term commitments, only pay for the exact compute time you actually use.",
      src: COST_EFFECTIVE_ICON,
    },
    {
      title: "Easy Integration",
      description:
        "Seamless integration with your existing workflows and tools",
      src: DEPLOYMENT_ICON,
    },
    {
      title: "Rapid Deployment",
      description:
        "Deploy your applications quickly with our streamlined process",
      src: SCALABLE_ALT_ICON,
    },
  ],
};

export function KeyBenefitsSection({ content }: KeyBenefitsSectionProps) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section
      className="container mx-auto py-10 md:py-40 px-4 lg:px-0"
      aria-labelledby="benefits-title"
    >
      <header className="flex flex-col gap-6 md:gap-10 text-center">
        <p className="text-lg md:text-xl font-medium">{c.label}</p>
        <div className="flex flex-col gap-4 text-center">
          <h2
            id="benefits-title"
            className="font-semibold text-2xl md:text-5xl"
          >
            {c.title}
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground text-balance">
            {c.description}
          </p>
        </div>
      </header>

      <ul className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 list-none p-0">
        {c.benefits.map((benefit, index) => (
          <li
            key={index}
            className={`
              ${index === 4 ? "col-span-2 md:col-span-1" : ""}
            `}
          >
            <article className="h-[192px] md:h-[270px]">
              <FeatureCard {...benefit} />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
