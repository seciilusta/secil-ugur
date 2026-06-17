import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { Monogram } from "@/components/common/decorations/Monogram";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function EngagementHero() {
  const theme = getTheme("engagement");

  return (
    <section className="relative overflow-hidden">
      <div className="texture-engagement absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-20 lg:py-4">
        <Monogram size="xl" className="mb-6 sm:mb-8" />

        <p
          className={`${sans.className} mb-4 text-xs font-medium uppercase tracking-[0.28em] sm:mb-5 sm:text-sm sm:tracking-[0.34em]`}
          style={{ color: theme.accent }}
        >
          Nişanımıza Davetlisiniz
        </p>
        <h1
          className={`${serif.className} mb-5 text-[40px] font-normal leading-[1.05] tracking-wide sm:mb-6 sm:text-[60px] lg:text-[72px]`}
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
          className="mb-6"
        />

        <p
          className={`${serif.className} text-2xl tracking-[0.12em] sm:text-3xl lg:text-4xl`}
          style={{ color: theme.accent }}
        >
          04.07.2026
        </p>
      </div>
    </section>
  );
}