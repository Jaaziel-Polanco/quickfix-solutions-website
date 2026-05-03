import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { RootLayoutShell } from "@/app/components/RootLayout";
import { PAGE_SEO, SEO, SITE_URL, pageMetadata } from "@/app/lib/seo";

const home = PAGE_SEO.en.home;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: SEO.titleTemplate },
  description: home.description,
  applicationName: SEO.siteName,
  keywords: [
    "appliance repair",
    "appliance repair near me",
    "residential appliance repair",
    "washer repair",
    "dryer repair",
    "refrigerator repair",
    "freezer repair",
    "gas stove repair",
    "electric stove repair",
    "appliance repair Pennsylvania",
    "appliance repair Upper Darby PA",
    "appliance repair Drexel Hill PA",
    "appliance repair Philadelphia PA",
    "appliance repair Delaware County",
    "landlord appliance repair",
    "property manager appliance repair",
  ],
  category: "Home Services",
  ...pageMetadata({
    title: home.title,
    description: home.description,
    enPath: home.path,
    lang: "en",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: { icon: "/logoquickfix.png" },
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutShell lang="en">{children}</RootLayoutShell>;
}
