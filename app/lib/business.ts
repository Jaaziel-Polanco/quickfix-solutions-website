// Env-overridable contact + brand details. Defaults are the live values.
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(267) 377-0569";
const PHONE_E164 = process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 || "+12673770569";
// WhatsApp click-to-chat uses the E.164 number without the leading "+".
const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_URL ||
  `https://wa.me/${PHONE_E164.replace(/^\+/, "")}`;

export const BUSINESS = {
  name: "QuickFix Solutions",
  phone: PHONE_DISPLAY,
  phoneRaw: PHONE_E164,
  /** Click-to-chat URL. We use WhatsApp for all "text/message" CTAs. */
  whatsappUrl: WHATSAPP_URL,
  email: "quickfixsolutions01@outlook.es",
  /**
   * Confirmed by the owner. We accept call/text/WhatsApp at any time, but we
   * are NOT a 24/7 emergency repair service — visits happen during normal
   * working hours. Copy must reflect "online intake 24/7", never "24/7 service".
   */
  hours: "Online requests open 24/7",
  serviceState: "Pennsylvania",
  primaryArea:
    "Philadelphia, Upper Darby, Delaware County, and surrounding Pennsylvania communities",
  diagnosticFee:
    "Diagnostic starts at $50 within 5 miles and varies by distance for longer trips. If you approve the repair, the fee is applied to the total.",
  warranty: "30-day labor warranty on the repair we performed.",
  availability:
    "Next-day service in most cases, with same-day availability when scheduling allows.",
  googleReviewUrl: "",
  socials: {
    instagram: "https://www.instagram.com/quickfix__solutions",
    facebook: "https://www.facebook.com/profile.php?id=61588849576742",
  },
} as const;

export type IconName =
  | "Washer" | "Wind" | "Fridge" | "Snow" | "Flame" | "CookingPot"
  | "Calendar" | "Zap" | "Receipt" | "Shield" | "Phone" | "Message"
  | "AlertCircle" | "MapPin" | "Star" | "Clock" | "House" | "Building" | "Wrench";

export type ServiceId = "washer" | "dryer" | "fridge" | "freezer" | "gas" | "electric";

export type ServiceMeta = {
  id: ServiceId;
  icon: IconName;
  /** URL slug: /services/{slug} */
  slug:
    | "washer-repair"
    | "dryer-repair"
    | "refrigerator-repair"
    | "freezer-repair"
    | "gas-stove-repair"
    | "electric-stove-repair";
  /** schema.org Service.serviceType */
  serviceType: string;
};

export const SERVICES: readonly ServiceMeta[] = [
  { id: "washer",   icon: "Washer",     slug: "washer-repair",         serviceType: "Washer Repair" },
  { id: "dryer",    icon: "Wind",       slug: "dryer-repair",          serviceType: "Dryer Repair" },
  { id: "fridge",   icon: "Fridge",     slug: "refrigerator-repair",   serviceType: "Refrigerator Repair" },
  { id: "freezer",  icon: "Snow",       slug: "freezer-repair",        serviceType: "Freezer Repair" },
  { id: "gas",      icon: "Flame",      slug: "gas-stove-repair",      serviceType: "Gas Stove Repair" },
  { id: "electric", icon: "CookingPot", slug: "electric-stove-repair", serviceType: "Electric Stove Repair" },
];

export function findService(slug: string): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/**
 * Header nav scrolls to landing-page anchors (smooth) instead of opening the
 * dedicated sub-routes. The sub-routes still exist (`/services`, `/faq`, etc.)
 * so search engines and AI crawlers can index them as standalone pages.
 */
export const NAV_LINKS = [
  { labelKey: "nav_services",  href: "/#services" },
  { labelKey: "nav_areas",     href: "/#areas" },
  { labelKey: "nav_landlords", href: "/#landlords" },
  { labelKey: "nav_reviews",   href: "/#reviews" },
  { labelKey: "nav_faq",       href: "/#faq" },
  { labelKey: "nav_contact",   href: "/#contact" },
] as const;

export const TRUST_BADGES = [
  { icon: "Calendar", titleKey: "trust_nextday_t", subKey: "trust_nextday_s" },
  { icon: "Zap",      titleKey: "trust_sameday_t", subKey: "trust_sameday_s" },
  { icon: "Receipt",  titleKey: "trust_diag_t",    subKey: "trust_diag_s" },
  { icon: "Shield",   titleKey: "trust_warranty_t", subKey: "trust_warranty_s" },
] as const satisfies ReadonlyArray<{ icon: IconName; titleKey: string; subKey: string }>;

export const EXCLUSIONS_KEYS = [
  "exc_commercial",
  "exc_microwaves",
  "exc_blenders",
  "exc_fryers",
  "exc_small",
  "exc_parts",
] as const;

// Aligned with the SEO requirements doc (Delaware County / W. Philly focus).
export const SERVICE_AREAS = [
  "Upper Darby, PA",
  "Drexel Hill, PA",
  "Lansdowne, PA",
  "Yeadon, PA",
  "Havertown, PA",
  "Clifton Heights, PA",
  "Darby, PA",
  "Springfield, PA",
  "Media, PA",
  "Broomall, PA",
  "Ardmore, PA",
  "Wynnewood, PA",
  "Bala Cynwyd, PA",
  "Swarthmore, PA",
  "West Philadelphia, PA",
  "Philadelphia, PA",
] as const;

export const LANDLORD_STEPS = [
  { n: "01", titleKey: "ll_step1_t", bodyKey: "ll_step1_b" },
  { n: "02", titleKey: "ll_step2_t", bodyKey: "ll_step2_b" },
  { n: "03", titleKey: "ll_step3_t", bodyKey: "ll_step3_b" },
  { n: "04", titleKey: "ll_step4_t", bodyKey: "ll_step4_b" },
  { n: "05", titleKey: "ll_step5_t", bodyKey: "ll_step5_b" },
] as const;

export const FAQ_ITEMS = [
  { qKey: "faq_q1", aKey: "faq_a1" },
  { qKey: "faq_q2", aKey: "faq_a2" },
  { qKey: "faq_q3", aKey: "faq_a3" },
  { qKey: "faq_q4", aKey: "faq_a4" },
  { qKey: "faq_q5", aKey: "faq_a5" },
] as const;
