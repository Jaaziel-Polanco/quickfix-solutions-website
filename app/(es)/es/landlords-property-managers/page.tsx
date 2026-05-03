import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";
import { LandlordsClient } from "@/app/components/pages/LandlordsClient";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.es.landlords;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "es",
});

export default function Page() {
  return (
    <>
      <LandlordsClient />
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
