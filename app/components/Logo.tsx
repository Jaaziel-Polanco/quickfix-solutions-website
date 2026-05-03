"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/app/lib/i18n";

// Intrinsic dimensions of /public/logoquickfix.png
const NATURAL_W = 1536;
const NATURAL_H = 1024;

type Props = {
  compact?: boolean;
  /** Apply a brightness/invert filter so the logo reads as white on dark backgrounds. */
  variant?: "default" | "onDark";
};

/**
 * The logo is rendered larger than the header height. Negative vertical margins
 * keep the flex slot smaller so the header's actual height (80/88px) doesn't grow,
 * while the image overflows visually for impact.
 */
export function Logo({ compact = false, variant = "default" }: Props) {
  const { localePath } = useI18n();
  const h = compact ? 72 : 96;
  const w = Math.round((h * NATURAL_W) / NATURAL_H);
  const filter = variant === "onDark" ? "brightness(0) invert(1)" : undefined;
  return (
    <Link
      href={localePath("/")}
      aria-label="QuickFix Solutions home"
      className="inline-flex items-center focus-ring rounded-md -my-2 lg:-my-3"
    >
      <Image
        src="/logoquickfix.png"
        alt="QuickFix Solutions"
        width={w}
        height={h}
        priority
        sizes={`${w}px`}
        className="object-contain"
        style={{ filter }}
      />
    </Link>
  );
}
