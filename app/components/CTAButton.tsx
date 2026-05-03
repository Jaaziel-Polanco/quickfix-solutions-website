import type { ReactNode } from "react";
import type { IconName } from "@/app/lib/business";
import { iconFor } from "@/app/components/icons";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  icon?: IconName;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  full?: boolean;
  size?: Size;
  ariaLabel?: string;
  type?: "button" | "submit";
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[15px] sm:px-6 sm:py-3.5",
  lg: "px-6 py-4 text-[17px]",
};

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  ghost: "text-ink hover:text-orange",
};

export function CTAButton({
  variant = "primary",
  icon,
  children,
  href,
  onClick,
  full = false,
  size = "md",
  ariaLabel,
  type = "button",
}: Props) {
  const cls = [
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg focus-ring transition whitespace-nowrap",
    sizes[size],
    variants[variant],
    full ? "w-full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {icon ? iconFor(icon, { size: 20 }) : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
