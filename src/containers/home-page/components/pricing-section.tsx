import { Separator } from "@/components/ui/separator";

interface PricingCardProps {
  title: string;
  features: string[];
  specs?: string[];
  price?: string;
}

function PricingCard({ title, features, specs, price }: PricingCardProps) {
  return (
    <div className="border rounded-lg p-6 flex flex-col gap-4">
      <div className="font-semibold text-lg">{title}</div>
      {price && (
        <>
          <Separator />
          <div className="text-2xl font-bold">{price}</div>
        </>
      )}
      {specs && specs.length > 0 && (
        <>
          <Separator />
          <div className="flex flex-col gap-2">
            {specs.map((spec, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                {spec}
              </div>
            ))}
          </div>
        </>
      )}
      <Separator />
      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <div key={index} className="text-sm">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingSection() {
  const pricingPlans = [
    {
      title: "Nvidia RTX 5090",
      specs: ["Nvidia RTX 5090", "Nvidia RTX 5090", "Nvidia RTX 5090"],
      features: ["Nvidia RTX 5090", "Nvidia RTX 5090"],
    },
    {
      title: "Nvidia RTX 5090",
      features: ["Nvidia RTX 5090", "Nvidia RTX 5090", "Nvidia RTX 5090"],
    },
    {
      title: "Nvidia RTX 5090",
      features: ["Nvidia RTX 5090", "Nvidia RTX 5090", "Nvidia RTX 5090"],
    },
    {
      title: "Nvidia RTX 5090",
      features: ["Nvidia RTX 5090", "Nvidia RTX 5090", "Nvidia RTX 5090"],
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center py-40">
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-4 text-center">
          <p className="font-semibold text-5xl">Flexible Pricing</p>
          <p className="text-2xl text-muted-foreground">
            Pay only for what you use. No hidden fees.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full mt-20">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
