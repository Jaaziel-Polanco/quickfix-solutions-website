import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  h1: string;
  intro?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, h1, intro, children }: Props) {
  return (
    <section className="relative bg-white border-b border-line overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-soft blur-3xl opacity-50 pointer-events-none float-blob"
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {eyebrow ? <div className="eyebrow text-orange mb-3">{eyebrow}</div> : null}
        <h1 className="display text-[34px] sm:text-[44px] lg:text-[52px] text-ink">{h1}</h1>
        {intro ? (
          <p className="mt-5 text-[18px] text-ink-soft leading-relaxed max-w-[68ch]">{intro}</p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
