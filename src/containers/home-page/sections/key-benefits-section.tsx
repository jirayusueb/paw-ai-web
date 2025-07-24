import { FeatureCard } from "../components/feature-card";
import {
  PROCESSOR_ICON,
  COST_EFFECTIVE_ICON,
  DEPLOYMENT_ICON,
  SCALABLE_ICON,
  SCALABLE_ALT_ICON,
} from "@/assets/media/image/icon/feature";

export function KeyBenefitsSection() {
  const benefits = [
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
      <div className="mt-20 flex flex-col gap-6">
        <div className="flex justify-center gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <FeatureCard key={index} {...benefit} />
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {benefits.slice(3, 5).map((benefit, index) => (
            <FeatureCard key={index + 3} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
