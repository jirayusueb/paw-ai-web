import { Gpu } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8">
      <div className="flex size-[100px] items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-4 text-center">
        <p className="text-lg">{title}</p>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function KeyBenefitsSection() {
  const benefits = [
    {
      title: 'Powerful GPUs',
      description: 'Access cutting-edge GPUs on demand for efficient training and inference',
      icon: <Gpu className="size-6" />,
    },
    {
      title: 'Powerful GPUs',
      description: 'Access cutting-edge GPUs on demand for efficient training and inference',
      icon: <Gpu className="size-6" />,
    },
    {
      title: 'Powerful GPUs',
      description: 'Access cutting-edge GPUs on demand for efficient training and inference',
      icon: <Gpu className="size-6" />,
    },
    {
      title: 'Powerful GPUs',
      description: 'Access cutting-edge GPUs on demand for efficient training and inference',
      icon: <Gpu className="size-6" />,
    },
    {
      title: 'Powerful GPUs',
      description: 'Access cutting-edge GPUs on demand for efficient training and inference',
      icon: <Gpu className="size-6" />,
    },
    {
      title: 'Powerful GPUs',
      description: 'Access cutting-edge GPUs on demand for efficient training and inference',
      icon: <Gpu className="size-6" />,
    },
  ];

  return (
    <div className="container mx-auto py-40">
      <div className="flex flex-col gap-10 text-center">
        <p>Key Benefits</p>
        <div className="flex flex-col gap-4 text-center">
          <p className="font-semibold text-5xl">The Smarter Way to Compute</p>
          <p className="text-2xl text-muted-foreground">
            Fast, flexible, and affordable compute — built for AI, data, and
            high-performance tasks.
          </p>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
}
