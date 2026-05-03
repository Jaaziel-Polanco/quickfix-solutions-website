import type { IconName } from "@/app/lib/business";

type IllProps = { size?: number; accent?: string };

export const ApplianceWasher = ({ size = 120, accent = "var(--brand-orange)" }: IllProps) => (
  <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
    <rect x="10" y="8" width="100" height="124" rx="10" stroke="var(--ink)" strokeWidth="2.5" fill="white" />
    <rect x="10" y="8" width="100" height="22" rx="10" fill="var(--surface-alt)" />
    <line x1="10" y1="30" x2="110" y2="30" stroke="var(--ink)" strokeWidth="2.5" />
    <circle cx="22" cy="19" r="2" fill="var(--ink-muted)" />
    <circle cx="32" cy="19" r="2" fill="var(--ink-muted)" />
    <rect x="80" y="14" width="22" height="10" rx="2" fill={accent} />
    <circle cx="60" cy="80" r="34" stroke="var(--ink)" strokeWidth="2.5" fill="var(--surface-alt)" />
    <circle cx="60" cy="80" r="26" stroke="var(--ink-muted)" strokeWidth="1.5" fill="white" className="washer-drum" />
    <circle cx="60" cy="80" r="3" fill={accent} />
    <circle cx="48" cy="68" r="2.5" fill="var(--ink-muted)" opacity="0.5" />
    <circle cx="72" cy="68" r="2.5" fill="var(--ink-muted)" opacity="0.5" />
    <circle cx="48" cy="92" r="2.5" fill="var(--ink-muted)" opacity="0.5" />
    <circle cx="72" cy="92" r="2.5" fill="var(--ink-muted)" opacity="0.5" />
  </svg>
);

export const ApplianceDryer = ({ size = 120, accent = "var(--brand-orange)" }: IllProps) => (
  <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
    <rect x="10" y="8" width="100" height="124" rx="10" stroke="var(--ink)" strokeWidth="2.5" fill="white" />
    <rect x="10" y="8" width="100" height="22" rx="10" fill="var(--surface-alt)" />
    <line x1="10" y1="30" x2="110" y2="30" stroke="var(--ink)" strokeWidth="2.5" />
    <rect x="18" y="14" width="40" height="10" rx="2" fill="var(--ink)" opacity="0.15" />
    <circle cx="92" cy="19" r="4" fill={accent} />
    <circle cx="60" cy="80" r="34" stroke="var(--ink)" strokeWidth="2.5" fill="var(--brand-orange-soft)" />
    <circle cx="60" cy="80" r="26" stroke="var(--ink)" strokeWidth="1.5" fill="white" />
    <path d="M50 68 Q56 76 50 84 Q44 92 50 100" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M62 68 Q68 76 62 84 Q56 92 62 100" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M74 68 Q80 76 74 84 Q68 92 74 100" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);

export const ApplianceFridge = ({ size = 120, accent = "var(--brand-green)" }: IllProps) => (
  <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
    <rect x="14" y="6" width="92" height="128" rx="8" stroke="var(--ink)" strokeWidth="2.5" fill="white" />
    <line x1="14" y1="50" x2="106" y2="50" stroke="var(--ink)" strokeWidth="2.5" />
    <rect x="20" y="14" width="80" height="30" rx="3" fill="var(--surface-alt)" stroke="var(--ink-muted)" strokeWidth="1" />
    <rect x="24" y="22" width="3" height="14" rx="1.5" fill="var(--ink)" />
    <text x="92" y="32" fontSize="9" fontWeight="700" fill={accent} fontFamily="Inter, sans-serif">F</text>
    <line x1="60" y1="50" x2="60" y2="128" stroke="var(--ink)" strokeWidth="2" />
    <rect x="20" y="56" width="36" height="72" rx="3" fill="var(--surface-alt)" stroke="var(--ink-muted)" strokeWidth="1" />
    <rect x="64" y="56" width="36" height="72" rx="3" fill="var(--surface-alt)" stroke="var(--ink-muted)" strokeWidth="1" />
    <rect x="52" y="70" width="3" height="40" rx="1.5" fill="var(--ink)" />
    <rect x="65" y="70" width="3" height="40" rx="1.5" fill="var(--ink)" />
    <rect x="28" y="22" width="14" height="16" rx="2" fill="white" stroke="var(--ink-muted)" strokeWidth="1" />
    <circle cx="35" cy="30" r="2.5" fill={accent} />
    <circle cx="92" cy="20" r="2" fill={accent} />
    <line x1="68" y1="76" x2="96" y2="76" stroke="var(--ink-muted)" strokeWidth="0.8" opacity="0.4" />
    <line x1="68" y1="92" x2="96" y2="92" stroke="var(--ink-muted)" strokeWidth="0.8" opacity="0.4" />
    <line x1="68" y1="108" x2="96" y2="108" stroke="var(--ink-muted)" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

export const ApplianceFreezer = ({ size = 120, accent = "var(--brand-green)" }: IllProps) => (
  <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
    <rect x="8" y="40" width="104" height="78" rx="4" stroke="var(--ink)" strokeWidth="2.5" fill="white" />
    <rect x="6" y="32" width="108" height="14" rx="3" stroke="var(--ink)" strokeWidth="2.5" fill="var(--surface-alt)" />
    <line x1="8" y1="46" x2="112" y2="46" stroke="var(--ink)" strokeWidth="1.5" opacity="0.6" />
    <rect x="50" y="36" width="20" height="6" rx="1.5" fill="var(--ink)" />
    <rect x="20" y="54" width="80" height="20" rx="3" fill="var(--surface-alt)" stroke="var(--ink-muted)" strokeWidth="1" />
    <text x="28" y="68" fontSize="11" fontWeight="800" fill="var(--ink)" fontFamily="JetBrains Mono, monospace">-18°C</text>
    <circle cx="86" cy="64" r="3" fill={accent} />
    <circle cx="94" cy="64" r="2" fill="var(--ink-muted)" opacity="0.4" />
    <g stroke={accent} strokeWidth="1.6" strokeLinecap="round">
      <g transform="translate(35 96)">
        <line x1="0" y1="-7" x2="0" y2="7" />
        <line x1="-7" y1="0" x2="7" y2="0" />
        <line x1="-5" y1="-5" x2="5" y2="5" />
        <line x1="-5" y1="5" x2="5" y2="-5" />
      </g>
      <g transform="translate(85 100)" opacity="0.7">
        <line x1="0" y1="-5" x2="0" y2="5" />
        <line x1="-5" y1="0" x2="5" y2="0" />
        <line x1="-4" y1="-4" x2="4" y2="4" />
        <line x1="-4" y1="4" x2="4" y2="-4" />
      </g>
      <g transform="translate(60 108)" opacity="0.5">
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="-4" y1="0" x2="4" y2="0" />
      </g>
    </g>
    <rect x="14" y="118" width="6" height="6" fill="var(--ink)" />
    <rect x="100" y="118" width="6" height="6" fill="var(--ink)" />
  </svg>
);

export const ApplianceElectricStove = ({ size = 120, accent = "var(--brand-orange)" }: IllProps) => (
  <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
    <rect x="10" y="20" width="100" height="112" rx="6" stroke="var(--ink)" strokeWidth="2.5" fill="white" />
    <rect x="14" y="24" width="92" height="50" rx="3" fill="#0F172A" />
    <rect x="18" y="28" width="40" height="3" rx="1.5" fill="white" opacity="0.15" />
    <g transform="translate(36 44)">
      <circle r="14" fill="#1E0A0A" stroke="#3B0A0A" strokeWidth="0.5" />
      <circle r="11" fill="none" stroke={accent} strokeWidth="2.2" />
      <circle r="7" fill="none" stroke={accent} strokeWidth="2" />
      <circle r="3" fill={accent} />
      <circle r="14" fill={accent} opacity="0.18" />
    </g>
    <g transform="translate(84 44)">
      <circle r="11" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <circle r="7" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <circle r="2" fill="white" opacity="0.4" />
    </g>
    <g transform="translate(36 64)">
      <circle r="7" fill="none" stroke="white" strokeWidth="1.1" opacity="0.5" />
      <circle r="3" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
    </g>
    <g transform="translate(84 64)">
      <circle r="9" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <circle r="5" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <circle r="1.5" fill="white" opacity="0.4" />
    </g>
    <line x1="14" y1="78" x2="106" y2="78" stroke="var(--ink)" strokeWidth="1.5" />
    <rect x="14" y="78" width="92" height="14" fill="var(--surface-alt)" />
    <rect x="44" y="81" width="32" height="8" rx="1.5" fill="var(--ink)" />
    <text x="50" y="87" fontSize="6" fontWeight="700" fill={accent} fontFamily="JetBrains Mono, monospace">350°F</text>
    <circle cx="22" cy="85" r="3" fill="var(--ink)" />
    <line x1="22" y1="83" x2="22" y2="85" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="32" cy="85" r="3" fill="var(--ink)" />
    <circle cx="88" cy="85" r="3" fill="var(--ink)" />
    <circle cx="98" cy="85" r="3" fill="var(--ink)" />
    <rect x="14" y="92" width="92" height="38" rx="3" fill="var(--surface-alt)" stroke="var(--ink-muted)" strokeWidth="1" />
    <rect x="22" y="100" width="76" height="22" rx="2" fill="#0F172A" stroke="var(--ink)" strokeWidth="1" />
    <rect x="26" y="103" width="20" height="2" rx="1" fill="white" opacity="0.15" />
    <rect x="34" y="124" width="52" height="3" rx="1.5" fill="var(--ink)" />
    <rect x="32" y="123" width="3" height="5" rx="1" fill="var(--ink)" />
    <rect x="85" y="123" width="3" height="5" rx="1" fill="var(--ink)" />
  </svg>
);

export const ApplianceGasStove = ({ size = 120, accent = "var(--brand-orange)" }: IllProps) => (
  <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} fill="none" aria-hidden="true">
    <rect x="10" y="20" width="100" height="112" rx="8" stroke="var(--ink)" strokeWidth="2.5" fill="white" />
    <rect x="10" y="20" width="100" height="40" fill="var(--surface-alt)" />
    <line x1="10" y1="60" x2="110" y2="60" stroke="var(--ink)" strokeWidth="2.5" />
    {[
      [35, 42],
      [60, 42],
      [85, 42],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="9" stroke="var(--ink)" strokeWidth="1.5" fill="white" />
        <circle cx={cx} cy={cy} r="4" fill="var(--ink-muted)" opacity="0.4" />
      </g>
    ))}
    <path d="M55 90 Q50 80 55 72 Q60 80 65 72 Q70 80 65 90 Q60 96 55 90 Z" fill={accent} className="flame-flicker" />
    <path d="M58 88 Q55 82 58 78 Q60 82 62 78 Q65 82 62 88 Q60 92 58 88 Z" fill="var(--brand-orange-hover)" opacity="0.7" />
    <rect x="22" y="100" width="76" height="22" rx="3" stroke="var(--ink-muted)" strokeWidth="1.5" fill="var(--surface-alt)" />
    <line x1="22" y1="111" x2="98" y2="111" stroke="var(--ink-muted)" strokeWidth="1" opacity="0.5" />
    <circle cx="98" cy="30" r="3" fill={accent} />
  </svg>
);

const APPLIANCE_MAP: Partial<Record<IconName, (p: IllProps) => React.JSX.Element>> = {
  Washer: ApplianceWasher,
  Wind: ApplianceDryer,
  Fridge: ApplianceFridge,
  Snow: ApplianceFreezer,
  Flame: ApplianceGasStove,
  CookingPot: ApplianceElectricStove,
};

export function ApplianceIllustration({ icon, size = 120 }: { icon: IconName; size?: number }) {
  const Comp = APPLIANCE_MAP[icon] ?? ApplianceWasher;
  return <Comp size={size} />;
}

type ToolProps = { size?: number; color?: string; className?: string };

export const ToolWrench = ({ size = 36, color = "var(--brand-orange)", className }: ToolProps) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
    <path
      d="M28 4a6 6 0 0 0-7.5 7.5L6 26l4 4 14.5-14.5A6 6 0 0 0 32 8l-3 3-3-3 3-3z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const ToolGear = ({ size = 36, color = "var(--brand-green)", className }: ToolProps) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
    <path
      d="M18 4l2 4 4-1 1 4 4 2-1 4 3 3-3 3 1 4-4 2-1 4-4-1-2 4-2-4-4 1-1-4-4-2 1-4-3-3 3-3-1-4 4-2 1-4 4 1z"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="18" r="5" fill="none" stroke={color} strokeWidth="2" />
  </svg>
);

export const ToolBolt = ({ size = 36, color = "var(--brand-orange)", className }: ToolProps) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
    <path
      d="M20 4L8 20h8l-2 12 12-16h-8l2-12z"
      fill={color}
      stroke="var(--ink)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const HouseIllustration = ({ size = 200 }: { size?: number }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 200 170" fill="none" aria-hidden="true">
    <path
      d="M100 20 L170 70 L170 150 L30 150 L30 70 Z"
      fill="white"
      stroke="var(--ink)"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M100 20 L170 70 L30 70 Z"
      fill="var(--brand-orange-soft)"
      stroke="var(--ink)"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <rect x="80" y="100" width="40" height="50" stroke="var(--ink)" strokeWidth="2" fill="var(--ink)" />
    <circle cx="113" cy="125" r="2" fill="var(--brand-orange)" />
    <rect x="50" y="90" width="22" height="22" stroke="var(--ink)" strokeWidth="2" fill="var(--brand-orange-soft)" />
    <line x1="61" y1="90" x2="61" y2="112" stroke="var(--ink)" strokeWidth="1.5" />
    <line x1="50" y1="101" x2="72" y2="101" stroke="var(--ink)" strokeWidth="1.5" />
    <rect x="128" y="90" width="22" height="22" stroke="var(--ink)" strokeWidth="2" fill="var(--brand-green-soft)" />
    <line x1="139" y1="90" x2="139" y2="112" stroke="var(--ink)" strokeWidth="1.5" />
    <line x1="128" y1="101" x2="150" y2="101" stroke="var(--ink)" strokeWidth="1.5" />
    <rect x="120" y="30" width="14" height="22" fill="var(--ink)" />
    <path d="M0 150 L200 150" stroke="var(--ink)" strokeWidth="2.5" />
  </svg>
);

export const SparkBolt = ({ size = 28, color = "var(--brand-orange)", className = "" }: ToolProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
    <path d="M16 2L6 16h6l-2 10 10-14h-6l2-10z" fill={color} />
  </svg>
);

export const Sparkle = ({ size = 20, color = "var(--brand-green)", className = "" }: ToolProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill={color} />
  </svg>
);
