import type { Metadata } from "next";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/app/lib/business";
import type { Lang } from "@/app/lib/locale";
import { localePath } from "@/app/lib/locale";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://quickfixsolutions.services"
).replace(/\/$/, "");

export const SEO = {
  siteName: BUSINESS.name,
  siteUrl: SITE_URL,
  defaultTitle: `Appliance Repair in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
  titleTemplate: `%s | ${BUSINESS.name}`,
  defaultDescription:
    "Local residential appliance repair for washers, dryers, refrigerators, freezers, and gas or electric stoves. Next-day service in most cases. Diagnostic starts at $50 within 5 miles.",
  ogImage: "/og-image.png",
  ogImageWidth: 1731,
  ogImageHeight: 909,
} as const;

/** Absolute URL for a relative path. */
export function abs(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Canonical EN path, e.g. "/services". The helper computes /es/services automatically. */
  enPath: string;
  /** Language being rendered. */
  lang: Lang;
  ogImage?: string;
};

const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  es: "es_ES",
};

/**
 * Build a Metadata object with canonical URL, OpenGraph, Twitter card,
 * and `alternates.languages` (hreflang) for both EN and ES versions.
 */
export function pageMetadata({
  title,
  description,
  enPath,
  lang,
  ogImage,
}: PageMetaInput): Metadata {
  const canonical = abs(localePath(enPath, lang));
  const enUrl = abs(enPath);
  const esUrl = abs(localePath(enPath, "es"));
  const image = ogImage || SEO.ogImage;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        "en-US": enUrl,
        es: esUrl,
        "es-US": esUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SEO.siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: SEO.ogImageWidth,
          height: SEO.ogImageHeight,
          alt: `${SEO.siteName} — Residential Appliance Repair in Pennsylvania`,
        },
      ],
      locale: OG_LOCALE[lang],
      alternateLocale: lang === "en" ? ["es_ES"] : ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

type PageCopy = { title: string; description: string; h1: string; path: string };

/** Per-page SEO copy for both languages. `path` is the canonical EN path. */
export const PAGE_SEO: Record<Lang, Record<
  | "home"
  | "about"
  | "servicesIndex"
  | "serviceAreas"
  | "landlords"
  | "faq"
  | "reviews"
  | "contact"
  | "terms"
  | "privacy",
  PageCopy
>> = {
  en: {
    home: {
      title: `Appliance Repair in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Local residential appliance repair for washers, dryers, refrigerators, freezers, and gas or electric stoves. Next-day service in most cases. Diagnostic starts at $50 within 5 miles.",
      h1: "Fast, reliable appliance repair near you",
      path: "/",
    },
    about: {
      title: `About QuickFix Solutions | Local Appliance Repair in ${BUSINESS.serviceState}`,
      description:
        "QuickFix Solutions is a local service-area residential appliance repair business in Pennsylvania. We do not operate a public storefront — service is provided at the customer's location.",
      h1: "About QuickFix Solutions",
      path: "/about",
    },
    servicesIndex: {
      title: `Residential Appliance Repair Services | ${BUSINESS.name}`,
      description:
        "Washer, dryer, refrigerator, freezer, gas stove, and electric stove repair for local Pennsylvania homeowners, landlords, and property managers.",
      h1: "Residential Appliance Repair Services",
      path: "/services",
    },
    serviceAreas: {
      title: `Appliance Repair Service Area in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential appliance repair across nearby Pennsylvania communities including Upper Darby, Drexel Hill, Lansdowne, Havertown, West Philadelphia, and surrounding areas.",
      h1: "Appliance Repair Service Area",
      path: "/service-areas",
    },
    landlords: {
      title: `Appliance Repair for Landlords and Property Managers | ${BUSINESS.name}`,
      description:
        "Residential appliance repair support for landlords and property managers. Washer, dryer, refrigerator, freezer, and stove repair for rental properties.",
      h1: "Appliance Repair for Landlords and Property Managers",
      path: "/landlords-property-managers",
    },
    faq: {
      title: `Appliance Repair FAQ | ${BUSINESS.name}`,
      description:
        "Answers to common questions about residential appliance repair: scheduling, diagnostic fee, warranty, parts, and what we service.",
      h1: "Frequently Asked Questions",
      path: "/faq",
    },
    reviews: {
      title: `Customer Reviews | ${BUSINESS.name}`,
      description:
        "Customer reviews for QuickFix Solutions are coming soon. We're building our local Pennsylvania reputation one repair at a time and don't post stock testimonials.",
      h1: "Customer reviews coming soon.",
      path: "/reviews",
    },
    contact: {
      title: `Request Appliance Repair Service | ${BUSINESS.name}`,
      description:
        "Call, text, or request residential appliance repair service for washers, dryers, refrigerators, freezers, and gas or electric stoves.",
      h1: "Request Appliance Repair Service",
      path: "/contact",
    },
    terms: {
      title: `Terms of Service | ${BUSINESS.name}`,
      description: `Terms of Service for ${BUSINESS.name} — residential appliance repair across Pennsylvania.`,
      h1: "Terms of Service",
      path: "/terms",
    },
    privacy: {
      title: `Privacy Policy | ${BUSINESS.name}`,
      description: `Privacy Policy for ${BUSINESS.name} — what we collect from contact requests, how we use it, sharing, retention, and your choices.`,
      h1: "Privacy Policy",
      path: "/privacy",
    },
  },
  es: {
    home: {
      title: `Reparación de Electrodomésticos en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial local de electrodomésticos: lavadoras, secadoras, refrigeradores, congeladores y estufas de gas o eléctricas. Servicio al día siguiente en la mayoría de casos. Diagnóstico desde $50 dentro de 5 millas.",
      h1: "Reparación rápida y confiable de electrodomésticos cerca de ti",
      path: "/",
    },
    about: {
      title: `Acerca de QuickFix Solutions | Reparación Local en ${BUSINESS.serviceState}`,
      description:
        "QuickFix Solutions es un negocio local de área de servicio para reparación residencial de electrodomésticos en Pensilvania. No operamos una tienda física — el servicio se brinda en la ubicación del cliente.",
      h1: "Acerca de QuickFix Solutions",
      path: "/about",
    },
    servicesIndex: {
      title: `Servicios de Reparación de Electrodomésticos Residenciales | ${BUSINESS.name}`,
      description:
        "Reparación de lavadoras, secadoras, refrigeradores, congeladores, estufas de gas y eléctricas para propietarios, landlords y administradores en Pensilvania.",
      h1: "Servicios de Reparación de Electrodomésticos Residenciales",
      path: "/services",
    },
    serviceAreas: {
      title: `Zona de Servicio de Reparación de Electrodomésticos en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de electrodomésticos en comunidades cercanas de Pensilvania: Upper Darby, Drexel Hill, Lansdowne, Havertown, West Philadelphia y áreas vecinas.",
      h1: "Zona de Servicio de Reparación de Electrodomésticos",
      path: "/service-areas",
    },
    landlords: {
      title: `Reparación de Electrodomésticos para Landlords y Administradores | ${BUSINESS.name}`,
      description:
        "Soporte de reparación residencial de electrodomésticos para landlords y administradores de propiedades. Lavadoras, secadoras, refrigeradores, congeladores y estufas para inmuebles en alquiler.",
      h1: "Reparación de Electrodomésticos para Landlords y Administradores",
      path: "/landlords-property-managers",
    },
    faq: {
      title: `Preguntas Frecuentes de Reparación | ${BUSINESS.name}`,
      description:
        "Respuestas a preguntas comunes sobre reparación residencial de electrodomésticos: programación, tarifa de diagnóstico, garantía, piezas y qué atendemos.",
      h1: "Preguntas Frecuentes",
      path: "/faq",
    },
    reviews: {
      title: `Reseñas de Clientes | ${BUSINESS.name}`,
      description:
        "Las reseñas de clientes para QuickFix Solutions están por venir. Construimos nuestra reputación local en Pensilvania una reparación a la vez y no publicamos testimonios genéricos.",
      h1: "Reseñas de clientes — pronto.",
      path: "/reviews",
    },
    contact: {
      title: `Solicitar Servicio de Reparación de Electrodomésticos | ${BUSINESS.name}`,
      description:
        "Llama, escribe por WhatsApp o solicita servicio residencial de reparación de electrodomésticos: lavadoras, secadoras, refrigeradores, congeladores y estufas de gas o eléctricas.",
      h1: "Solicitar Servicio de Reparación",
      path: "/contact",
    },
    terms: {
      title: `Términos del Servicio | ${BUSINESS.name}`,
      description: `Términos del Servicio de ${BUSINESS.name} — reparación residencial de electrodomésticos en Pensilvania.`,
      h1: "Términos del Servicio",
      path: "/terms",
    },
    privacy: {
      title: `Política de Privacidad | ${BUSINESS.name}`,
      description: `Política de Privacidad de ${BUSINESS.name} — qué recopilamos en solicitudes de contacto, cómo lo usamos, compartir, retención y tus opciones.`,
      h1: "Política de Privacidad",
      path: "/privacy",
    },
  },
};

type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const SERVICE_SEO: Record<Lang, Record<ServiceSlug, { title: string; description: string; h1: string }>> = {
  en: {
    "washer-repair": {
      title: `Washer Repair Service in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential washer repair for draining, spinning, leaking, noise, and startup issues. Diagnostic starts at $50 within 5 miles and goes toward the repair.",
      h1: "Washer Repair Service",
    },
    "dryer-repair": {
      title: `Dryer Repair Service in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential dryer repair for heating, drying, noise, startup, and drum issues. Next-day service in most cases with a 30-day labor warranty.",
      h1: "Dryer Repair Service",
    },
    "refrigerator-repair": {
      title: `Refrigerator Repair Service in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential refrigerator repair for cooling problems, leaks, noises, ice buildup, and temperature issues. Call or text to request service.",
      h1: "Refrigerator Repair Service",
    },
    "freezer-repair": {
      title: `Freezer Repair Service in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential freezer repair for freezing issues, frost buildup, leaks, noise, and temperature problems. Diagnostic fee goes toward approved repairs.",
      h1: "Freezer Repair Service",
    },
    "gas-stove-repair": {
      title: `Gas Stove Repair Service in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential gas stove repair for burner, ignition, heating, and performance issues. If you smell gas, leave the area and contact your gas provider or emergency services.",
      h1: "Gas Stove Repair Service",
    },
    "electric-stove-repair": {
      title: `Electric Stove Repair Service in ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Residential electric stove repair for burner, oven heating, control panel, and temperature issues. Call or text to schedule a diagnostic visit.",
      h1: "Electric Stove Repair Service",
    },
  },
  es: {
    "washer-repair": {
      title: `Reparación de Lavadoras en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de lavadoras: drenaje, centrifugado, fugas, ruido y problemas de encendido. Diagnóstico desde $50 dentro de 5 millas, acreditable a la reparación.",
      h1: "Reparación de Lavadoras",
    },
    "dryer-repair": {
      title: `Reparación de Secadoras en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de secadoras: calor, tiempos de secado, ruido, encendido y tambor. Servicio al día siguiente en la mayoría de casos con 30 días de garantía en mano de obra.",
      h1: "Reparación de Secadoras",
    },
    "refrigerator-repair": {
      title: `Reparación de Refrigeradores en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de refrigeradores: enfriamiento, fugas, ruidos, acumulación de hielo y problemas de temperatura. Llama o escríbenos para solicitar servicio.",
      h1: "Reparación de Refrigeradores",
    },
    "freezer-repair": {
      title: `Reparación de Congeladores en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de congeladores: problemas de congelación, escarcha, fugas, ruido y temperatura. La tarifa de diagnóstico se acredita a la reparación aprobada.",
      h1: "Reparación de Congeladores",
    },
    "gas-stove-repair": {
      title: `Reparación de Estufas de Gas en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de estufas de gas: quemador, encendido, calor y desempeño. Si hueles gas, sal del área y contacta a tu proveedor o servicios de emergencia.",
      h1: "Reparación de Estufas de Gas",
    },
    "electric-stove-repair": {
      title: `Reparación de Estufas Eléctricas en ${BUSINESS.serviceState} | ${BUSINESS.name}`,
      description:
        "Reparación residencial de estufas eléctricas: quemadores, calor del horno, panel de control y temperatura. Llama o escribe para agendar una visita de diagnóstico.",
      h1: "Reparación de Estufas Eléctricas",
    },
  },
};

/** All canonical site routes (EN paths). Sitemap renders both EN and ES versions. */
export const ALL_ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/landlords-property-managers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  // /reviews omitted from sitemap — page is noindex until real reviews exist.
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export { SERVICE_AREAS };
