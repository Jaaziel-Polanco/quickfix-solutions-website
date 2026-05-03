import type { MetadataRoute } from "next";
import { ALL_ROUTES, SITE_URL } from "@/app/lib/seo";
import { localePath } from "@/app/lib/locale";

/**
 * Each canonical EN route appears twice in the sitemap (EN URL + ES URL),
 * each entry referencing the other via `alternates.languages` so Google can
 * cluster them as the same page in different languages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of ALL_ROUTES) {
    const enUrl = `${SITE_URL}${r.path === "/" ? "" : r.path}`;
    const esUrl = `${SITE_URL}${localePath(r.path, "es")}`;
    const alternates = {
      languages: { en: enUrl, es: esUrl, "x-default": enUrl },
    };
    entries.push({
      url: enUrl,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates,
    });
    entries.push({
      url: esUrl,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates,
    });
  }

  return entries;
}
