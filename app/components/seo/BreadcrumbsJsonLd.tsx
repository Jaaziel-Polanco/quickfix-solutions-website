import { abs } from "@/app/lib/seo";
import { localePath, type Lang } from "@/app/lib/locale";

export type Crumb = {
  /** Localized human name. */
  name: string;
  /** Canonical EN path. The component prefixes /es when lang === "es". */
  path: string;
};

export function BreadcrumbsJsonLd({
  items,
  lang = "en",
}: {
  items: Crumb[];
  lang?: Lang;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(localePath(c.path, lang)),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
