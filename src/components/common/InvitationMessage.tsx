import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type InvitationMessageProps = {
  message: string;
  variant?: ThemeVariant;
};

export function InvitationMessage({
  message,
  variant = "landing",
}: InvitationMessageProps) {
  const theme = getTheme(variant);
  const dividerVariant = variant === "engagement" ? "floral" : "ornate";

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <div
        className="mx-auto max-w-2xl px-5 py-8 text-center sm:px-10 sm:py-11 lg:px-12 lg:py-12"
        style={{
          backgroundColor: theme.cardBg,
          boxShadow: `inset 0 0 0 1px ${theme.accent}44, inset 0 0 0 6px transparent, inset 0 0 0 7px ${theme.gold}28`,
        }}
      >
        <p className={`${serif.className} text-base font-normal leading-relaxed tracking-wide sm:text-xl sm:leading-relaxed`}
          style={{ color: theme.text }}>
          {message}
        </p>
      </div>
    </section>
  );
}
