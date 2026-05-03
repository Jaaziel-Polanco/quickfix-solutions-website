import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";
import { ReviewsClient } from "@/app/components/pages/ReviewsClient";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.es.reviews;

export const metadata: Metadata = {
  ...pageMetadata({
    title: seo.title,
    description: seo.description,
    enPath: seo.path,
    lang: "es",
  }),
  // Noindex hasta que existan reseñas reales — evita señal de thin-content.
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function Page() {
  return (
    <>
      <ReviewsClient />
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
