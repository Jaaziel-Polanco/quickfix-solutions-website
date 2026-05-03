import type { ReactNode } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { StickyMobileCTA } from "@/app/components/StickyMobileCTA";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

/**
 * Wraps every page with the sticky header/footer, mobile CTA bar, and
 * reveal-on-scroll observer. Language context is provided one level up by
 * the root layout, so this can stay server-rendered.
 */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
      <RevealOnScroll />
    </>
  );
}
