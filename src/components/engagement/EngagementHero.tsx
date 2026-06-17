import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { Monogram } from "@/components/common/decorations/Monogram";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function EngagementHero() {
  const theme = getTheme("engagement");

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden />
      <div className="texture-engagement absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
        <Monogram size="lg" className="mb-5 sm:mb-7" />

        <p
          className={`${sans.className} mb-3 text-[9px] uppercase tracking-[0.35em] sm:mb-4 sm:text-[10px] sm:tracking-[0.42em]`}
          style={{ color: theme.accent }}
        >
          Nişan
        </p>

        <h1
          className={`${serif.className} mb-4 text-4xl font-normal leading-[1.05] tracking-wide sm:mb-5 sm:text-6xl lg:text-7xl`}
          style={{ color: theme.text }}
        >
          Seçil{" "}
          <span className="italic" style={{ color: theme.accent }}>
            &
          </span>{" "}
          Uğur
        </h1>

        <DecorativeDivider
          color={theme.text}
          accentColor={theme.gold}
          variant="floral"
          className="mb-5"
        />

        <p
          className={`${serif.className} text-2xl tracking-[0.12em] sm:text-3xl`}
          style={{ color: theme.accent }}
        >
          04.07.2026
        </p>
      </div>
    </section>
  );
}
