import { Monogram } from "@/components/common/decorations/Monogram";
import { ThemedButton } from "@/components/common/ThemedButton";
import {
  events,
  landingCouple,
  landingCTAs,
  landingEngagementEvent,
  landingHero,
  landingWeddingEvent,
} from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function LandingHero() {
  const theme = getTheme("landing");

  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="texture-paper absolute inset-0" aria-hidden />

      {/*
        Botanical corner image placeholders.
        Replace each div's content with:
          <Image src="/art/botanical-[position].png" fill alt="" className="object-contain object-[corner]" />
        The enclosing div dimensions and positioning are final — dropping the image in is enough.
      */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-44 w-44 sm:h-56 sm:w-56"
        aria-hidden
        data-placeholder="botanical-top-left"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-44 w-44 sm:h-56 sm:w-56"
        aria-hidden
        data-placeholder="botanical-top-right"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 sm:h-56 sm:w-56"
        aria-hidden
        data-placeholder="botanical-bottom-left"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 sm:h-56 sm:w-56"
        aria-hidden
        data-placeholder="botanical-bottom-right"
      />

      {/* Centred content — max 700 px */}
      <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center px-6 text-center">
        <Monogram color={theme.text} accentColor={theme.gold} size="md" className="mb-8" />

        <h1
          className={`${serif.className} mb-5 text-5xl font-normal leading-tight tracking-wide sm:text-6xl lg:text-7xl`}
          style={{ color: theme.text }}
        >
          {landingCouple.firstNames.bride}{" "}
          <span className="italic" style={{ color: theme.accentLight }}>
            &
          </span>{" "}
          {landingCouple.firstNames.groom}
        </h1>

        <p
          className={`${serif.className} mb-7 max-w-md text-xl italic leading-relaxed sm:text-2xl`}
          style={{ color: theme.text, opacity: 0.82 }}
        >
          {landingHero.subtitle}
        </p>

        <p
          className={`${sans.className} mb-10 text-2xl tracking-[0.18em] sm:text-3xl`}
          style={{ color: theme.text }}
        >
          {landingEngagementEvent.shortDate}{" "}
          <span style={{ color: theme.accentLight }}>·</span>{" "}
          {landingWeddingEvent.shortDate}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {landingCTAs.map((cta) => (
            <ThemedButton key={cta.label} href={cta.href} variant="landing" style={cta.style}>
              {cta.label}
            </ThemedButton>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundColor: theme.border }}
      />
    </section>
  );
}
