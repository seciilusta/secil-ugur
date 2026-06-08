import type { ThemeVariant } from "@/types";
import { getTheme } from "@/lib/theme";

type SectionSeparatorProps = {
  variant?: ThemeVariant;
};

export function SectionSeparator({ variant = "landing" }: SectionSeparatorProps) {
  const theme = getTheme(variant);
  const isEngagement = variant === "engagement";

  return (
    <div className="relative px-6 py-2" aria-hidden>
      <div className="mx-auto flex max-w-4xl items-center gap-4">
        <div className="h-px flex-1" style={{ backgroundColor: theme.border }} />
        {isEngagement ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
            <circle cx="12" cy="12" r="4" stroke={theme.accent} strokeWidth="0.6" opacity="0.5" />
            <path
              d="M12 4 C10 8, 8 10, 4 12 M12 4 C14 8, 16 10, 20 12 M12 20 C10 16, 8 14, 4 12 M12 20 C14 16, 16 14, 20 12"
              stroke={theme.accentLight}
              strokeWidth="0.4"
              opacity="0.4"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none">
            <rect
              x="8"
              y="8"
              width="8"
              height="8"
              stroke={theme.accent}
              strokeWidth="0.6"
              opacity="0.5"
              transform="rotate(45 12 12)"
            />
          </svg>
        )}
        <div className="h-px flex-1" style={{ backgroundColor: theme.border }} />
      </div>
    </div>
  );
}
