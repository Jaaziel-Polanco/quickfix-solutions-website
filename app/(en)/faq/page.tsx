import type { Metadata } from "next";
import { PAGE_SEO, abs, pageMetadata } from "@/app/lib/seo";
import { FAQClient } from "@/app/components/pages/FAQClient";
import { FAQJsonLd } from "@/app/components/seo/FAQJsonLd";
import { ServiceJsonLd } from "@/app/components/seo/ServiceJsonLd";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.en.faq;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "en",
});

const FAQ_FOR_SCHEMA = [
  {
    question: "How quickly can you come out?",
    answer:
      "Most jobs get a next-day window. Same-day visits happen when an opening fits — call early in the day for the best chance.",
  },
  {
    question: "What does the diagnostic visit cost?",
    answer:
      "Diagnostic starts at $50 within 5 miles and varies by distance for longer trips. If you approve the repair, that fee is credited toward the total — you don't pay it twice.",
  },
  {
    question: "Do you stock parts?",
    answer:
      "Common wear parts ride on the truck. Less common parts are ordered after diagnostic — typical turnaround is 2–5 business days.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes — a 30-day labor warranty on the repair we performed. Manufacturer part warranties may extend longer; we pass those through when applicable.",
  },
  {
    question: "Do you service commercial kitchens or laundromats?",
    answer:
      "No. We focus exclusively on residential appliances. Commercial work needs different licensing and parts channels.",
  },
];

export default function Page() {
  return (
    <>
      <FAQClient />
      <FAQJsonLd items={FAQ_FOR_SCHEMA} />
      <ServiceJsonLd
        name="Residential Appliance Repair"
        serviceType="Residential Appliance Repair"
        description={seo.description}
        url={abs(seo.path)}
      />
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
