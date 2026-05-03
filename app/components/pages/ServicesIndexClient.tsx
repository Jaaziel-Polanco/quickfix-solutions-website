"use client";

import Link from "next/link";
import { BUSINESS, SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { ArrowRight, iconFor } from "@/app/components/icons";
import { ApplianceIllustration } from "@/app/components/illustrations";
import { ExclusionsSection } from "@/app/components/sections/Exclusions";
import { DiagnosticSection } from "@/app/components/sections/Diagnostic";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function ServicesIndexClient() {
  const { t, localePath } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("svc_eyebrow")} h1={t("pg_svc_h1")} intro={t("pg_svc_intro")}>
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton variant="primary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="secondary" icon="Message" href={BUSINESS.whatsappUrl}>
            {t("cta_text")}
          </CTAButton>
        </div>
      </PageHero>

      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h2 className="h2 text-[26px] sm:text-[32px] text-ink mb-8">{t("pg_svc_choose")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.id}
                href={localePath(`/services/${s.slug}`)}
                className="reveal service-card group bg-white border border-line rounded-2xl shadow-qf-sm relative overflow-hidden focus-ring"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative h-40 bg-surface-alt border-b border-line overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
                  <div className="absolute top-3 right-3 svc-icon w-9 h-9 rounded-lg bg-white border border-line text-orange flex items-center justify-center shadow-qf-xs">
                    {iconFor(s.icon, { size: 18, strokeWidth: 2 })}
                  </div>
                  <div className="relative transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <ApplianceIllustration icon={s.icon} size={108} />
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-[20px] font-bold text-ink mb-2">{t(`svc_${s.id}_t`)}</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed mb-5">
                    {t(`svc_${s.id}_i`)}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-ink group-hover:text-orange transition link-draw">
                    {t("svc_learn")}
                    <ArrowRight size={16} className="svc-arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DiagnosticSection />
      <ExclusionsSection />
      <FinalCTA />
    </>
  );
}
