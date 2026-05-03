import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";
import { AboutClient } from "@/app/components/pages/AboutClient";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.en.about;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "en",
});

export default function Page() {
  return (
    <>
      <AboutClient />
      <BreadcrumbsJsonLd
        lang="en"
        items={[
          { name: "Home", path: "/" },
          { name: seo.h1, path: seo.path },
        ]}
      />
    </>
  );
}
