import type { ReactNode } from "react";
import { SectionSeparator } from "@/components/common/decorations/SectionSeparator";
import { engagementEvent, engagementHostFamilies } from "@/data";
import { buildGoogleCalendarUrl } from "@/lib/calendar";
import { sans, serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { Event } from "@/types";

type EngagementEventDetailsSectionProps = {
  event?: Event;
};

function getIstanbulDate(isoDate: string) {
  const hasTime = isoDate.includes("T");
  const hasTimezone = /Z$|[+-]\d{2}:\d{2}$/.test(isoDate);

  const dateString = hasTime
    ? hasTimezone
      ? isoDate
      : `${isoDate}+03:00`
    : `${isoDate}T00:00:00+03:00`;

  return new Date(dateString);
}

function formatDateParts(isoDate: string) {
  const date = getIstanbulDate(isoDate);

  const day = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    timeZone: "Europe/Istanbul",
  });

  const month = date
    .toLocaleDateString("tr-TR", {
      month: "long",
      timeZone: "Europe/Istanbul",
    })
    .toLocaleUpperCase("tr-TR");

  const year = date.toLocaleDateString("tr-TR", {
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });

  return { day, month, year };
}

function ClockIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.2" />
      <path
        d="M12 7v5l3 2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
}) {
  const theme = getTheme("engagement");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sans.className} inline-flex h-11 min-w-[168px] items-center justify-center rounded-full px-8 text-[10px] uppercase tracking-[0.24em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:h-12 sm:text-[11px] sm:tracking-[0.28em]`}
      style={
        variant === "light"
          ? {
              backgroundColor: "rgba(255,255,255,0.94)",
              color: theme.accent,
              boxShadow: "0 16px 40px rgba(63,53,43,0.18)",
            }
          : {
              backgroundColor: theme.buttonBg,
              color: theme.buttonText,
              boxShadow: `0 16px 40px ${theme.accent}24`,
            }
      }
    >
      {children}
    </a>
  );
}

export function EngagementEventDetailsSection({
  event = engagementEvent,
}: EngagementEventDetailsSectionProps) {
  const theme = getTheme("engagement");
  const { day, month, year } = formatDateParts(event.date);
  const calendarUrl = buildGoogleCalendarUrl(event);
  const address = event.address ?? `${event.venue}, ${event.location}`;

  return (
    <section
      className="py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: theme.bg }}
    >
      <SectionSeparator variant="engagement" />

      <div
        className="mx-auto mt-6 grid max-w-5xl overflow-hidden sm:mt-8 lg:grid-cols-2"
        style={{
          border: `1px solid ${theme.cardBorder}`,
          boxShadow: `0 24px 80px ${theme.accent}18`,
        }}
      >
        {/* Event details */}
        <div
          className="flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-12"
          style={{ backgroundColor: theme.cardBg }}
        >
          <p
            className={`${serif.className} mb-5 text-2xl font-normal sm:text-[1.65rem]`}
            style={{ color: theme.text }}
          >
            Etkinlik Detayları
          </p>

          <div className="mb-6 flex items-center justify-center">
            <span
              className="h-px w-16 sm:w-20"
              style={{ backgroundColor: theme.border }}
            />
            <span className="mx-4" style={{ color: theme.accent }}>
              <ClockIcon color={theme.accent} />
            </span>
            <span
              className="h-px w-16 sm:w-20"
              style={{ backgroundColor: theme.border }}
            />
          </div>

          <p
            className={`${sans.className} mb-2 text-xl tracking-[0.04em] sm:text-2xl`}
            style={{ color: theme.text }}
          >
            <span>{day}</span>{" "}
            <span style={{ color: theme.accent }}>{month}</span>{" "}
            <span>{year}</span>
          </p>

          <p
            className={`${sans.className} mb-8 text-sm sm:text-[15px]`}
            style={{ color: theme.accent }}
          >
            {event.weekday.toLocaleUpperCase("tr-TR")} | {event.time}
          </p>

          <div className="mb-8 grid w-full max-w-sm grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-3">
              <span style={{ color: theme.accent }}>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <path
                    d="M12 4c2.5 0 4.5 2 4.5 4.5S14.5 13 12 13s-4.5-2-4.5-4.5S9.5 4 12 4Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <p
                className={`${sans.className} text-[13px] uppercase tracking-[0.12em] sm:text-[15px]`}
                style={{ color: theme.text }}
              >
                {engagementHostFamilies.bride}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span style={{ color: theme.accent }}>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <path
                    d="M8 8h8v3H8V8Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 11h12v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17v3M9 20h6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <p
                className={`${sans.className} text-[13px] uppercase tracking-[0.12em] sm:text-[15px]`}
                style={{ color: theme.text }}
              >
                {engagementHostFamilies.groom}
              </p>
            </div>
          </div>

          {event.dressCode && (
            <p
              className={`${sans.className} mb-8 max-w-sm text-[13px] leading-relaxed sm:text-[15px]`}
              style={{ color: theme.muted }}
            >
              <strong style={{ color: theme.text }}>Kıyafet:</strong>{" "}
              {event.dressCode}
            </p>
          )}

          <ExternalButton href={calendarUrl}>Takvime Ekle</ExternalButton>
        </div>

        {/* Location + map */}
        <div
          className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-full"
          style={{ backgroundColor: theme.bgAccent }}
        >
          {event.mapsEmbedUrl && (
            <iframe
              src={event.mapsEmbedUrl}
              title={`${event.venue} haritası`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              style={{ pointerEvents: "none" }}
              aria-hidden
            />
          )}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(63,53,43,0.16) 0%, rgba(63,53,43,0.58) 100%)",
            }}
            aria-hidden
          />

          <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[380px] sm:px-10 sm:py-12">
            <p
              className={`${sans.className} mb-4 max-w-xs text-base font-semibold uppercase tracking-[0.14em] sm:text-lg`}
              style={{ color: "#FFFFFF" }}
            >
              {event.venue}
            </p>

            <p
              className={`${sans.className} mb-8 max-w-sm text-[13px] leading-relaxed sm:text-[15px]`}
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              <strong>Adres:</strong> {address}
            </p>

            {event.mapsUrl && (
              <ExternalButton href={event.mapsUrl} variant="light">
                Yol Tarifi Al
              </ExternalButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}