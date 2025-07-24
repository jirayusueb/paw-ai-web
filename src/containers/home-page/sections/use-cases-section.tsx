import { FeatureCard } from "../components/feature-card";
import {
  AI_TRAINING_ICON,
  DATA_PROCESSING_ICON,
  RAPID_PROTOTYPE_ICON,
  MEDIA_PROCESSING_ICON,
  REAL_TIME_ICON,
  LAUNCH_CONTROL_ICON,
} from "@/assets/media/image/icon/use-case";

export function UseCasesSection() {
  const useCases = [
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
          <FeatureCard key={index} {...useCase} />
        ))}
      </div>
    </div>
  );
}
