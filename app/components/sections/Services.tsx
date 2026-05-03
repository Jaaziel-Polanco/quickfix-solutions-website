"use client";

import Link from "next/link";
import { SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { ArrowRight, iconFor } from "@/app/components/icons";
import { ApplianceIllustration, SparkBolt, Sparkle } from "@/app/components/illustrations";

export function ServicesSection() {
  const { t, localePath } = useI18n();
  return (
    <section
      data-screen-label="Services"
      id="services"
      className="bg-surface-alt relative overflow-hidden"
    >
      <div
        className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-orange-soft blur-3xl opacity-40 float-blob pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mb-10 lg:mb-14 reveal">
          <div className="eyebrow text-orange mb-3">{t("svc_eyebrow")}</div>
          <h2 className="h2 text-[28px] sm:text-[36px] lg:text-[40px] text-ink">{t("svc_h2")}</h2>
          <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("svc_sub")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className="reveal service-card group bg-white border border-line rounded-2xl shadow-qf-sm relative overflow-hidden"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange-soft opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"
                aria-hidden="true"
              />
              <div className="relative h-40 bg-surface-alt border-b border-line overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
                <div className="absolute top-3 right-3 svc-icon w-9 h-9 rounded-lg bg-white border border-line text-orange flex items-center justify-center shadow-qf-xs">
                  {iconFor(s.icon, { size: 18, strokeWidth: 2 })}
                </div>
                <Sparkle
                  size={14}
                  color="var(--brand-orange)"
                  className="absolute top-5 left-5 drift opacity-70"
                />
                <SparkBolt
                  size={16}
                  color="var(--brand-green)"
                  className="absolute bottom-4 left-4 drift-2 opacity-70"
                />
                <div className="relative transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <ApplianceIllustration icon={s.icon} size={108} />
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="relative text-[20px] font-bold text-ink mb-3">{t(`svc_${s.id}_t`)}</h3>
                <div className="relative eyebrow text-ink-muted mb-2">{t("svc_common")}</div>
                <p className="relative text-ink-soft text-[15px] leading-relaxed mb-5">
                  {t(`svc_${s.id}_i`)}
                </p>
                <Link
                  href={localePath(`/services/${s.slug}`)}
                  className="relative inline-flex items-center gap-1.5 font-semibold text-ink group-hover:text-orange transition link-draw"
                >
                  {t("svc_learn")}
                  <ArrowRight size={16} className="svc-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
