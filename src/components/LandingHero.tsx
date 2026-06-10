import { ArchitecturalVenueArt } from "@/components/decorations/ArchitecturalVenueArt";
import { BotanicalCorner } from "@/components/decorations/BotanicalCorner";
import { DecorativeDivider } from "@/components/decorations/DecorativeDivider";
import { Monogram } from "@/components/decorations/Monogram";
import { ThemedButton } from "@/components/ThemedButton";
import { couple, events, landingCTAs, landingHero, site } from "@/data/content";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function LandingHero() {
  const theme = getTheme("landing");
  const engagementTheme = getTheme("engagement");
  const weddingTheme = getTheme("wedding");

  return (
    <section className="relative min-h-[88vh] lg:min-h-screen">
      <div className="grid min-h-[88vh] lg:min-h-screen lg:grid-cols-2">
        <div
          className="relative order-2 flex min-h-[40vh] flex-col items-center justify-center overflow-hidden px-6 py-10 lg:order-1 lg:min-h-0 lg:py-0"
          style={{
            background: `linear-gradient(160deg, ${engagementTheme.bgAccent} 0%, ${engagementTheme.bg} 100%)`,
          }}
        >
          <div className="texture-engagement absolute inset-0" aria-hidden />
          <BotanicalCorner
            position="top-left"
            color={engagementTheme.decorative}
            accentColor={engagementTheme.accent}
            className="absolute left-0 top-0 opacity-60"
          />
          <BotanicalCorner
            position="bottom-right"
            color={engagementTheme.decorative}
            accentColor={engagementTheme.accent}
            className="absolute bottom-0 right-0 opacity-60"
          />
          <div className="relative h-44 w-full max-w-sm sm:h-56">
            <ArchitecturalVenueArt
              color={weddingTheme.text}
              accentColor={weddingTheme.accent}
              className="opacity-70"
            />
          </div>
          <p
            className={`${sans.className} relative mt-4 text-[9px] uppercase tracking-[0.32em]`}
            style={{ color: engagementTheme.accentLight }}
          >
            {site.journeyBadge}
          </p>
        </div>

        <div
          className="order-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-2 lg:px-14 lg:py-16 xl:px-20"
          style={{ backgroundColor: theme.bg }}
        >
          <Monogram color={theme.text} accentColor={theme.gold} size="md" className="mb-6" />

          <p
            className={`${sans.className} mb-3 text-[10px] uppercase tracking-[0.4em]`}
            style={{ color: theme.accent }}
          >
            {landingHero.eyebrow}
          </p>

          <h1
            className={`${serif.className} mb-4 max-w-xl text-[2.75rem] font-normal leading-[1.05] tracking-wide sm:text-6xl lg:text-7xl`}
            style={{ color: theme.text }}
          >
            {couple.firstNames.bride}{" "}
            <span className="italic" style={{ color: theme.accentLight }}>&</span>{" "}
            {couple.firstNames.groom}
          </h1>

          <DecorativeDivider color={theme.text} accentColor={theme.gold} variant="floral" className="mb-5 !mx-0" />

          <p
            className={`${serif.className} mb-8 max-w-md text-lg leading-relaxed sm:text-xl`}
            style={{ color: theme.text, opacity: 0.88 }}
          >
            {landingHero.subtitle}
          </p>

          <div className="mb-8 flex flex-wrap gap-8">
            {events.map((event) => (
              <div key={event.slug}>
                <p
                  className={`${sans.className} mb-1 text-[9px] uppercase tracking-[0.35em]`}
                  style={{ color: theme.accent }}
                >
                  {event.label}
                </p>
                <p
                  className={`${serif.className} text-2xl tracking-[0.1em] sm:text-3xl`}
                  style={{ color: theme.text }}
                >
                  {event.shortDate}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            {landingCTAs.map((cta) => (
              <ThemedButton key={cta.label} href={cta.href} variant="landing" style={cta.style}>
                {cta.label}
              </ThemedButton>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundColor: theme.border }}
      />
    </section>
  );
}
