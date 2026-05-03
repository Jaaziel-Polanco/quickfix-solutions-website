"use client";

import { BUSINESS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { Message, Phone } from "@/app/components/icons";

export function StickyMobileCTA() {
  const { t } = useI18n();
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur border-t border-line p-3 flex gap-2 shadow-qf-lg">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="flex-1 btn-primary rounded-lg py-3.5 font-semibold text-[15px] flex items-center justify-center gap-2 focus-ring"
      >
        <Phone size={18} /> {t("cta_call")}
      </a>
      <a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 btn-secondary rounded-lg py-3.5 font-semibold text-[15px] flex items-center justify-center gap-2 focus-ring"
      >
        <Message size={18} /> WhatsApp
      </a>
    </div>
  );
}
