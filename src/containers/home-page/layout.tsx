import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import BG_HERO from '@/assets/media/image/bg-hero.png';
import SHADE_BLUR from '@/assets/media/image/shade-blur.png';
import { Navbar } from '@/containers/home-page/components/navbar';

export function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen w-screen bg-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Image
        alt="shade blur"
        className="-translate-x-1/2 absolute top-0 left-1/2 size-[777px]"
        src={SHADE_BLUR}
      />
      <Image
        alt="hero banner"
        className="-z-10 absolute top-0 left-0 w-full"
        src={BG_HERO}
      />
      {children}
    </div>
  );
}
