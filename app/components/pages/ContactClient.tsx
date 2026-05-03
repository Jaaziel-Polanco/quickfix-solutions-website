"use client";

import Image from "next/image";
import { useI18n } from "@/app/lib/i18n";
import { PageHero } from "@/app/components/PageHero";
import { ContactSection } from "@/app/components/sections/Contact";

export function ContactClient() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("contact_eyebrow")} h1={t("contact_h2")} intro={t("pg_contact_intro")} />

      <section className="bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="reveal rounded-3xl border border-line shadow-qf-sm overflow-hidden bg-white">
            <Image
              src="/quickfix-contact-card.png"
              alt="QuickFix Solutions — call or text +1 (267) 377-0569 to schedule a diagnostic visit"
              width={1200}
              height={1200}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
