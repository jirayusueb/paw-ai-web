import type { PropsWithChildren } from "react";
import Image from "next/image";
import BG_HERO from "@/assets/media/image/bg-hero.png";
import SHADE_BLUR from "@/assets/media/image/shade-blur.png";
import { Navbar } from "@/containers/home-page/components/navbar";
import { Footer } from "@/containers/home-page/components/footer";
import { promoterIcons } from "@/assets/media/svg/home-promotor";

export function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen max-w-screen bg-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[140px] left-1/2 -translate-x-[300%] h-[92px]"
        src={promoterIcons.promoter4}
      />
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[272px] left-1/2 -translate-x-[350%] h-[92px]"
        src={promoterIcons.promoter2}
      />
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[140px] right-1/2 translate-x-[300%] h-[92px]"
        src={promoterIcons.promoter1}
      />
      <Image
        alt="hero banner"
        className="absolute hidden xl:block top-[272px] right-1/2 translate-x-[350%] h-[92px]"
        src={promoterIcons.promoter3}
      />
      <Image
        alt="hero banner"
        className="-z-10 absolute top-0 left-0 w-full"
        src={BG_HERO}
      />
      {children}

      <Footer />
    </div>
  );
}
