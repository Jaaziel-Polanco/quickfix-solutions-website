import type { Metadata } from "next";
import { Landing } from "@/app/components/Landing";
import { PAGE_SEO, pageMetadata } from "@/app/lib/seo";

const seo = PAGE_SEO.en.home;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "en",
});

export default function Page() {
  return <Landing />;
}
