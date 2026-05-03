"use client";

import { useI18n } from "@/app/lib/i18n";
import { Check, MapPin } from "@/app/components/icons";

const BULLETS = ["sm_b1", "sm_b2", "sm_b3", "sm_b4", "sm_b5", "sm_b6", "sm_b7"] as const;

export function ServiceModelSection() {
  const { t } = useI18n();
  return (
    <section className="bg-white relative overflow-hidden">
      <div
        className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-green-soft blur-3xl opacity-40 float-blob-2 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="eyebrow text-orange mb-3">{t("sm_eyebrow")}</div>
            <h2 className="h2 text-[28px] sm:text-[36px] lg:text-[40px] text-ink">{t("sm_h2")}</h2>
            <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("sm_intro")}</p>

            <div className="mt-7 flex gap-4 p-5 rounded-2xl bg-surface-alt border border-line">
              <span className="w-10 h-10 rounded-full bg-orange-soft text-orange flex items-center justify-center flex-shrink-0">
                <MapPin size={18} strokeWidth={2} />
              </span>
              <div>
                <div className="font-bold text-ink text-[15px]">{t("sm_storefront_t")}</div>
                <p className="mt-1 text-[14px] text-ink-soft leading-relaxed">
                  {t("sm_storefront_b")}
                </p>
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-3 reveal reveal-delay-2">
            {BULLETS.map((key, i) => (
              <li
                key={key}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-line shadow-qf-xs hover:border-orange/40 hover:shadow-qf-sm transition"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="w-7 h-7 rounded-full bg-green-soft text-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-[15px] text-ink leading-snug">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
