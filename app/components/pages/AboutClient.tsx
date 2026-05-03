"use client";

import Link from "next/link";
import { BUSINESS, SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { ArrowRight, Check, MapPin, iconFor } from "@/app/components/icons";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function AboutClient() {
  const { t, localePath } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("pg_about_eyebrow")} h1={t("pg_about_h1")} intro={t("pg_about_p1")}>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="space-y-6 text-[17px] text-ink-soft leading-relaxed">
            <p>{t("pg_about_p2")}</p>
            <p>{t("pg_about_p3")}</p>
            <p>{t("pg_about_p4")}</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-line shadow-qf-xs">
              <div className="w-12 h-12 rounded-xl bg-orange-soft text-orange flex items-center justify-center mb-4">
                <MapPin size={22} strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{t("sm_storefront_t")}</h3>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">
                {t("sm_storefront_b")}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line shadow-qf-xs">
              <div className="w-12 h-12 rounded-xl bg-green-soft text-green flex items-center justify-center mb-4">
                <Check size={22} strokeWidth={2.5} />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{t("sm_b2")}</h3>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{t("sm_intro")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h2 className="h2 text-[24px] sm:text-[28px] text-ink mb-6">{t("foot_services")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={localePath(`/services/${s.slug}`)}
                className="flex items-center gap-3 p-4 bg-surface-alt border border-line rounded-xl hover:border-orange transition focus-ring"
              >
                <div className="w-10 h-10 rounded-lg bg-white text-orange flex items-center justify-center flex-shrink-0">
                  {iconFor(s.icon, { size: 18, strokeWidth: 2 })}
                </div>
                <span className="text-[15px] font-semibold text-ink">{t(`svc_${s.id}_t`)}</span>
                <ArrowRight size={16} className="ml-auto text-ink-muted" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
