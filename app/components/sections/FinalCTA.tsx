"use client";

import { BUSINESS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { Message } from "@/app/components/icons";

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="bg-surface-dark relative overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange/20 blur-3xl pointer-events-none float-blob"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-green/20 blur-3xl pointer-events-none float-blob-2"
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center reveal">
        <div className="eyebrow text-orange mb-4">{t("cta_eyebrow")}</div>
        <h2 className="display text-white text-[34px] sm:text-[44px] lg:text-[52px]">
          {t("cta_h2")}
        </h2>
        <p className="mt-5 text-[18px] text-white/70 max-w-2xl mx-auto leading-relaxed">
          {t("cta_sub")}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <span className="rounded-lg cta-pulse shine-wrap">
            <CTAButton variant="primary" icon="Phone" size="lg" href={`tel:${BUSINESS.phoneRaw}`}>
              {t("cta_call")} {BUSINESS.phone}
            </CTAButton>
          </span>
          <a
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[17px] font-semibold rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 transition focus-ring"
          >
            <Message size={20} /> {t("cta_text_instead")}
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 opacity-70 text-[12px] uppercase tracking-widest text-white/60">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange ping-ring text-orange relative" />
            {t("cta_avail")}
          </span>
          <span>·</span>
          <span>{t("hours_value")}</span>
        </div>
      </div>
    </section>
  );
}
