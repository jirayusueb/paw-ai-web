import type { PropsWithChildren } from "react";
import Image from "next/image";
import BG_HERO from "@/assets/media/image/bg-hero.png";
import SHADE_BLUR from "@/assets/media/image/shade-blur.png";
import { Navbar } from "@/containers/home-page/components/navbar";
import { Footer } from "@/containers/home-page/components/footer";
import { BgStarSpace, homePageIcons } from "@/assets/media/svg/home-page";

export function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen max-w-screen bg-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Image
        alt="hero banner"
        className="-z-20 absolute top-0 left-0 w-full"
        src={BG_HERO}
      />
      <Image
        src={BgStarSpace}
        alt="bg star space"
        className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />
      <Image
        src={homePageIcons.iconStar1}
        alt="icon star 1"
        className="absolute w-auto h-[110px] top-[500px] lg:h-[400px] md:hidden lg:block md:top-[1200px] left-1/2 -translate-x-[200%] z-30"
        aria-hidden="true"
      />
      <Image
        src={homePageIcons.iconStar2}
        alt="icon star 2"
        className="absolute w-auto h-[100px] top-[1400px] md:h-[220px] lg:h-[400px] md:top-[2200px] lg:top-[2400px] right-1/2 translate-x-[150%] md:translate-x-[130%] lg:translate-x-[150%]"
        aria-hidden="true"
      />
      {children}
      <Footer />
    </div>
  );
}
