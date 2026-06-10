import { ArchitecturalVenueArt } from "@/components/decorations/ArchitecturalVenueArt";
import { DecorativeDivider } from "@/components/decorations/DecorativeDivider";
import { InvitationFrame } from "@/components/decorations/InvitationFrame";
import { Monogram } from "@/components/decorations/Monogram";
import { WeddingBotanicalAccent } from "@/components/decorations/WeddingBotanicalAccent";
import { ThemedButton } from "@/components/ThemedButton";
import { couple, pageMeta, weddingCTAs, weddingEvent } from "@/data/content";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingHero() {
  const theme = getTheme("wedding");
  const meta = pageMeta.wedding;

  return (
    <section className="relative min-h-[88vh] overflow-hidden lg:min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${theme.bg} 0%, ${theme.bgAccent} 50%, ${theme.bgLayer} 100%)`,
        }}
        aria-hidden
      />
      <div className="texture-wedding absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl lg:min-h-screen lg:grid-cols-2">
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
            <span className="italic" style={{ color: theme.gold }}>&</span>{" "}
            {couple.firstNames.groom}
          </h1>
          <DecorativeDivider color={theme.text} accentColor={theme.gold} variant="ornate" className="mb-5 !mx-0" />
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

        <div
          className="relative flex items-end justify-center px-6 pb-8 pt-4 lg:items-center lg:px-10 lg:pb-0"
          style={{ backgroundColor: theme.bgLayer }}
        >
          <WeddingBotanicalAccent color={theme.accent} accentColor={theme.gold} className="absolute right-8 top-12 h-16 w-24" />
          <InvitationFrame
            innerColor={`${theme.accent}44`}
            outerColor={`${theme.gold}28`}
            bg={theme.cardBg}
            className="relative w-full max-w-md p-4 sm:p-6"
          >
            <div className="h-56 sm:h-72">
              <ArchitecturalVenueArt color={theme.text} accentColor={theme.accent} />
            </div>
          </InvitationFrame>
        </div>
      </div>
    </section>
  );
}
