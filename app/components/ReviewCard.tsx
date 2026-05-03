import { Star } from "@/app/components/icons";
import type { Review } from "@/app/lib/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          strokeWidth={1.5}
          className={i < count ? "text-orange" : "text-line"}
          style={i < count ? { fill: "currentColor" } : undefined}
        />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-11 h-11 rounded-full bg-orange-soft text-orange flex items-center justify-center font-bold text-[14px] flex-shrink-0">
      {initials}
    </div>
  );
}

export function ReviewCard({ r, i = 0 }: { r: Review; i?: number }) {
  return (
    <article
      className="reveal flex flex-col bg-white border border-line rounded-2xl p-6 shadow-qf-xs hover:shadow-qf-md transition"
      style={{ transitionDelay: `${(i % 4) * 70}ms` }}
    >
      <div className="flex items-center gap-3">
        <Avatar name={r.name} />
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-bold text-ink leading-tight">{r.name}</div>
          <div className="text-[12px] text-ink-muted leading-tight">{r.location}</div>
        </div>
        <Stars count={r.rating} />
      </div>
      <p className="mt-4 text-[15px] text-ink-soft leading-relaxed flex-1" lang={r.lang}>
        “{r.body}”
      </p>
      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between text-[12px]">
        <span className="font-semibold text-orange uppercase tracking-wider">{r.service}</span>
        <span className="text-ink-muted">{r.date}</span>
      </div>
    </article>
  );
}
