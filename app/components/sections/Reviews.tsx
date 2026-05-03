"use client";

import { useI18n } from "@/app/lib/i18n";
import { Star } from "@/app/components/icons";

export function ReviewsSection() {
  const { t } = useI18n();
  return (
    <section data-screen-label="Reviews" id="reviews" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center reveal">
        <div className="eyebrow text-ink-muted mb-3">{t("rev_eyebrow")}</div>
        <h2 className="h2 text-[26px] sm:text-[32px] text-ink">{t("rev_coming_t")}</h2>
        <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("rev_coming_b")}</p>
        <div className="mt-8 inline-flex items-center gap-2 bg-surface-alt border border-line rounded-full px-4 py-2 text-[14px] text-ink-soft">
          <Star size={16} className="text-orange" strokeWidth={2} />
          {t("rev_coming_chip")}
        </div>
      </div>
    </section>
  );
}
