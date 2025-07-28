import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  ChevronRight,
  ChevronsLeftRight,
  Globe,
  Lock,
} from "lucide-react";
import NVIDIA_LOGO from "@/assets/media/svg/nvidia-logo.svg";
import Image from "next/image";

// Types
interface PricingSpec {
  label: string;
  value: string;
}

interface PricingOption {
  type: string;
  price: string;
  icon: React.ReactNode;
}

interface PricingCardData {
  brand: string;
  model: string;
  logo: string;
  specs: PricingSpec[];
  options: PricingOption[];
}

interface PricingContent {
  title: string;
  description: string;
  ctaText: string;
  cards: PricingCardData[];
}

interface PricingSectionProps {
  content?: Partial<PricingContent>;
}

// Constants
const DEFAULT_CONTENT: PricingContent = {
  title: "Flexible Pricing",
  description: "Pay only for what you use. No hidden fees.",
  ctaText: "See all GPUs",
  cards: [
    {
      brand: "Nvidia",
      model: "RTX 5090",
      logo: NVIDIA_LOGO,
      specs: [
        { label: "VRAM", value: "80GB" },
        { label: "RAM", value: "120GB" },
        { label: "GPU", value: "16vCPUs" },
      ],
      options: [
        {
          type: "Secure Cloud",
          price: "$2.39/hr",
          icon: <Lock className="size-4" />,
        },
        {
          type: "Community Cloud",
          price: "$1.99/hr",
          icon: <Globe className="size-4" />,
        },
      ],
    },
  ],
};

function PricingCard({ card }: { card: PricingCardData }) {
  return (
    <article className="rounded-2xl p-6 flex flex-col gap-4 bg-purple-fade border-purple-glow">
      <header className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Image src={card.logo} alt={`${card.brand} logo`} />
          <h3 className="font-semibold text-lg">
            {card.brand} {card.model}
          </h3>
        </div>
        <ChevronRight size={16} />
      </header>

      <Separator />

      <dl className="flex flex-col gap-2">
        {card.specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center">
            <dt className="text-sm font-light">{spec.label}</dt>
            <dd className="text-sm">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <Separator />

      <dl className="flex flex-col gap-2">
        {card.options.map((option, index) => (
          <div key={index} className="flex justify-between items-center">
            <dt className="text-sm flex items-center gap-2">
              {option.icon}
              <span className="font-light">{option.type}</span>
            </dt>
            <dd className="text-sm">{option.price}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function PricingSection({ content }: PricingSectionProps) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section
      className="container mx-auto flex flex-col items-center py-10 md:py-40 px-4 md:px-0"
      aria-labelledby="pricing-title"
    >
      <header className="flex flex-col items-center gap-6 md:gap-10 text-center">
        <div className="flex flex-col gap-4 text-center">
          <h2 id="pricing-title" className="font-semibold text-3xl md:text-5xl">
            {c.title}
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground">
            {c.description}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mt-10 md:mt-20">
        {Array.from({ length: 8 }, (_, index) => (
          <PricingCard key={index} card={c.cards[0]} />
        ))}
      </div>

      <div className="w-full md:mt-20 mt-10 flex justify-center">
        <button
          type="button"
          className="px-4 py-3 bg-glass border-glass rounded-md flex items-center gap-2 h-10 cursor-pointer text-sm hover:bg-glass/80 transition-colors"
        >
          {c.ctaText}
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
