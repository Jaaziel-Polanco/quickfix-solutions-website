"use client";

import Link from "next/link";
import { BUSINESS, SERVICE_AREAS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { MapPin } from "@/app/components/icons";

export function ServiceAreasSection() {
  const { t, localePath } = useI18n();
  const post = t("areas_h2_post");
  return (
    <section data-screen-label="Service Areas" id="areas" className="bg-surface-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 reveal">
            <div className="eyebrow text-orange mb-3">{t("areas_eyebrow")}</div>
            <h2 className="h2 text-[28px] sm:text-[36px] text-ink">
              {t("areas_h2_pre")}
              {BUSINESS.serviceState}
              {post ? ` ${post}` : ""}
            </h2>
            <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("areas_sub")}</p>
            <div className="mt-6">
              <CTAButton variant="outline" icon="MapPin" href={`tel:${BUSINESS.phoneRaw}`}>
                {t("cta_check_address")}
              </CTAButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {SERVICE_AREAS.map((city, i) => (
                <Link
                  key={city}
                  href={localePath("/contact")}
                  className="area-chip reveal flex items-center gap-2 px-4 py-3 bg-white border border-line rounded-xl text-[14px] font-medium text-ink hover:border-orange hover:text-orange focus-ring"
                  style={{ transitionDelay: `${(i % 8) * 40}ms` }}
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
  );
}
