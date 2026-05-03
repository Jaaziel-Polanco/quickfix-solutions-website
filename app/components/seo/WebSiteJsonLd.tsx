import { BUSINESS } from "@/app/lib/business";
import { SITE_URL } from "@/app/lib/seo";

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: ["en-US", "es"],
    publisher: { "@id": `${SITE_URL}/#business` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
