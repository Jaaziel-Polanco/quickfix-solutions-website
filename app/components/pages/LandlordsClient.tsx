"use client";

import { BUSINESS, EXCLUSIONS_KEYS, LANDLORD_STEPS, SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { ArrowRight, Building, Check, X } from "@/app/components/icons";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function LandlordsClient() {
  const { t, localePath } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("ll_pill")}
        h1={t("pg_ll_h1")}
        intro={t("pg_ll_intro")}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton variant="primary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="outline" icon="Message" href={localePath("/contact")}>
            {t("cta_send_details")}
          </CTAButton>
        </div>
      </PageHero>

      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-green-soft text-green rounded-full px-3 py-1 text-[13px] font-semibold mb-4">
                <Building size={14} strokeWidth={2.2} /> {t("ll_pill")}
              </div>
              <h2 className="h2 text-[26px] sm:text-[32px] text-ink">{t("ll_h2")}</h2>
              <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("ll_sub")}</p>
            </div>
            <ol className="lg:col-span-7 space-y-3">
              {LANDLORD_STEPS.map((step, i) => (
                <li
                  key={step.n}
                  className="reveal step-row group flex gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-line hover:border-orange transition"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center font-mono font-semibold text-[15px] transition group-hover:bg-orange">
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-ink">{t(step.titleKey)}</h3>
                    <p className="mt-1.5 text-[15px] text-ink-soft leading-relaxed">
                      {t(step.bodyKey)}
                    </p>
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

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-surface-alt border border-line">
            <div className="w-12 h-12 rounded-xl bg-green-soft text-green flex items-center justify-center mb-4">
              <Check size={22} strokeWidth={2.5} />
            </div>
            <h2 className="text-[22px] font-bold text-ink">{t("pg_ll_what_h")}</h2>
            <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{t("pg_ll_what_b")}</p>
            <ul className="mt-5 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id} className="flex items-center gap-2 text-[15px] text-ink">
                  <Check size={16} className="text-green" strokeWidth={2.5} />
                  {t(`svc_${s.id}_t`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 rounded-2xl bg-surface-alt border border-line">
            <div className="w-12 h-12 rounded-xl bg-orange-soft text-orange flex items-center justify-center mb-4">
              <X size={22} strokeWidth={2.5} />
            </div>
            <h2 className="text-[22px] font-bold text-ink">{t("pg_ll_dont_h")}</h2>
            <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{t("pg_ll_dont_b")}</p>
            <ul className="mt-5 space-y-2">
              {EXCLUSIONS_KEYS.map((k) => (
                <li key={k} className="flex items-center gap-2 text-[15px] text-ink-soft">
                  <X size={16} className="text-ink-muted" strokeWidth={2.2} />
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
