import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";
import { ServicesIndexClient } from "@/app/components/pages/ServicesIndexClient";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.es.servicesIndex;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "es",
});

export default function Page() {
  return (
    <>
      <ServicesIndexClient />
      <BreadcrumbsJsonLd
        lang="es"
        items={[
          { name: "Inicio", path: "/" },
          { name: seo.h1, path: seo.path },
        ]}
      />
    </>
  );
}
