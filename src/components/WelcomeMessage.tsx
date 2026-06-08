import { serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type WelcomeMessageProps = {
  message: string;
  variant?: ThemeVariant;
};

export function WelcomeMessage({
  message,
  variant = "landing",
}: WelcomeMessageProps) {
  const theme = getTheme(variant);

  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div
          className="mx-auto mb-8 h-px w-16"
          style={{ backgroundColor: theme.accent }}
        />
        <p
          className={`${serif.className} text-lg font-light leading-relaxed tracking-wide sm:text-xl sm:leading-relaxed`}
          style={{ color: theme.text }}
        >
          {message}
        </p>
        <div
          className="mx-auto mt-8 h-px w-16"
          style={{ backgroundColor: theme.accent }}
        />
      </div>
    </section>
  );
}
