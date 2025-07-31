"use client";

import { useRef, useEffect, useState } from "react";
import { HomePageLayout } from "@/containers/home-page/layout";
import {
  HeroSection,
  KeyBenefitsSection,
  UseCasesSection,
  GetStartedSection,
  CompatibilitySection,
  CTASection,
  PricingSection,
} from "@/containers/home-page/sections";

// Types
interface SectionRefs {
  hero: React.RefObject<HTMLElement | null>;
  keyBenefits: React.RefObject<HTMLElement | null>;
  useCases: React.RefObject<HTMLElement | null>;
  getStarted: React.RefObject<HTMLElement | null>;
  compatibility: React.RefObject<HTMLElement | null>;
  pricing: React.RefObject<HTMLElement | null>;
  cta: React.RefObject<HTMLElement | null>;
}

interface VisibleSections {
  hero: boolean;
  keyBenefits: boolean;
  useCases: boolean;
  getStarted: boolean;
  compatibility: boolean;
  pricing: boolean;
  cta: boolean;
}

export function HomePageContainer() {
  // Create refs for each section
  const sectionRefs: SectionRefs = {
    hero: useRef<HTMLElement>(null),
    keyBenefits: useRef<HTMLElement>(null),
    useCases: useRef<HTMLElement>(null),
    getStarted: useRef<HTMLElement>(null),
    compatibility: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    cta: useRef<HTMLElement>(null),
  };

  // Track visible sections
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({
    hero: false,
    keyBenefits: false,
    useCases: false,
    getStarted: false,
    compatibility: false,
    pricing: false,
    cta: false,
  });

  // Intersection observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute("data-section");
        if (sectionId && sectionId in visibleSections) {
          setVisibleSections((prev) => ({
            ...prev,
            [sectionId]: entry.isIntersecting,
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <HomePageLayout>
      <section
        ref={sectionRefs.hero}
        data-section="hero"
        className={`transition-opacity duration-1000 ${
          visibleSections.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection />
      </section>

      <section
        ref={sectionRefs.keyBenefits}
        data-section="keyBenefits"
        className={`transition-opacity duration-1000 delay-200 ${
          visibleSections.keyBenefits ? "opacity-100" : "opacity-0"
        }`}
      >
        <KeyBenefitsSection />
      </section>

      <section
        ref={sectionRefs.useCases}
        data-section="useCases"
        className={`transition-opacity duration-1000 delay-300 ${
          visibleSections.useCases ? "opacity-100" : "opacity-0"
        }`}
      >
        <UseCasesSection />
      </section>

      <section
        ref={sectionRefs.getStarted}
        data-section="getStarted"
        className={`transition-opacity duration-1000 delay-400 ${
          visibleSections.getStarted ? "opacity-100" : "opacity-0"
        }`}
      >
        <GetStartedSection />
      </section>

      <section
        ref={sectionRefs.compatibility}
        data-section="compatibility"
        className={`transition-opacity duration-1000 delay-500 ${
          visibleSections.compatibility ? "opacity-100" : "opacity-0"
        }`}
      >
        <CompatibilitySection />
      </section>

      <section
        ref={sectionRefs.pricing}
        data-section="pricing"
        className={`transition-opacity duration-1000 delay-600 ${
          visibleSections.pricing ? "opacity-100" : "opacity-0"
        }`}
      >
        <PricingSection />
      </section>

      <section
        ref={sectionRefs.cta}
        data-section="cta"
        className={`transition-opacity duration-1000 delay-700 ${
          visibleSections.cta ? "opacity-100" : "opacity-0"
        }`}
      >
        <CTASection />
      </section>
    </HomePageLayout>
  );
}
