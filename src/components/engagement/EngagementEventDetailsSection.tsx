import type { ReactNode } from "react";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import { SvgIcon } from "@/components/common/SvgIcon";

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
      className={`${sans.className} pointer-events-auto inline-flex h-11 min-w-[160px] items-center justify-center rounded-full px-7 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:h-12 sm:min-w-[170px] sm:text-[11px] sm:tracking-[0.26em]`}
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
              boxShadow: `0 14px 34px ${theme.accent}20`,
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
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-18">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 sm:px-6 lg:gap-9 lg:px-8">
        <div
          className="mx-auto w-full max-w-3xl px-5 py-9 text-center sm:px-10 sm:py-11 lg:px-14 lg:py-12"
          style={{
            boxShadow: `inset 0 0 0 1px ${theme.cardBorder}66`,
            borderRadius: "32px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 100%)",
          }}
        >
          <p
            className={`${sans.className} mb-7 text-sm font-medium uppercase tracking-[0.3em] sm:text-base sm:tracking-[0.36em]`}
            style={{ color: theme.accent }}
          >
            Etkinlik Detayları
          </p>

          <div className="mb-7 flex items-center justify-center">
            <span
              className="h-px w-16 sm:w-24"
              style={{ backgroundColor: theme.border }}
            />
            <span className="mx-4" style={{ color: theme.accent }}>
              <ClockIcon color={theme.accent} />
            </span>
            <span
              className="h-px w-16 sm:w-24"
              style={{ backgroundColor: theme.border }}
            />
          </div>

          <p
            className={`${sans.className} mb-2 text-2xl tracking-[0.04em] sm:text-3xl lg:text-[34px]`}
            style={{ color: theme.text }}
          >
            <span>{day}</span>{" "}
            <span style={{ color: theme.accent }}>{month}</span>{" "}
            <span>{year}</span>
          </p>

          <p
            className={`${sans.className} mb-8 text-sm sm:text-base`}
            style={{ color: theme.accent }}
          >
            CUMARTESİ | 15.00
          </p>

          <div className="mx-auto mb-8 grid w-full max-w-md grid-cols-2 gap-6 sm:gap-10">
            <div className="flex flex-col items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full sm:h-13 sm:w-13"
                style={{
                  boxShadow: `inset 0 0 0 1px ${theme.cardBorder}80`,
                  backgroundColor: "rgba(255,255,255,0.28)",
                }}
              >
                <SvgIcon src="/heel.svg" color={theme.accent} />
              </span>

              <p
                className={`${sans.className} text-[13px] uppercase tracking-[0.12em] sm:text-[15px]`}
                style={{ color: theme.text }}
              >
                Gülden Yılmaz
                <br />
                Usta
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full sm:h-13 sm:w-13"
                style={{
                  boxShadow: `inset 0 0 0 1px ${theme.cardBorder}80`,
                  backgroundColor: "rgba(255,255,255,0.28)",
                }}
              >
                <SvgIcon src="/bowtie.svg" color={theme.accent} />
              </span>

              <p
                className={`${sans.className} text-[13px] uppercase tracking-[0.12em] sm:text-[15px]`}
                style={{ color: theme.text }}
              >
                Semra Nihat
                <br />
                Şenol
              </p>
            </div>
          </div>

          <ExternalButton href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Se%C3%A7il+%26+U%C4%9Fur+%E2%80%94+Ni%C5%9Fan&dates=20260704T120000Z%2F20260704T150000Z&location=Du+Urla%2C+Urla%2C+Manisa&details=Ailemiz+ve+yak%C4%B1n+dostlar%C4%B1m%C4%B1zla+birlikte%2C+s%C4%B1cak+ve+samimi+bir+ak%C5%9Fam+ge%C3%A7irece%C4%9Fiz.+Sizi+de+aram%C4%B1zda+g%C3%B6rmek+isteriz.&ctz=Europe%2FIstanbul">
            Takvime Ekle
          </ExternalButton>
        </div>

        <div
          className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[30px] p-2 sm:p-3"
          style={{
            backgroundColor: "rgba(255,255,255,0.34)",
            boxShadow: `inset 0 0 0 1px ${theme.cardBorder}55, 0 22px 60px rgba(63,53,43,0.11)`,
          }}
        >
          <div className="relative isolate min-h-[340px] overflow-hidden rounded-[24px] sm:min-h-[380px] lg:min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw&q=Du+Urla+Manisa&zoom=14"
              title="Du Urla haritası"
              className="absolute inset-0 h-full w-full scale-[1.08] border-0 grayscale-[25%] saturate-[0.75] contrast-[0.9]"
              loading="lazy"
            />

            <div
              className="pointer-events-none absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(248,245,241,0.04) 0%, rgba(63,53,43,0.12) 48%, rgba(63,53,43,0.5) 100%)",
              }}
              aria-hidden
            />

            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24"
              style={{
                background:
                  "linear-gradient(180deg, rgba(248,245,241,0.34) 0%, transparent 100%)",
              }}
              aria-hidden
            />

            <div className="relative z-[3] flex min-h-[340px] items-end justify-center px-5 py-5 sm:min-h-[380px] sm:px-8 sm:py-7 lg:min-h-[420px]">
              <div
                className="pointer-events-auto w-full max-w-xl rounded-[24px] px-6 py-6 text-center backdrop-blur-md sm:px-8 sm:py-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.88)",
                  boxShadow: "0 18px 48px rgba(45,38,31,0.18)",
                }}
              >
                <p
                  className={`${sans.className} mb-2 text-[11px] font-medium uppercase tracking-[0.28em] sm:text-xs`}
                  style={{ color: theme.accent }}
                >
                  Konum
                </p>

                <p
                  className={`${sans.className} mb-2 text-xl font-semibold uppercase tracking-[0.16em] sm:text-2xl`}
                  style={{ color: theme.text }}
                >
                  Du Urla
                </p>

                <p
                  className={`${sans.className} mb-5 text-sm leading-relaxed sm:text-[15px]`}
                  style={{ color: theme.accent }}
                >
                  Manisa
                </p>

                <ExternalButton
                  href="https://maps.app.goo.gl/7LqxhNYMFKaZsswPA"
                  variant="primary"
                >
                  Yol Tarifi Al
                </ExternalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}