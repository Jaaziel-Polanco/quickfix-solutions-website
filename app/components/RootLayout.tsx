import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/app/lib/i18n";
import type { Lang } from "@/app/lib/locale";
import { Shell } from "@/app/components/Shell";
import { LocalBusinessJsonLd } from "@/app/components/seo/LocalBusinessJsonLd";
import { WebSiteJsonLd } from "@/app/components/seo/WebSiteJsonLd";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/**
 * Shared root layout body for both EN and ES root layouts.
 * Each root layout (`app/(en)/layout.tsx`, `app/(es)/layout.tsx`) calls this
 * with its own `lang` so the <html lang> and i18n context match the URL tree.
 */
export function RootLayoutShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <I18nProvider lang={lang}>
          <Shell>{children}</Shell>
        </I18nProvider>
        <LocalBusinessJsonLd lang={lang} />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
