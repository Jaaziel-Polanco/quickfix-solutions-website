"use client";

import Link from "next/link";
import { useI18n } from "@/app/lib/i18n";
import { REVIEWS } from "@/app/lib/reviews";
import { ReviewCard } from "@/app/components/ReviewCard";
import { ArrowRight, Star } from "@/app/components/icons";

const FEATURED = REVIEWS.slice(0, 4);

export function ReviewsSection() {
  const { t, localePath } = useI18n();
  return (
    <section data-screen-label="Reviews" id="reviews" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12 reveal">
          <div className="eyebrow text-orange mb-3">{t("rev_eyebrow")}</div>
          <h2 className="h2 text-[28px] sm:text-[36px] lg:text-[40px] text-ink">
            {t("home_rev_h2")}
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("home_rev_sub")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} i={i} />
          ))}
        </div>

        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <Link
            href={localePath("/reviews")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink text-white font-semibold text-[15px] hover:bg-orange transition focus-ring"
          >
            {t("home_rev_more")}
            <ArrowRight size={16} />
          </Link>
          <span className="inline-flex items-center gap-2 text-[13px] text-ink-muted">
            <Star size={14} className="text-orange" strokeWidth={2} style={{ fill: "currentColor" }} />
            {t("rev_disclaimer")}
          </span>
        </div>
      </div>
    </section>
  );
}
