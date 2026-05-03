"use client";

import { BUSINESS, SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { Check, Clock } from "@/app/components/icons";
import { ApplianceIllustration, SparkBolt, Sparkle } from "@/app/components/illustrations";

export function Hero() {
  const { t } = useI18n();
  return (
    <section data-screen-label="Home" id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-orange-soft blur-3xl opacity-50 pointer-events-none float-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-32 -left-32 w-[400px] h-[400px] rounded-full bg-green-soft blur-3xl opacity-50 pointer-events-none float-blob-2"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="reveal in inline-flex items-center gap-2 bg-white border border-line rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-qf-xs">
              <span className="relative w-2 h-2 rounded-full bg-green ping-ring text-green" />
              {t("hero_pill")} {BUSINESS.serviceState}
            </div>

            <h1 className="display mt-6 text-[40px] sm:text-[52px] lg:text-[64px] text-ink">
              <span className="word-in" style={{ animationDelay: "120ms" }}>
                {t("hero_h1_a")}
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">
                  <span className="word-in" style={{ animationDelay: "420ms" }}>
                    {t("hero_h1_b")}
                  </span>
                </span>
                <span className="h-underline -z-0" aria-hidden="true" />
              </span>
            </h1>

            <p className="reveal in reveal-delay-4 mt-6 text-[18px] sm:text-[20px] text-ink-soft leading-relaxed max-w-[60ch]">
              {t("hero_sub")}
            </p>

            <div className="reveal in reveal-delay-5 mt-8 flex flex-col sm:flex-row gap-3">
              <span className="rounded-lg cta-pulse">
                <CTAButton
                  variant="primary"
                  icon="Phone"
                  size="lg"
                  href={`tel:${BUSINESS.phoneRaw}`}
                  full
                >
                  {t("cta_call")} {BUSINESS.phone}
                </CTAButton>
              </span>
              <CTAButton variant="secondary" icon="Message" size="lg" href={BUSINESS.whatsappUrl}>
                {t("cta_text")}
              </CTAButton>
            </div>

            <div className="reveal in reveal-delay-6 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
              <div className="flex items-center gap-2 text-ink-soft">
                <Check size={16} className="text-green" strokeWidth={2.5} /> {t("hero_check_1")}
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <Check size={16} className="text-green" strokeWidth={2.5} /> {t("hero_check_2")}
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <Check size={16} className="text-green" strokeWidth={2.5} /> {t("hero_check_3")}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <Sparkle size={20} color="var(--brand-orange)" className="absolute -top-2 -left-2 drift z-10" />
              <SparkBolt size={26} color="var(--brand-green)" className="absolute -bottom-2 right-4 drift-2 z-10" />
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:ml-auto">
                {SERVICES.slice(0, 4).map((s, i) => (
                  <div
                    key={s.id}
                    className={`badge-pop relative rounded-2xl p-4 border transition hover:-translate-y-1 hover:shadow-qf-md overflow-hidden ${
                      i % 2 === 0
                        ? "bg-orange-soft border-orange/20"
                        : "bg-green-soft border-green/20"
                    }`}
                    style={{ animationDelay: `${300 + i * 120}ms` }}
                  >
                    <div className="flex items-center justify-center h-24 mb-2">
                      <ApplianceIllustration icon={s.icon} size={88} />
                    </div>
                    <div className="text-[14px] font-semibold text-ink leading-tight">
                      {t(`svc_short_${s.id}`)}
                    </div>
                    <div className="text-[12px] text-ink-soft mt-0.5">{t("svc_residential")}</div>
                  </div>
                ))}
              </div>
              <div className="reveal in reveal-delay-5 mt-4 max-w-md mx-auto lg:ml-auto bg-white border border-line rounded-2xl p-4 shadow-qf-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center flex-shrink-0">
                  <Clock size={18} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-semibold text-ink">{t("hero_next_day")}</div>
                  <div className="text-[13px] text-ink-soft">{t("hero_same_day")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-line bg-ink text-white overflow-hidden">
        <div className="marquee-track py-3 text-[14px] font-semibold tracking-wide uppercase">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 px-5">
              {[
                t("svc_short_washer"),
                t("svc_short_dryer"),
                t("svc_short_fridge"),
                t("svc_short_freezer"),
                t("svc_short_gas"),
                t("svc_short_electric"),
                t("marq_residential"),
                t("marq_nextday"),
                t("marq_warranty"),
                t("marq_diagnostic"),
                t("marq_pa"),
              ].map((txt, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  {txt}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
