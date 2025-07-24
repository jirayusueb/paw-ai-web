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

export function HomePageContainer() {
  return (
    <HomePageLayout>
      <HeroSection />
      <KeyBenefitsSection />
      <UseCasesSection />
      <GetStartedSection />
      <CompatibilitySection />
      <PricingSection />
      <CTASection />
    </HomePageLayout>
  );
}
