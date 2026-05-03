"use client";

import Link from "next/link";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { Logo } from "@/app/components/Logo";
import { Facebook, Instagram, Message, Phone } from "@/app/components/icons";

export function Footer() {
  const { t, localePath } = useI18n();
  return (
    <footer className="bg-surface-dark text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo variant="onDark" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/65 max-w-xs">
              {t("foot_tagline")}
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-orange transition font-semibold"
              >
                <Phone size={18} /> {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition"
              >
                <Message size={18} /> WhatsApp
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition break-all"
              >
                <span className="inline-block w-[18px] text-center">@</span>
                <span>{BUSINESS.email}</span>
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BUSINESS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QuickFix Solutions on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center text-white transition focus-ring"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="QuickFix Solutions on Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center text-white transition focus-ring"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="text-white font-semibold text-[14px] mb-4">{t("foot_services")}</div>
            <ul className="space-y-2.5 text-[14px]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={localePath(`/services/${s.slug}`)}
                    className="text-white/65 hover:text-white transition"
                  >
                    {t(`svc_${s.id}_t`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="text-white font-semibold text-[14px] mb-4">{t("nav_areas")}</div>
            <ul className="space-y-2.5 text-[14px]">
              {SERVICE_AREAS.slice(0, 8).map((c) => (
                <li key={c}>
                  <Link
                    href={localePath("/service-areas")}
                    className="text-white/65 hover:text-white transition"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="text-white font-semibold text-[14px] mb-4">{t("foot_company")}</div>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link
                  href={localePath("/about")}
                  className="text-white/65 hover:text-white transition"
                >
                  {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/landlords-property-managers")}
                  className="text-white/65 hover:text-white transition"
                >
                  {t("nav_landlords")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/reviews")}
                  className="text-white/65 hover:text-white transition"
                >
                  {t("nav_reviews")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/faq")}
                  className="text-white/65 hover:text-white transition"
                >
                  {t("nav_faq")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/contact")}
                  className="text-white/65 hover:text-white transition"
                >
                  {t("nav_contact")}
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-[12px] text-white/50 leading-relaxed">{t("hours_value")}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/10">
          <p className="text-[13px] text-white/55 italic max-w-3xl">{t("foot_residential")}</p>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-white/45">
            <div>
              © {new Date().getFullYear()} {BUSINESS.name}. {t("foot_rights")}
            </div>
            <div className="flex gap-5">
              <Link href={localePath("/privacy")} className="hover:text-white/70">
                {t("foot_privacy")}
              </Link>
              <Link href={localePath("/terms")} className="hover:text-white/70">
                {t("foot_terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
