import { Gpu } from 'lucide-react';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function UseCaseCard({ title, description, icon }: UseCaseCardProps) {
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

export function UseCasesSection() {
  const useCases = [
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
        <p>Use Cases</p>
        <div className="flex flex-col gap-4 text-center">
          <p className="font-semibold text-5xl">
            Compute for AI. Built for You.
          </p>
          <p className="text-2xl text-muted-foreground">
            Seamless access to powerful, scalable compute.
          </p>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </div>
    </div>
  );
}
