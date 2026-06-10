import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { InvitationFrame } from "@/components/common/decorations/InvitationFrame";
import { Monogram } from "@/components/common/decorations/Monogram";
import { ThemedButton } from "@/components/common/ThemedButton";
import {
  couple,
  engagementCTAs,
  engagementEvent,
  engagementHeroInvite,
  pageMeta,
} from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function EngagementHero() {
  const theme = getTheme("engagement");
  const meta = pageMeta.engagement;

  return (
    <section className="relative min-h-[85vh] overflow-hidden lg:min-h-[90vh]">
      {/* Layered background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(165deg, ${theme.bg} 0%, ${theme.bgAccent} 45%, ${theme.bgLayer} 100%)`,
        }}
        aria-hidden
      />
      <div className="texture-engagement absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-16">
        {/* Left: text content */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <Monogram color={theme.text} accentColor={theme.gold} size="lg" className="mb-6" />

          <p
            className={`${sans.className} mb-3 text-[10px] uppercase tracking-[0.42em]`}
            style={{ color: theme.accent }}
          >
            {meta.heroEyebrow}
          </p>

          <h1
            className={`${serif.className} mb-4 text-5xl font-normal leading-[1.05] tracking-wide sm:text-6xl lg:text-7xl`}
            style={{ color: theme.text }}
          >
            {couple.firstNames.bride}{" "}
            <span className="italic" style={{ color: theme.accent }}>
              &
            </span>{" "}
            {couple.firstNames.groom}
          </h1>

          <DecorativeDivider
            color={theme.text}
            accentColor={theme.gold}
            variant="floral"
            className="mb-5 lg:!mx-0"
          />

          <p
            className={`${serif.className} mb-6 max-w-md text-lg italic leading-relaxed sm:text-xl`}
            style={{ color: theme.text, opacity: 0.88 }}
          >
            {meta.heroSubtitle}
          </p>

          <p
            className={`${serif.className} mb-8 text-2xl tracking-[0.12em] sm:text-3xl`}
            style={{ color: theme.accent }}
          >
            {engagementEvent.shortDate}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {engagementCTAs.map((cta) => (
              <ThemedButton
                key={cta.label}
                href={cta.href}
                variant="engagement"
                style={cta.style}
              >
                {cta.label}
              </ThemedButton>
            ))}
          </div>
        </div>

        {/* Right: invitation card */}
        <InvitationFrame
          innerColor={`${theme.accent}55`}
          outerColor={`${theme.gold}30`}
          bg={theme.cardBg}
          className="order-1 px-8 py-12 sm:px-12 sm:py-16 lg:order-2"
        >
          <p
            className={`${sans.className} mb-4 text-center text-[10px] uppercase tracking-[0.35em]`}
            style={{ color: theme.gold }}
          >
            Davet
          </p>

          <p
            className={`${serif.className} text-center text-2xl font-normal leading-relaxed sm:text-3xl`}
            style={{ color: theme.text }}
          >
            {engagementHeroInvite}
          </p>

          <DecorativeDivider
            color={theme.text}
            accentColor={theme.accent}
            variant="floral"
            className="my-8"
          />

          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p
                className={`${sans.className} mb-1 text-[9px] uppercase tracking-[0.3em]`}
                style={{ color: theme.accent }}
              >
                Tarih
              </p>
              <p className={`${serif.className} text-lg`} style={{ color: theme.text }}>
                {engagementEvent.dateDisplay}
              </p>
            </div>
            <div>
              <p
                className={`${sans.className} mb-1 text-[9px] uppercase tracking-[0.3em]`}
                style={{ color: theme.accent }}
              >
                Saat
              </p>
              <p className={`${serif.className} text-lg`} style={{ color: theme.text }}>
                {engagementEvent.time}
              </p>
            </div>
          </div>

          {/*
            Engagement venue illustration placeholder.
            Replace with:
              <Image src="/art/engagement-venue.png" fill alt="Du Urla, Manisa"
                     className="object-cover rounded-sm" />
          */}
          <div
            className="mt-8 h-36 w-full rounded-sm"
            style={{ backgroundColor: theme.bgAccent }}
            data-placeholder="engagement-venue-illustration"
          />
        </InvitationFrame>
      </div>
    </section>
  );
}
