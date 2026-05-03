import { Hero } from "@/app/components/Hero";
import { TrustBadgesSection } from "@/app/components/sections/TrustBadges";
import { WhyUsSection } from "@/app/components/sections/WhyUs";
import { ServicesSection } from "@/app/components/sections/Services";
import { ExclusionsSection } from "@/app/components/sections/Exclusions";
import { DiagnosticSection } from "@/app/components/sections/Diagnostic";
import { LandlordsSection } from "@/app/components/sections/Landlords";
import { ServiceAreasSection } from "@/app/components/sections/ServiceAreas";
import { ReviewsSection } from "@/app/components/sections/Reviews";
import { FAQSection } from "@/app/components/sections/FAQ";
import { ContactSection } from "@/app/components/sections/Contact";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function Landing() {
  return (
    <>
      <Hero />
      <TrustBadgesSection />
      <WhyUsSection />
      <ServicesSection />
      <ExclusionsSection />
      <DiagnosticSection />
      <LandlordsSection />
      <ServiceAreasSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
