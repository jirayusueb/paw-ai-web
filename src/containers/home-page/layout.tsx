import type { PropsWithChildren } from "react";
import Image from "next/image";
import BG_HERO from "@/assets/media/image/bg-hero.png";
import SHADE_BLUR from "@/assets/media/image/shade-blur.png";
import { Navbar } from "@/containers/home-page/components/navbar";
import { Footer } from "@/containers/home-page/components/footer";

export function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen max-w-screen bg-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
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
