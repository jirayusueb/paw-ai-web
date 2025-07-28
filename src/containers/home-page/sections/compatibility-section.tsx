import Image from "next/image";
import HOME_INTEGRATION from "@/assets/media/image/home-integration.png";

// Types
interface CompatibilityContent {
  label: string;
  title: string;
  description: string;
}

interface CompatibilitySectionProps {
  content?: Partial<CompatibilityContent>;
}

// Constants
const DEFAULT_CONTENT: CompatibilityContent = {
  label: "Compatibility",
  title: "Get Seamless Integrations",
  description: "Works with tools you already use.",
};

export function CompatibilitySection({ content }: CompatibilitySectionProps) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section
      className="container mx-auto flex flex-col items-center py-10 md:py-40 px-4 md:px-0"
      aria-labelledby="compatibility-title"
    >
      <header className="flex flex-col gap-6 md:gap-10 text-center">
        <p className="text-lg md:text-xl font-medium">{c.label}</p>
        <div className="flex flex-col gap-2 md:gap-4 text-center">
          <h2
            id="compatibility-title"
            className="font-semibold text-2xl md:text-5xl"
          >
            {c.title}
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground">
            {c.description}
          </p>
        </div>
      </header>

      <Image
        alt="Integration compatibility diagram showing various tools and platforms that work seamlessly together"
        className="md:mt-20 mt-6"
        src={HOME_INTEGRATION}
      />
    </section>
  );
}
