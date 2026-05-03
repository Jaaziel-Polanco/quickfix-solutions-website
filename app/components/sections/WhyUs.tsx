"use client";

import { BUSINESS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import {
  Calendar,
  Check,
  Clock,
  Message,
  Phone,
  Receipt,
  Shield,
  Star,
} from "@/app/components/icons";
import type { ComponentType } from "react";

type IconC = ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;

const ITEMS: { Icon: IconC; tk: string; bk: string }[] = [
  { Icon: Star,     tk: "why_1_t", bk: "why_1_b" },
  { Icon: Receipt,  tk: "why_2_t", bk: "why_2_b" },
  { Icon: Calendar, tk: "why_3_t", bk: "why_3_b" },
  { Icon: Check,    tk: "why_4_t", bk: "why_4_b" },
  { Icon: Shield,   tk: "why_5_t", bk: "why_5_b" },
  { Icon: Phone,    tk: "why_6_t", bk: "why_6_b" },
];

export function WhyUsSection() {
  const { t } = useI18n();
  return (
    <section className="bg-white relative overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-orange-soft blur-3xl opacity-40 float-blob pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-10 lg:mb-14 reveal">
          <div className="eyebrow text-orange mb-3">{t("why_eyebrow")}</div>
          <h2 className="h2 text-[28px] sm:text-[36px] lg:text-[40px] text-ink">{t("why_h2")}</h2>
          <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">{t("why_sub")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map(({ Icon, tk, bk }, i) => (
            <div
              key={tk}
              className="reveal p-6 rounded-2xl bg-white border border-line shadow-qf-xs hover:shadow-qf-md hover:-translate-y-1 hover:border-orange/40 transition"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-orange-soft text-orange flex items-center justify-center mb-4">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{t(tk)}</h3>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{t(bk)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-5 sm:p-6 rounded-2xl bg-ink text-white">
          <div className="flex items-center gap-3 flex-1">
            <span className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0">
              <Clock size={20} strokeWidth={2} />
            </span>
            <p className="text-[15px] sm:text-[16px] text-white/90 leading-snug">{t("why_cta")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="btn-primary rounded-lg px-5 py-3 font-semibold text-[15px] inline-flex items-center justify-center gap-2 focus-ring"
            >
              <Phone size={18} /> {t("cta_call")} {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-3 font-semibold text-[15px] inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white/15 focus-ring transition"
            >
              <Message size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
