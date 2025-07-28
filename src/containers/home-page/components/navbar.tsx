"use client";

import Image from "next/image";
import LOGO from "@/assets/media/svg/logo.svg";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { showMobileNavSheet } from "./mobile-nav-sheet";

export function Navbar() {
  const { isMobile } = useBreakpoint();

  // Intersection observer for scroll-based blur effect
  const { ref: scrollTriggerRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({
      threshold: 0,
      rootMargin: "-64px 0px 0px 0px", // Trigger when navbar starts to leave viewport
    });

  const navigationItems = [
    { label: "Features", href: "#features", ariaLabel: "View features" },
    { label: "Pricing", href: "#pricing", ariaLabel: "View pricing" },
  ];

  const authItems = [
    {
      label: "Login",
      href: "#login",
      variant: "link" as const,
      ariaLabel: "Sign in to your account",
    },
    {
      label: "Sign up",
      href: "#signup",
      variant: "outline" as const,
      ariaLabel: "Create a new account",
    },
  ];

  return (
    <>
      {/* Scroll trigger element - positioned at the top of the page */}
      <div
        ref={scrollTriggerRef}
        className="absolute top-0 left-0 w-full h-1 pointer-events-none"
        aria-hidden="true"
      />

      <header
        className={`flex h-[64px] md:h-[80px] w-full items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
          !isIntersecting ? "backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav
          className="container mx-auto flex w-full items-center justify-between px-4 sm:px-0"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Left: Navigation Items (Desktop) / Logo (Mobile) */}
          {!isMobile ? (
            <ul className="flex items-center gap-4" role="menubar">
              {navigationItems.map((item) => (
                <li key={item.label} role="none">
                  <Button
                    variant="link"
                    className="w-[120px] text-center"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center">
              <a href="/" aria-label="PAW AI Home">
                <Image
                  alt="PAW AI Logo"
                  src={LOGO}
                  width={120}
                  height={40}
                  priority
                  className="h-6 w-auto md:h-10"
                />
              </a>
            </div>
          )}

          {/* Center: Logo (Desktop only) */}
          {!isMobile && (
            <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <a href="/" aria-label="PAW AI Home">
                <Image
                  alt="PAW AI Logo"
                  src={LOGO}
                  width={120}
                  height={40}
                  priority
                  className="h-6 w-auto md:h-10"
                />
              </a>
            </div>
          )}

          {/* Right: Auth Items (Desktop) / Menu (Mobile) */}
          {!isMobile ? (
            <ul className="flex items-center gap-4" role="menubar">
              {authItems.map((item) => (
                <li key={item.label} role="none">
                  <Button
                    variant={item.variant}
                    className="w-[120px] text-center"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => showMobileNavSheet()}
                aria-label="Open mobile menu"
                className="h-10 w-10"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
