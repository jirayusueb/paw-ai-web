import Image from "next/image";
import HOME_GPU from "@/assets/media/image/home-gpu.png";

interface StepItemProps {
  number: number;
  title: string;
  description: string;
}

function StepItem({ number, title, description }: StepItemProps) {
  return (
    <li className="flex gap-4">
      <span className="font-semibold flex-shrink-0 text-base md:text-xl bg-[#602A9A99] rounded-full text-white size-6 flex items-center justify-center">
        {number}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="md:text-lg text-sm font-medium">{title}</h3>
        <p className="text-pretty text-xs md:text-base font-light text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}

export function GetStartedSection() {
  const steps = [
    {
      number: 1,
      title: "Pick a GPU",
      description:
        "Pick from a variety of high-performance GPUs like A100, 4090, or L40S to match your workload needs.",
    },
    {
      number: 2,
      title: "Launch your workspace",
      description:
        "Start with a prebuilt template or custom container. Your workspace is ready in seconds, with no setup.",
    },
    {
      number: 3,
      title: "Connect & Run",
      description:
        "Access your environment via terminal or API, run code, and scale easily as your needs grow.",
    },
  ];

  return (
    <section
      className="container mx-auto md:py-40 py-10 px-4 md:px-0"
      aria-labelledby="get-started-title"
    >
      <header className="flex flex-col gap-10 text-center">
        <p className="text-lg md:text-xl font-medium">Get started</p>
        <div className="flex flex-col gap-4 text-center">
          <h2
            id="get-started-title"
            className="font-semibold text-2xl md:text-5xl"
          >
            Get Started in Seconds
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground">
            Launch powerful GPU environments with zero setup.
          </p>
        </div>
      </header>

      <div className="mt-6 md:mt-20 flex items-center justify-center gap-6 flex-col md:flex-row">
        <Image
          alt="High-performance GPU setup interface showing deployment options"
          className="h-auto w-full md:w-auto md:h-[400px]"
          src={HOME_GPU}
        />
        <ol className="flex flex-col md:gap-6 gap-4 list-none p-0">
          {steps.map((step) => (
            <StepItem key={step.number} {...step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
