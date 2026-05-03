"use client";

import Link from "next/link";
import { BUSINESS, SERVICES, findService, type ServiceMeta } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { PageHero } from "@/app/components/PageHero";
import { AlertCircle, ArrowRight, Check, Clock, MapPin, Receipt, Shield, iconFor } from "@/app/components/icons";
import { ApplianceIllustration } from "@/app/components/illustrations";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

const ISSUE_KEYS_BY_ID: Record<ServiceMeta["id"], string[]> = {
  washer: [
    "Won't drain",
    "Won't spin",
    "Leaking water",
    "Loud during spin",
    "Won't start",
    "Error code on display",
  ],
  dryer: [
    "No heat / cold air",
    "Long drying times",
    "Won't tumble",
    "Squealing or grinding noise",
    "Thermal fuse blown",
    "Vent or airflow issue",
  ],
  fridge: [
    "Not cooling",
    "Water on the floor",
    "Ice maker stopped",
    "Loud fan noise",
    "Running constantly",
    "Temperature swings",
  ],
  freezer: [
    "Frost buildup",
    "Not freezing",
    "Defrost issues",
    "Door seal failure",
    "Temperature swings",
    "Ice maker problems",
  ],
  gas: [
    "Burner won't ignite",
    "Weak or yellow flame",
    "Oven not heating",
    "Faulty igniter",
    "Gas smell at startup",
    "Uneven cooking",
  ],
  electric: [
    "Coil not heating",
    "Surface element issue",
    "Oven temperature off",
    "Control board problem",
    "Broiler not working",
    "Hot spots / uneven cooking",
  ],
};

export function ServicePageClient({ slug }: { slug: string }) {
  const { t, localePath } = useI18n();
  const service = findService(slug);
  if (!service) return null;
  const intro = t(`svc_intro_${service.id}`);
  const issues = ISSUE_KEYS_BY_ID[service.id];
  const others = SERVICES.filter((s) => s.id !== service.id);
  const isGas = service.id === "gas";

  return (
    <>
      <PageHero eyebrow={t("svc_eyebrow")} h1={t(`svc_${service.id}_t`)} intro={intro}>
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton variant="primary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="secondary" icon="Message" href={BUSINESS.whatsappUrl}>
            {t("cta_text")}
          </CTAButton>
          <CTAButton variant="outline" icon="Wrench" href={localePath("/contact")}>
            {t("cta_send_details")}
          </CTAButton>
        </div>
      </PageHero>

      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="h2 text-[26px] sm:text-[32px] text-ink">{t("sec_problems_h")}</h2>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {issues.map((issue) => (
                  <li
                    key={issue}
                    className="flex items-start gap-3 p-4 bg-white border border-line rounded-xl"
                  >
                    <span className="w-7 h-7 rounded-full bg-orange-soft text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] text-ink leading-snug">{issue}</span>
                  </li>
                ))}
              </ul>

              {isGas ? (
                <div className="mt-8 flex gap-4 p-5 bg-orange-soft border-[1.5px] border-orange/40 rounded-2xl">
                  <span className="w-10 h-10 rounded-full bg-white text-orange flex items-center justify-center flex-shrink-0">
                    <AlertCircle size={20} strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="font-bold text-ink mb-1">{t("gas_safety_t")}</div>
                    <p className="text-[15px] text-ink-soft leading-relaxed">
                      {t("gas_safety_b")}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white border border-line rounded-3xl p-6 shadow-qf-sm flex items-center justify-center">
                <ApplianceIllustration icon={service.icon} size={200} />
              </div>
              <div className="mt-4 bg-white border border-line rounded-2xl p-5 flex items-center gap-3 shadow-qf-sm">
                <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center flex-shrink-0">
                  <Clock size={18} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-ink">{t("hero_next_day")}</div>
                  <div className="text-[13px] text-ink-soft">{t("hero_same_day")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h2 className="h2 text-[26px] sm:text-[32px] text-ink">{t("sec_process_h")}</h2>
          <ol className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { t1: t("sec_process_1_t"), b: t("sec_process_1_b") },
              { t1: t("sec_process_2_t"), b: t("sec_process_2_b") },
              { t1: t("sec_process_3_t"), b: t("sec_process_3_b") },
            ].map((step, i) => (
              <li
                key={i}
                className="reveal p-6 rounded-2xl bg-white border border-line shadow-qf-xs"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-ink text-white font-mono font-semibold flex items-center justify-center mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[18px] font-bold text-ink">{step.t1}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{step.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid md:grid-cols-2 gap-5">
          <div className="reveal p-7 rounded-2xl bg-white border border-line shadow-qf-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-soft text-orange flex items-center justify-center mb-4">
              <Receipt size={22} strokeWidth={2} />
            </div>
            <h3 className="text-[20px] font-bold text-ink">{t("sec_diag_h")}</h3>
            <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{BUSINESS.diagnosticFee}</p>
          </div>
          <div className="reveal p-7 rounded-2xl bg-white border border-line shadow-qf-sm">
            <div className="w-12 h-12 rounded-xl bg-green-soft text-green flex items-center justify-center mb-4">
              <Shield size={22} strokeWidth={2} />
            </div>
            <h3 className="text-[20px] font-bold text-ink">{t("sec_warranty_h")}</h3>
            <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{t("sec_warranty_b")}</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="eyebrow text-orange mb-3">{t("areas_eyebrow")}</div>
            <h2 className="h2 text-[26px] sm:text-[32px] text-ink">{t("sec_areas_h")}</h2>
            <p className="mt-4 text-[16px] text-ink-soft leading-relaxed max-w-prose">
              {t("sec_areas_b")}
            </p>
            <div className="mt-6">
              <CTAButton variant="outline" icon="MapPin" href={localePath("/service-areas")}>
                {t("nav_areas")}
              </CTAButton>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                "Upper Darby, PA",
                "Drexel Hill, PA",
                "Lansdowne, PA",
                "Havertown, PA",
                "West Philadelphia, PA",
                "Philadelphia, PA",
              ].map((city) => (
                <Link
                  key={city}
                  href={localePath("/service-areas")}
                  className="area-chip flex items-center gap-2 px-4 py-3 bg-white border border-line rounded-xl text-[14px] font-medium text-ink hover:border-orange hover:text-orange focus-ring"
                >
                  <MapPin size={14} className="text-ink-muted" />
                  <span>{city}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h2 className="h2 text-[24px] sm:text-[28px] text-ink mb-6">{t("related_services")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {others.map((s) => (
              <Link
                key={s.id}
                href={localePath(`/services/${s.slug}`)}
                className="flex items-center gap-3 p-4 bg-white border border-line rounded-xl hover:border-orange hover:-translate-y-0.5 transition focus-ring"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-soft text-orange flex items-center justify-center flex-shrink-0">
                  {iconFor(s.icon, { size: 18, strokeWidth: 2 })}
                </div>
                <span className="text-[14px] font-semibold text-ink">{t(`svc_short_${s.id}`)}</span>
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
