"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { Minus, Plus } from "@/app/components/icons";

export function FAQSection() {
  const { t } = useI18n();
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section data-screen-label="FAQ" id="faq" className="bg-surface-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow text-orange mb-3">{t("faq_eyebrow")}</div>
          <h2 className="h2 text-[28px] sm:text-[36px] text-ink">{t("faq_h2")}</h2>
        </div>
        <div className="bg-white border border-line rounded-2xl px-5 sm:px-7 reveal reveal-delay-2 shadow-qf-sm">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={item.qKey} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between py-5 text-left focus-ring rounded-md px-1"
                >
                  <span className="text-[17px] sm:text-[18px] font-semibold text-ink pr-6">
                    {t(item.qKey)}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center transition-colors ${
                      open ? "bg-orange border-orange text-white" : "bg-white text-ink"
                    }`}
                  >
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div className={`accordion-content ${open ? "open" : ""}`}>
                  <div className="accordion-inner">
                    <p className="text-ink-soft leading-relaxed pb-6 pr-12 max-w-prose">
                      {t(item.aKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
