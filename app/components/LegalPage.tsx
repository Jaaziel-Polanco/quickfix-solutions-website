"use client";

import Link from "next/link";
import { useI18n } from "@/app/lib/i18n";
import { type LegalDoc } from "@/app/lib/legal";
import { PageHero } from "@/app/components/PageHero";

type Props = {
  /** Eyebrow label key, e.g. "foot_legal". */
  eyebrowKey?: string;
  /** Bilingual content keyed by language. */
  doc: Record<"en" | "es", LegalDoc>;
};

export function LegalPage({ eyebrowKey = "foot_legal", doc }: Props) {
  const { t, lang, localePath } = useI18n();
  const d = doc[lang] ?? doc.en;

  return (
    <>
      <PageHero eyebrow={t(eyebrowKey)} h1={d.title} intro={d.lastUpdated}>
        <p className="text-[16px] text-ink-soft leading-relaxed max-w-[68ch]">{d.intro}</p>
      </PageHero>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-8">
            {d.sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-ink mb-3">{s.h}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="text-[16px] text-ink-soft leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-line text-[14px] text-ink-muted">
            <Link href={localePath("/")} className="hover:text-ink transition">
              ← {t("page_back_home")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
