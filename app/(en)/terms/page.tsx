import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";
import { TERMS } from "@/app/lib/legal";
import { LegalPage } from "@/app/components/LegalPage";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.en.terms;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "en",
});

export default function Page() {
  return (
    <>
      <LegalPage doc={TERMS} />
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
