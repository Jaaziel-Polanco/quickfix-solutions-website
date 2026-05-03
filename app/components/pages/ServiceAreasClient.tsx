"use client";

import Link from "next/link";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { ArrowRight, MapPin, iconFor } from "@/app/components/icons";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export function ServiceAreasClient() {
  const { t, localePath } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("areas_eyebrow")}
        h1={t("pg_areas_h1")}
        intro={t("pg_areas_intro")}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton variant="primary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="outline" icon="MapPin" href={localePath("/contact")}>
            {t("pg_areas_send_zip")}
          </CTAButton>
        </div>
      </PageHero>

      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="h2 text-[24px] sm:text-[28px] text-ink">{t("nav_areas")}</h2>
              <p className="mt-4 text-[16px] text-ink-soft leading-relaxed">
                {t("pg_areas_distance")}
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {SERVICE_AREAS.map((city) => (
                  <Link
                    key={city}
                    href={localePath("/contact")}
                    className="area-chip flex items-center gap-2 px-4 py-3 bg-white border border-line rounded-xl text-[14px] font-medium text-ink hover:border-orange hover:text-orange focus-ring"
                  >
                    <MapPin size={14} className="text-ink-muted" />
                    <span>{city}</span>
                  </Link>
                ))}
              </div>
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
