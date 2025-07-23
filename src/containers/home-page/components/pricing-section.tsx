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

function PricingCard() {
  return (
    <div className="rounded-2xl p-6 flex flex-col gap-4 border">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Image src={NVIDIA_LOGO} alt="nvidia logo" />
          <p className="font-semibold text-lg">Nvidia RTX 5090</p>
        </div>
        <div>
          <ChevronRight size={16} />
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-sm flex items-center gap-2">
            <span className="font-light">VRAM</span>
          </div>
          <div className="text-sm">80GB</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm flex items-center gap-2">
            <span className="font-light">RAM</span>
          </div>
          <div className="text-sm">120GB</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm flex items-center gap-2">
            <span className="font-light">GPU</span>
          </div>
          <div className="text-sm">16vCPUs</div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-sm flex items-center gap-2">
            <Lock className="size-4" />
            <span className="font-light">Secure Cloud</span>
          </div>
          <div className="text-sm">$2.39/hr</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm flex items-center gap-2">
            <Globe className="size-4" />
            <span className="font-light">Community Cloud</span>
          </div>
          <div className="text-sm">$1.99/hr</div>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
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
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}
