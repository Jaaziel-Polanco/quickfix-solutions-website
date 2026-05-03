"use client";

import { useI18n } from "@/app/lib/i18n";
import { PageHero } from "@/app/components/PageHero";
import { FAQSection } from "@/app/components/sections/FAQ";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function FAQClient() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("faq_eyebrow")} h1={t("faq_h2")} intro={t("pg_faq_intro")} />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
