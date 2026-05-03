import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/app/lib/business";
import { SITE_URL } from "@/app/lib/seo";
import type { Lang } from "@/app/lib/locale";

const DESCRIPTION: Record<Lang, string> = {
  en: "Residential appliance repair specialists serving Pennsylvania. We focus on washers, dryers, refrigerators, freezers, and gas/electric stoves. Diagnostic starts at $50 within 5 miles and is credited toward the repair. 30-day labor warranty. Same-day or next-day scheduling when available. Direct phone or WhatsApp contact in English and Spanish.",
  es: "Especialistas en reparación residencial de electrodomésticos en Pensilvania. Nos enfocamos en lavadoras, secadoras, refrigeradores, congeladores y estufas de gas/eléctricas. Diagnóstico desde $50 dentro de 5 millas, acreditable a la reparación. Garantía de 30 días en mano de obra. Programación el mismo día o al siguiente cuando hay disponibilidad. Contacto directo por teléfono o WhatsApp en inglés y español.",
};

const SLOGAN: Record<Lang, string> = {
  en: "Honest residential appliance repair across Pennsylvania.",
  es: "Reparación residencial honesta de electrodomésticos en Pensilvania.",
};

/**
 * Inserts schema.org LocalBusiness JSON-LD.
 * - No address (service-area business; no public physical address).
 * - No aggregateRating (no real reviews collected yet).
 * - No openingHours (hours are subject to change; we don't lock them in markup).
 */
export function LocalBusinessJsonLd({ lang = "en" }: { lang?: Lang }) {
  const id = `${SITE_URL}/#business`;
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": id,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    description: DESCRIPTION[lang],
    slogan: SLOGAN[lang],
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    url: SITE_URL,
    image: [
      `${SITE_URL}/og-image.png`,
      `${SITE_URL}/quickfix-social-square.png`,
      `${SITE_URL}/logoquickfix.png`,
    ],
    logo: `${SITE_URL}/logoquickfix.png`,
    knowsLanguage: ["en", "es"],
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city.replace(/, PA$/, ""),
      containedInPlace: { "@type": "State", name: "Pennsylvania" },
    })),
    serviceType: SERVICES.map((s) => s.serviceType),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Appliance Repair Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.serviceType,
          serviceType: s.serviceType,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phoneRaw,
        contactType: "customer service",
        areaServed: "US-PA",
        availableLanguage: ["en", "es"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
          description:
            "Online intake (call, text, WhatsApp, contact form) is accepted any time. On-site visits are scheduled during normal working hours; this is not a 24/7 emergency repair service.",
        },
      },
      {
        "@type": "ContactPoint",
        url: BUSINESS.whatsappUrl,
        contactType: "customer support",
        areaServed: "US-PA",
        availableLanguage: ["en", "es"],
      },
    ],
    sameAs: [BUSINESS.socials.instagram, BUSINESS.socials.facebook],
    audience: {
      "@type": "Audience",
      audienceType: "Homeowners, Tenants, Landlords, Property Managers",
    },
    priceRange: "$$",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
