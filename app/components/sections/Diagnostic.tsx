"use client";

import { useI18n } from "@/app/lib/i18n";
import { Receipt } from "@/app/components/icons";
import { Sparkle, ToolGear, ToolWrench } from "@/app/components/illustrations";

export function DiagnosticSection() {
  const { t } = useI18n();
  return (
    <section className="bg-surface-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="reveal relative bg-orange-soft border-[1.5px] border-orange/30 rounded-3xl p-7 sm:p-10 lg:p-12 overflow-hidden transition hover:shadow-qf-lg hover:-translate-y-1">
          <div
            className="absolute top-0 right-0 w-40 h-40 accent-stripe opacity-60 rounded-bl-full float-blob"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-orange/10 blur-3xl float-blob-2"
            aria-hidden="true"
          />
          <ToolWrench size={36} className="absolute top-5 right-5 drift opacity-60" />
          <ToolGear
            size={32}
            className="absolute bottom-6 right-12 drift-2 opacity-50"
            color="var(--brand-orange)"
          />
          <Sparkle size={18} color="var(--brand-orange)" className="absolute top-12 left-12 drift-3" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex md:justify-center">
              <div className="relative w-24 h-24 rounded-2xl bg-white text-orange flex items-center justify-center shadow-qf-md transition-transform hover:rotate-[-8deg] hover:scale-105">
                <Receipt size={42} strokeWidth={1.8} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green text-white flex items-center justify-center text-[12px] font-bold border-2 border-white shadow-qf-sm">
                  $
                </span>
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="eyebrow text-orange mb-2">{t("diag_eyebrow")}</div>
              <h2 className="h2 text-[26px] sm:text-[32px] text-ink">{t("diag_h2")}</h2>
              <p className="mt-3 text-[16px] sm:text-[17px] text-ink-soft leading-relaxed">
                {t("diag_p1")}
              </p>
              <p className="mt-3 text-[14px] text-ink-muted">{t("diag_p2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
