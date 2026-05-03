import type { Metadata } from "next";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";
import { ReviewsClient } from "@/app/components/pages/ReviewsClient";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.en.reviews;

export const metadata: Metadata = {
  ...pageMetadata({
    title: seo.title,
    description: seo.description,
    enPath: seo.path,
    lang: "en",
  }),
  // Noindex while we have no real customer reviews yet — avoids a thin-content
  // signal. Remove when real reviews are added back to app/lib/reviews.ts.
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
        lang="en"
        items={[
          { name: "Home", path: "/" },
          { name: seo.h1, path: seo.path },
        ]}
      />
    </>
  );
}
