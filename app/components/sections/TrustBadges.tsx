"use client";

import { TRUST_BADGES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { iconFor } from "@/app/components/icons";

export function TrustBadgesSection() {
  const { t } = useI18n();
  return (
    <section className="border-b border-line bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_BADGES.map((b, i) => (
            <div
              key={b.titleKey}
              className="reveal flex flex-col items-start gap-3"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-green-soft text-green flex items-center justify-center">
                {iconFor(b.icon, { size: 22, strokeWidth: 2 })}
              </div>
              <div>
                <div className="text-[16px] font-semibold text-ink leading-tight">
                  {t(b.titleKey)}
                </div>
                <div className="text-[14px] text-ink-soft leading-snug mt-1">{t(b.subKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
