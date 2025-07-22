import Image from 'next/image';
import HERO_BANNER from '@/assets/media/image/hero-website.png';
import SHADE_BLACK from '@/assets/media/image/shade-black.png';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="container mx-auto mt-[200px] flex flex-col">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center leading-none">
            <p className="font-semibold text-5xl">From Idea to AI Power</p>
            <p className="font-semibold text-5xl text-muted-foreground">
              Deploy in Seconds
            </p>
          </div>
          <p className="text-2xl text-muted-foreground">
            Scale your compute. Simplify your workflow. Deploy instantly.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Button variant="outline">Get Started</Button>
        </div>
        <div className="mt-20 flex items-center justify-center">
          <Image alt="hero banner" src={HERO_BANNER} />
        </div>
      </div>
      <Image
        alt="hero banner"
        className="absolute bottom-0 left-0 h-[360px] w-full"
        src={SHADE_BLACK}
      />
    </div>
  );
}
