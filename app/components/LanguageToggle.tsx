"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { altUrl, localePath, useI18n, type Lang } from "@/app/lib/i18n";

const ROUTE_NAMES: Record<Lang, string> = { en: "EN", es: "ES" };

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang } = useI18n();
  const pathname = usePathname() ?? "/";

  // For each lang, the URL that takes the user to that language's version
  // of the same page they're on.
  const targetFor = (target: Lang): string => {
    if (target === lang) return pathname;
    return altUrl(pathname, lang);
  };

  return (
    <div
      className={`inline-flex items-center bg-white border border-line rounded-full p-0.5 shadow-qf-xs ${
        compact ? "" : "ml-1"
      }`}
    >
      {(["en", "es"] as const).map((l) => {
        const active = l === lang;
        const href = active ? localePath(pathname.replace(/^\/es/, "") || "/", l) : targetFor(l);
        return (
          <Link
            key={l}
            href={href}
            aria-current={active ? "true" : undefined}
            className={`px-2.5 py-1 text-[12px] font-bold rounded-full transition focus-ring ${
              active ? "bg-ink text-white" : "text-ink-muted hover:text-ink"
            }`}
          >
            {ROUTE_NAMES[l]}
          </Link>
        );
      })}
    </div>
  );
}
