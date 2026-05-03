"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS, NAV_LINKS } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { Logo } from "@/app/components/Logo";
import { LanguageToggle } from "@/app/components/LanguageToggle";
import { Menu, Phone, X } from "@/app/components/icons";

export function Header() {
  const { t, localePath } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Close the drawer when the route changes — pathname is the external signal
    // (Next.js navigation), so a one-shot setState on change is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-ink text-white px-3 py-2 rounded-md"
      >
        {t("skip_link")}
      </a>
      <header
        className={`sticky top-0 z-40 transition-all ${scrolled ? "header-scrolled" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] lg:h-[88px] flex items-center justify-between gap-4 lg:gap-6">
          <Logo compact={scrolled} />

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((l) => {
              const href = localePath(l.href);
              const active = pathname === href;
              return (
                <Link
                  key={l.href}
                  href={href}
                  className={`text-[14px] xl:text-[15px] font-medium whitespace-nowrap transition focus-ring rounded ${
                    active ? "text-orange" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {t(l.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <LanguageToggle />
            <CTAButton
              variant="primary"
              icon="Phone"
              size="sm"
              href={`tel:${BUSINESS.phoneRaw}`}
              ariaLabel={`${t("cta_call")} ${BUSINESS.phone}`}
            >
              <span className="whitespace-nowrap hidden xl:inline">{BUSINESS.phone}</span>
              <span className="whitespace-nowrap xl:hidden">{t("cta_call")}</span>
            </CTAButton>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle compact />
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              aria-label={`${t("cta_call")} ${BUSINESS.phone}`}
              className="w-11 h-11 rounded-full btn-primary flex items-center justify-center focus-ring"
            >
              <Phone size={20} strokeWidth={2} />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={t("menu")}
              className="w-11 h-11 rounded-full border border-line bg-white flex items-center justify-center focus-ring"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer-overlay fixed inset-0 z-50 bg-black/50 ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`drawer fixed top-0 right-0 h-full w-[86%] max-w-sm bg-white z-50 shadow-qf-lg flex flex-col ${
          drawerOpen ? "open" : ""
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="h-[80px] flex items-center justify-between px-5 border-b border-line">
          <Logo compact />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label={t("close")}
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center focus-ring"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={localePath(l.href)}
              onClick={() => setDrawerOpen(false)}
              className="block px-6 py-4 text-[18px] font-semibold text-ink border-b border-line hover:bg-surface-alt"
            >
              {t(l.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="p-5 space-y-3 border-t border-line bg-surface-alt">
          <CTAButton variant="primary" icon="Phone" full size="lg" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="secondary" icon="Message" full href={BUSINESS.whatsappUrl}>
            {t("cta_text")}
          </CTAButton>
          <p className="text-[13px] text-ink-muted text-center pt-1">{t("hours_value")}</p>
        </div>
      </aside>
    </>
  );
}
