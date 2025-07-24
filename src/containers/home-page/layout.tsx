import type { PropsWithChildren } from "react";
import Image from "next/image";
import BG_HERO from "@/assets/media/image/bg-hero.png";
import SHADE_BLUR from "@/assets/media/image/shade-blur.png";
import { Navbar } from "@/containers/home-page/components/navbar";
import LOGO from "@/assets/media/svg/logo.svg";
import FOOTER_TEXT from "@/assets/media/image/footer-text.png";
import FOOTER_JET from "@/assets/media/image/footer-jet.png";

export function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen w-screen bg-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Image
        alt="hero banner"
        className="-z-10 absolute top-0 left-0 w-full"
        src={BG_HERO}
      />
      {children}
      <div className="w-full h-[410px]">
        <Image src={FOOTER_JET} alt="footer jet" className="w-full" />
      </div>
      <footer className="bg-[#351755]">
        <div className="container mx-auto flex flex-col justify-between pt-10">
          <Image src={LOGO} alt="logo" />
          <div className="flex justify-between mt-15">
            <div className="w-1/2 grid grid-cols-3 gap-4">
              <ul className="flex flex-col gap-2">
                <li className="flex flex-col font-semibold text-xl mb-6">
                  <p>01</p>
                  <p>Platform</p>
                </li>
                <li className="text-sm">Pricing</li>
                <li className="text-sm">Blog</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="flex flex-col font-semibold text-xl mb-6">
                  <p>02</p>
                  <p>Company</p>
                </li>
                <li className="text-sm">About Us</li>
                <li className="text-sm">Contact</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="flex flex-col font-semibold text-xl mb-6">
                  <p>03</p>
                  <p>Legal</p>
                </li>
                <li className="text-sm">Terms and Conditions</li>
                <li className="text-sm">Privacy Policy</li>
              </ul>
            </div>
            <div className="w-1/2 flex items-end flex-col gap-6">
              <p className="text-sm font-light">Our Social Media</p>
              <div className="flex gap-4">
                <div className="flex justify-center items-center size-10 rounded-full">
                  F
                </div>
                <div className="flex justify-center items-center size-10 rounded-full">
                  G
                </div>
                <div className="flex justify-center items-center size-10 rounded-full">
                  D
                </div>
                <div className="flex justify-center items-center size-10 rounded-full">
                  X
                </div>
                <div className="flex justify-center items-center size-10 rounded-full">
                  I
                </div>
              </div>
              <p className="text-sm font-light text-muted-foreground">
                © 2025 Paw AI. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Image src={FOOTER_TEXT} alt="footer text" />
          </div>
        </div>
      </footer>
    </div>
  );
}
