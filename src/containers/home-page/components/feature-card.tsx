import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  src: string | { src: string; width: number; height: number };
}

export function FeatureCard({ title, description, src }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border p-8 bg-purple-haze border-purple-gradient">
      <div className="flex size-[100px] items-center justify-center">
        <Image src={src} alt={title} width={100} height={100} />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <p className="text-lg">{title}</p>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
