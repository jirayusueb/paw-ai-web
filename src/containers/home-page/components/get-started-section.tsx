import Image from 'next/image';
import HOME_GPU from '@/assets/media/image/home-gpu.png';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
}

function StepItem({ number, title, description }: StepItemProps) {
  return (
    <li className="flex gap-4">
      <p>{number}</p>
      <div className="flex flex-col gap-4">
        <p className="text-lg">{title}</p>
        <p className="text-pretty font-light text-muted-foreground">
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
      title: 'Pick a GPU',
      description:
        'Pick from a variety of high-performance GPUs like A100, 4090, or L40S to match your workload needs.',
    },
    {
      number: 2,
      title: 'Launch your workspace',
      description:
        'Start with a prebuilt template or custom container. Your workspace is ready in seconds, with no setup.',
    },
    {
      number: 3,
      title: 'Connect & Run',
      description:
        'Access your environment via terminal or API, run code, and scale easily as your needs grow.',
    },
  ];

  return (
    <div className="container mx-auto py-40">
      <div className="flex flex-col gap-10 text-center">
        <p>Get started</p>
        <div className="flex flex-col gap-4 text-center">
          <p className="font-semibold text-5xl">Get Started in Seconds</p>
          <p className="text-2xl text-muted-foreground">
            Launch powerful GPU environments with zero setup.
          </p>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center gap-6">
        <Image alt="home gpu" className="h-[400px] w-auto" src={HOME_GPU} />
        <ul className="flex flex-col gap-6">
          {steps.map((step) => (
            <StepItem key={step.number} {...step} />
          ))}
        </ul>
      </div>
    </div>
  );
}
