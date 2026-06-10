import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { InvitationFrame } from "@/components/common/decorations/InvitationFrame";
import { Monogram } from "@/components/common/decorations/Monogram";
import { ThemedButton } from "@/components/common/ThemedButton";
import { couple, pageMeta, weddingCTAs, weddingEvent } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingHero() {
  const theme = getTheme("wedding");
  const meta = pageMeta.wedding;

  return (
    <section className="relative min-h-[88vh] overflow-hidden lg:min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${theme.bg} 0%, ${theme.bgAccent} 55%, ${theme.bgLayer} 100%)`,
        }}
        aria-hidden
      />
      <div className="texture-wedding absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl lg:min-h-screen lg:grid-cols-2">
        {/* Left: editorial text content */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <Monogram color={theme.text} accentColor={theme.gold} size="md" className="mb-8" />

          <p
            className={`${sans.className} mb-3 text-[10px] uppercase tracking-[0.42em]`}
            style={{ color: theme.accent }}
          >
            {meta.heroEyebrow}
          </p>

          <h1
            className={`${serif.className} mb-4 text-5xl font-normal leading-[1.02] tracking-wide sm:text-6xl xl:text-7xl`}
            style={{ color: theme.text }}
          >
            {couple.firstNames.bride}
            <br />
            <span className="italic" style={{ color: theme.gold }}>
              &
            </span>{" "}
            {couple.firstNames.groom}
          </h1>

          <DecorativeDivider
            color={theme.text}
            accentColor={theme.gold}
            variant="ornate"
            className="mb-5 !mx-0"
          />

          <p
            className={`${serif.className} mb-2 text-3xl tracking-[0.14em] sm:text-4xl`}
            style={{ color: theme.text }}
          >
            {weddingEvent.shortDate}
          </p>

          <p
            className={`${sans.className} mb-2 text-[10px] uppercase tracking-[0.3em]`}
            style={{ color: theme.accent }}
          >
            {weddingEvent.weekday} · {weddingEvent.venue}
          </p>

          <p
            className={`${serif.className} mb-8 max-w-sm text-lg italic leading-relaxed`}
            style={{ color: theme.text, opacity: 0.85 }}
          >
            {meta.heroSubtitle}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {weddingCTAs.map((cta) => (
              <ThemedButton key={cta.label} href={cta.href} variant="wedding" style={cta.style}>
                {cta.label}
              </ThemedButton>
            ))}
          </div>
        </div>

        {/* Right: venue illustration panel */}
        <div
          className="relative flex items-end justify-center px-6 pb-8 pt-4 lg:items-center lg:px-10 lg:pb-0"
          style={{ backgroundColor: theme.bgLayer }}
        >
          <InvitationFrame
            innerColor={`${theme.accent}44`}
            outerColor={`${theme.gold}28`}
            bg={theme.cardBg}
            className="relative w-full max-w-md p-4 sm:p-6"
          >
            {/*
              Wedding venue / architectural illustration placeholder.
              Final size: full width × 288–320 px tall.
              Replace with:
                <Image src="/art/wedding-venue.png" fill alt="Aden Boğazköy Tesisleri"
                       className="object-cover" />
            */}
            <div
              className="h-56 w-full sm:h-72"
              style={{ backgroundColor: theme.bgAccent }}
              data-placeholder="wedding-venue-illustration"
            />

            {/* Venue label below illustration */}
            <div className="mt-4 border-t pt-4" style={{ borderColor: theme.border }}>
              <p
                className={`${sans.className} text-center text-[9px] uppercase tracking-[0.32em]`}
                style={{ color: theme.accent }}
              >
                {weddingEvent.venue} · {weddingEvent.location}
              </p>
            </div>
          </InvitationFrame>
        </div>
      </div>
    </section>
  );
}
