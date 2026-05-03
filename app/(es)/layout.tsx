import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { RootLayoutShell } from "@/app/components/RootLayout";
import { PAGE_SEO, SEO, SITE_URL, pageMetadata } from "@/app/lib/seo";

const home = PAGE_SEO.es.home;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: SEO.titleTemplate },
  description: home.description,
  applicationName: SEO.siteName,
  keywords: [
    "reparación de electrodomésticos",
    "reparación de electrodomésticos cerca de mí",
    "reparación residencial de electrodomésticos",
    "reparación de lavadora",
    "reparación de secadora",
    "reparación de refrigerador",
    "reparación de congelador",
    "reparación de estufa de gas",
    "reparación de estufa eléctrica",
    "reparación de electrodomésticos Pensilvania",
    "reparación de electrodomésticos Upper Darby PA",
    "reparación de electrodomésticos Drexel Hill PA",
    "reparación de electrodomésticos Philadelphia PA",
    "reparación de electrodomésticos Delaware County",
    "reparación de electrodomésticos para landlords",
    "reparación de electrodomésticos para administradores",
  ],
  category: "Home Services",
  ...pageMetadata({
    title: home.title,
    description: home.description,
    enPath: home.path,
    lang: "es",
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

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutShell lang="es">{children}</RootLayoutShell>;
}
