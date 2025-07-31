"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LOGO from "@/assets/media/svg/logo.svg";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { showMobileNavSheet } from "./mobile-nav-sheet";
import { BeamButton } from "@/containers/home-page/components/beam-button";

export function Navbar() {
  const isMobile = useIsMobile();

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

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
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
            <motion.ul
              className="flex items-center gap-4"
              role="menubar"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  role="none"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Button
                    variant="link"
                    className="w-[120px] text-center"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
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
            </motion.div>
          )}

          {/* Center: Logo (Desktop only) */}
          {!isMobile && (
            <motion.div 
              className="flex items-center absolute left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>
          )}

          {/* Right: Auth Items (Desktop) / Menu (Mobile) */}
          {!isMobile ? (
            <motion.ul 
              className="flex items-center gap-4" 
              role="menubar"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.li 
                role="none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button
                  variant="link"
                  className="w-[120px] text-center"
                  role="menuitem"
                  aria-label="Sign in to your account"
                  asChild
                >
                  <a href="#login">Login</a>
                </Button>
              </motion.li>
              <motion.li 
                role="none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <BeamButton className="w-[120px] text-center">
                  <a href="#signup">Sign up</a>
                </BeamButton>
              </motion.li>
            </motion.ul>
                      ) : (
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => showMobileNavSheet()}
                  aria-label="Open mobile menu"
                  className="h-10 w-10"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </motion.div>
            )}
        </nav>
      </motion.header>
    </>
  );
}
