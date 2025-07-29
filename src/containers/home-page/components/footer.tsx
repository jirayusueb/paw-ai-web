import Image from "next/image";
import LOGO from "@/assets/media/svg/logo.svg";
import FOOTER_JET from "@/assets/media/image/footer-jet.png";
import { socialIcons } from "@/assets/media/svg/social";

// Footer data configuration
const FOOTER_NAV_SECTIONS = [
  {
    number: "01",
    title: "Platform",
    links: ["Pricing", "Blog"],
  },
  {
    number: "02",
    title: "Company",
    links: ["About Us", "Contact"],
  },
  {
    number: "03",
    title: "Legal",
    links: ["Terms and Conditions", "Privacy Policy"],
  },
] as const;

const SOCIAL_MEDIA_LINKS = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "GitHub", icon: "github", href: "#" },
  { label: "Discord", icon: "discord", href: "#" },
  { label: "Twitter", icon: "twitter", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
] as const;

// Footer Navigation Section Component
function FooterNavSection({
  number,
  title,
  links,
}: {
  number: string;
  title: string;
  links: readonly string[];
}) {
  return (
    <ul className="flex flex-col gap-4 md:col-span-1">
      <li className="flex flex-col font-semibold text-xl mb-6">
        <p>{number}</p>
        <p>{title}</p>
      </li>
      {links.map((link) => (
        <li key={link} className="text-sm">
          {link}
        </li>
      ))}
    </ul>
  );
}

// Social Media Section Component
function SocialMediaSection({ links }: { links: typeof SOCIAL_MEDIA_LINKS }) {
  return (
    <div className="w-full flex items-end flex-col gap-6 md:col-span-3">
      <p className="text-sm font-light">Our Social Media</p>
      <div className="flex flex-wrap gap-4 items-end justify-end">
        {links.map((link) => {
          const IconComponent =
            socialIcons[link.icon as keyof typeof socialIcons];
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex justify-center items-center size-10 rounded-xl bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
              aria-label={link.label}
            >
              <Image
                src={IconComponent}
                alt={link.label}
                width={20}
                height={20}
              />
            </a>
          );
        })}
      </div>
      <p className="text-sm font-light text-muted-foreground hidden md:block">
        © 2025 Paw AI. All rights reserved.
      </p>
    </div>
  );
}

// Main Footer Component
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
            {FOOTER_NAV_SECTIONS.map((section) => (
              <FooterNavSection
                key={section.number}
                number={section.number}
                title={section.title}
                links={section.links}
              />
            ))}
            <SocialMediaSection links={SOCIAL_MEDIA_LINKS} />
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
