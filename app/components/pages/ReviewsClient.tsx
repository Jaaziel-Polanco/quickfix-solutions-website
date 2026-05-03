"use client";

import { BUSINESS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { REVIEWS } from "@/app/lib/reviews";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { ReviewCard } from "@/app/components/ReviewCard";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function ReviewsClient() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("rev_eyebrow")} h1={t("pg_rev_h1")} intro={t("pg_rev_intro_2")}>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} r={r} i={i} />
            ))}
          </div>

          <p className="mt-10 text-center text-[13px] text-ink-muted max-w-2xl mx-auto">
            {t("rev_disclaimer")}
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
