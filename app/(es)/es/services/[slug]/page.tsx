import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findService, SERVICES } from "@/app/lib/business";
import { abs, pageMetadata, SERVICE_SEO } from "@/app/lib/seo";
import { localePath } from "@/app/lib/locale";
import { ServicePageClient } from "@/app/components/pages/ServicePageClient";
import { ServiceJsonLd } from "@/app/components/seo/ServiceJsonLd";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  const seo = SERVICE_SEO.es[service.slug];
  return pageMetadata({
    title: seo.title,
    description: seo.description,
    enPath: `/services/${service.slug}`,
    lang: "es",
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  const seo = SERVICE_SEO.es[service.slug];
  const enPath = `/services/${service.slug}`;
  return (
    <>
      <ServicePageClient slug={service.slug} />
      <ServiceJsonLd
        name={seo.h1}
        serviceType={service.serviceType}
        description={seo.description}
        url={abs(localePath(enPath, "es"))}
      />
      <BreadcrumbsJsonLd
        lang="es"
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/services" },
          { name: seo.h1, path: enPath },
        ]}
      />
    </>
  );
}
