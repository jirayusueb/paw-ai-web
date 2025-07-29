import Image from "next/image";
import LOGO from "@/assets/media/svg/logo.svg";
import FOOTER_JET from "@/assets/media/image/footer-jet.png";

export function Footer() {
  return (
    <footer className="bg-black relative">
      <Image
        src={FOOTER_JET}
        alt="footer jet"
        className="w-full absolute bottom-0 left-0"
      />
      <div className="container mx-auto flex flex-col justify-between pt-15 md:pb-10 px-4 md:px-0">
        <Image src={LOGO} alt="logo" />
        <div className="justify-between md:mt-15 mt-10">
          <div className="w-full grid md:grid-cols-6 grid-cols-2 gap-x-4 gap-y-10">
            <ul className="flex flex-col gap-2 md:col-span-1">
              <li className="flex flex-col font-semibold text-xl mb-6">
                <p>01</p>
                <p>Platform</p>
              </li>
              <li className="text-sm">Pricing</li>
              <li className="text-sm">Blog</li>
            </ul>
            <ul className="flex flex-col gap-2 md:col-span-1">
              <li className="flex flex-col font-semibold text-xl mb-6">
                <p>02</p>
                <p>Company</p>
              </li>
              <li className="text-sm">About Us</li>
              <li className="text-sm">Contact</li>
            </ul>
            <ul className="flex flex-col gap-2 md:col-span-1">
              <li className="flex flex-col font-semibold text-xl mb-6">
                <p>03</p>
                <p>Legal</p>
              </li>
              <li className="text-sm">Terms and Conditions</li>
              <li className="text-sm">Privacy Policy</li>
            </ul>
            <div className="w-full flex items-end flex-col gap-6 md:col-span-3">
              <p className="text-sm font-light">Our Social Media</p>
              <div className="flex flex-wrap gap-4 items-end justify-end">
                <div className="flex justify-center items-center size-10 rounded-xl bg-muted">
                  F
                </div>
                <div className="flex justify-center items-center size-10 rounded-xl bg-muted">
                  G
                </div>
                <div className="flex justify-center items-center size-10 rounded-xl bg-muted">
                  D
                </div>
                <div className="flex justify-center items-center size-10 rounded-xl bg-muted">
                  X
                </div>
                <div className="flex justify-center items-center size-10 rounded-xl bg-muted">
                  I
                </div>
              </div>
              <p className="text-sm font-light text-muted-foreground hidden md:block">
                © 2025 Paw AI. All rights reserved.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-10 md:hidden">
            <p className="text-sm font-light text-muted-foreground">
              © 2025 Paw AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
