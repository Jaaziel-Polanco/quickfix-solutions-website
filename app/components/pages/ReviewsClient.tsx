"use client";

import { BUSINESS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { Star } from "@/app/components/icons";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function ReviewsClient() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("rev_eyebrow")} h1={t("rev_coming_t")} intro={t("rev_coming_b")}>
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton variant="primary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="outline" icon="Message" href={BUSINESS.whatsappUrl}>
            {t("cta_text_instead")}
          </CTAButton>
        </div>
      </PageHero>

      <section className="bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 text-[14px] text-ink-soft">
            <Star size={16} className="text-orange" strokeWidth={2} />
            {t("rev_coming_chip")}
          </div>
          <p className="mt-6 text-[16px] text-ink-soft max-w-prose mx-auto leading-relaxed">
            {t("rev_coming_long")}
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
