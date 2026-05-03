"use client";

import { BUSINESS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { ArrowRight, Clock, Message, Phone } from "@/app/components/icons";
import { LeadForm } from "@/app/components/LeadForm";

export function ContactSection() {
  const { t } = useI18n();
  return (
    <section data-screen-label="Contact" id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="eyebrow text-orange mb-3">{t("contact_eyebrow")}</div>
            <h2 className="h2 text-[28px] sm:text-[36px] text-ink">{t("contact_h2")}</h2>
            <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("contact_sub")}</p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-line hover:border-orange transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-soft text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] text-ink-muted font-medium uppercase tracking-wider">
                    {t("cta_call")}
                  </div>
                  <div className="text-[18px] font-bold text-ink">{BUSINESS.phone}</div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-ink-muted group-hover:text-orange group-hover:translate-x-1 transition"
                />
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-line hover:border-orange transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-soft text-green flex items-center justify-center group-hover:bg-green group-hover:text-white transition">
                  <Message size={20} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] text-ink-muted font-medium uppercase tracking-wider">
                    {t("text_label")}
                  </div>
                  <div className="text-[18px] font-bold text-ink">{BUSINESS.phone}</div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-ink-muted group-hover:text-orange group-hover:translate-x-1 transition"
                />
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-line">
                <div className="w-12 h-12 rounded-xl bg-surface-alt text-ink-soft flex items-center justify-center">
                  <Clock size={20} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[13px] text-ink-muted font-medium uppercase tracking-wider">
                    {t("hours_label")}
                  </div>
                  <div className="text-[16px] font-semibold text-ink">{t("hours_value")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-surface-alt border border-line rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-[22px] sm:text-[24px] font-bold text-ink">{t("contact_h2")}</h3>
              <p className="mt-2 text-[15px] text-ink-soft mb-6">{t("contact_sub")}</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
