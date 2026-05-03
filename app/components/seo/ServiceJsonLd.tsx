import { BUSINESS } from "@/app/lib/business";
import { SITE_URL } from "@/app/lib/seo";

type Props = {
  name: string;
  serviceType: string;
  description: string;
  url: string;
};

export function ServiceJsonLd({ name, serviceType, description, url }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      url: SITE_URL,
      areaServed: { "@type": "State", name: BUSINESS.serviceState },
    },
    areaServed: { "@type": "State", name: BUSINESS.serviceState },
    audience: {
      "@type": "Audience",
      audienceType: "Homeowners, Tenants, Landlords, Property Managers",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
