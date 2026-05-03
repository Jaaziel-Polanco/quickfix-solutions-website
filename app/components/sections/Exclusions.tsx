"use client";

import { EXCLUSIONS_KEYS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { X } from "@/app/components/icons";

export function ExclusionsSection() {
  const { t } = useI18n();
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="eyebrow text-ink-muted mb-3">{t("exc_eyebrow")}</div>
            <h2 className="h2 text-[28px] sm:text-[36px] text-ink">{t("exc_h2")}</h2>
            <p className="mt-4 text-[17px] text-ink-soft leading-relaxed max-w-prose">
              {t("exc_sub")}
            </p>
          </div>
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1 bg-surface-alt rounded-2xl p-6 sm:p-8 border border-line">
              {EXCLUSIONS_KEYS.map((key) => (
                <li
                  key={key}
                  className="flex items-center gap-3 py-2.5 border-b border-line/70 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0 transition hover:translate-x-1"
                >
                  <span className="w-7 h-7 rounded-full bg-white border border-line text-ink-muted flex items-center justify-center flex-shrink-0">
                    <X size={14} strokeWidth={2.2} />
                  </span>
                  <span className="text-[15px] text-ink font-medium">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
