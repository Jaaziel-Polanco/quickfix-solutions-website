"use client";

import { BUSINESS, LANDLORD_STEPS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { ArrowRight, Building } from "@/app/components/icons";
import { HouseIllustration, SparkBolt, Sparkle } from "@/app/components/illustrations";

export function LandlordsSection() {
  const { t, localePath } = useI18n();
  return (
    <section data-screen-label="Landlords" id="landlords" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 reveal">
            <div className="relative mb-6 bg-gradient-to-br from-green-soft to-orange-soft rounded-3xl p-6 border border-line overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
              <Sparkle size={16} color="var(--brand-orange)" className="absolute top-4 right-6 drift" />
              <SparkBolt size={20} color="var(--brand-green)" className="absolute bottom-4 left-6 drift-2" />
              <div className="relative flex items-center justify-center py-2">
                <HouseIllustration size={200} />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-soft text-green rounded-full px-3 py-1 text-[13px] font-semibold mb-4">
              <Building size={14} strokeWidth={2.2} /> {t("ll_pill")}
            </div>
            <h2 className="h2 text-[28px] sm:text-[36px] text-ink">{t("ll_h2")}</h2>
            <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("ll_sub")}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <CTAButton variant="primary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
                {t("cta_call_us")}
              </CTAButton>
              <CTAButton variant="outline" icon="Message" href={localePath("/contact")}>
                {t("cta_send_details")}
              </CTAButton>
            </div>
          </div>
          <ol className="lg:col-span-7 space-y-3">
            {LANDLORD_STEPS.map((step, i) => (
              <li
                key={step.n}
                className="reveal step-row group flex gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-line hover:border-orange transition"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center font-mono font-semibold text-[15px] transition group-hover:bg-orange group-hover:rotate-[-6deg]">
                  {step.n}
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-ink transition group-hover:translate-x-1">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-ink-soft leading-relaxed">{t(step.bodyKey)}</p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-ink-muted self-center transition group-hover:text-orange group-hover:translate-x-1"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
