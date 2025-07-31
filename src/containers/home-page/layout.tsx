import type { PropsWithChildren } from "react";
import Image from "next/image";
import BG_HERO from "@/assets/media/image/bg-hero.png";
import SHADE_BLUR from "@/assets/media/image/shade-blur.png";
import { Navbar } from "@/containers/home-page/components/navbar";
import { Footer } from "@/containers/home-page/components/footer";
import { promoterIcons } from "@/assets/media/svg/home-promotor";
import { BgStarSpace, homePageIcons } from "@/assets/media/svg/home-page";

export function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen max-w-screen bg-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[140px] left-1/2 -translate-x-[300%] h-[92px] z-10"
        src={promoterIcons.promoter4}
      />
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[272px] left-1/2 -translate-x-[350%] h-[92px] z-10"
        src={promoterIcons.promoter2}
      />
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[140px] right-1/2 translate-x-[300%] h-[92px] z-10"
        src={promoterIcons.promoter1}
      />
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[272px] right-1/2 translate-x-[350%] h-[92px] z-10"
        src={promoterIcons.promoter3}
      />
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
        className="absolute w-auto h-[400px] top-[1200px] left-1/2 -translate-x-[200%] z-30"
        aria-hidden="true"
      />
      <Image
        src={homePageIcons.iconStar2}
        alt="icon star 1"
        className="absolute w-auto h-[400px] top-[2400px] right-1/2 translate-x-[150%]"
        aria-hidden="true"
      />
      {children}
      <Footer />
    </div>
  );
}
