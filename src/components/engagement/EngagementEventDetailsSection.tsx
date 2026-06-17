import type { ReactNode } from "react";
import { SectionSeparator } from "@/components/common/decorations/SectionSeparator";
import { sans, serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

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
      className={`${sans.className} pointer-events-auto inline-flex h-11 min-w-[168px] items-center justify-center rounded-full px-8 text-[10px] uppercase tracking-[0.24em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:h-12 sm:text-[11px] sm:tracking-[0.28em]`}
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

export function EngagementEventDetailsSection() {
  const theme = getTheme("engagement");
  const { day, month, year } = formatDateParts("2026-07-04T15:00:00");

  return (
    <section
      className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16"
      style={{ backgroundColor: theme.bg }}
    >
      <SectionSeparator variant="engagement" />

      <div
        className="mx-auto mt-6 grid max-w-5xl items-stretch overflow-hidden sm:mt-8 lg:grid-cols-2"
        style={{
          border: `1px solid ${theme.cardBorder}`,
          boxShadow: `0 24px 80px ${theme.accent}18`,
        }}
      >
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
            CUMARTESİ | 15.00
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
                Usta Ailesi
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
                Şenol Ailesi
              </p>
            </div>
          </div>

          <ExternalButton href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Se%C3%A7il+%26+U%C4%9Fur+%E2%80%94+Ni%C5%9Fan&dates=20260704T120000Z%2F20260704T150000Z&location=Du+Urla%2C+Urla%2C+Manisa&details=Ailemiz+ve+yak%C4%B1n+dostlar%C4%B1m%C4%B1zla+birlikte%2C+s%C4%B1cak+ve+samimi+bir+ak%C5%9Fam+ge%C3%A7irece%C4%9Fiz.+Sizi+de+aram%C4%B1zda+g%C3%B6rmek+isteriz.&ctz=Europe%2FIstanbul">
            Takvime Ekle
          </ExternalButton>
        </div>

        <div
          className="relative isolate min-h-[420px] overflow-hidden sm:min-h-[460px] lg:min-h-full lg:self-stretch"
          style={{ backgroundColor: theme.bgAccent }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw&q=Du+Urla+Manisa&zoom=14"
              title="Du Urla haritası"
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
              loading="lazy"
              tabIndex={-1}
              aria-hidden
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(63,53,43,0.16) 0%, rgba(63,53,43,0.58) 100%)",
            }}
            aria-hidden
          />

          <div className="relative z-[2] flex h-full min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[460px] sm:px-10 sm:py-14 lg:min-h-full">
            <p
              className={`${sans.className} mb-4 max-w-xs text-base font-semibold uppercase tracking-[0.14em] sm:text-lg`}
              style={{ color: "#FFFFFF" }}
            >
              Du Urla
            </p>

            <p
              className={`${sans.className} mb-8 max-w-sm text-[13px] leading-relaxed sm:text-[15px]`}
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              <strong>Adres:</strong> Du Urla, Urla, Manisa
            </p>

            <ExternalButton href="https://maps.app.goo.gl/7LqxhNYMFKaZsswPA" variant="light">
              Yol Tarifi Al
            </ExternalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
