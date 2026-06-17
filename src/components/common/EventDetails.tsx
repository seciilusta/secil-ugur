import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionSeparator } from "@/components/common/decorations/SectionSeparator";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type EventDetailsProps = {
  variant: ThemeVariant;
};

export function EventDetails({ variant }: EventDetailsProps) {
  const theme = getTheme(variant);

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionSeparator variant={variant} />
      <SectionHeading
        eyebrow="Bilgiler"
        title="Bilmeniz Gerekenler"
        variant={variant}
        className="mb-8 mt-6 sm:mb-12 sm:mt-8"
      />

      <div
        className="mx-auto grid max-w-3xl gap-px sm:grid-cols-2"
        style={{ backgroundColor: theme.cardBorder }}
      >
        <div
          className="px-5 py-6 text-center sm:px-8 sm:py-8 sm:text-left"
          style={{ backgroundColor: theme.cardBg }}
        >
          <p
            className={`${sans.className} mb-2 text-[9px] uppercase tracking-[0.24em] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]`}
            style={{ color: theme.accent }}
          >
            Tarih
          </p>
          <p
            className={`${serif.className} text-base font-normal leading-snug sm:text-xl`}
            style={{ color: theme.text }}
          >
            Pazar, 4 Ekim 2026
          </p>
        </div>

        <div
          className="px-5 py-6 text-center sm:px-8 sm:py-8 sm:text-left"
          style={{ backgroundColor: theme.cardBg }}
        >
          <p
            className={`${sans.className} mb-2 text-[9px] uppercase tracking-[0.24em] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]`}
            style={{ color: theme.accent }}
          >
            Saat
          </p>
          <p
            className={`${serif.className} text-base font-normal leading-snug sm:text-xl`}
            style={{ color: theme.text }}
          >
            19.00
          </p>
        </div>

        <div
          className="px-5 py-6 text-center sm:px-8 sm:py-8 sm:text-left"
          style={{ backgroundColor: theme.cardBg }}
        >
          <p
            className={`${sans.className} mb-2 text-[9px] uppercase tracking-[0.24em] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]`}
            style={{ color: theme.accent }}
          >
            Mekân
          </p>
          <p
            className={`${serif.className} text-base font-normal leading-snug sm:text-xl`}
            style={{ color: theme.text }}
          >
            Aden Boğazköy Tesisleri
          </p>
          <a
            href="https://maps.app.goo.gl/tSoixBNrg2bWDXpQ6"
            target="_blank"
            rel="noopener noreferrer"
            className={`${sans.className} mt-2 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-70 sm:mt-3 sm:text-[10px] sm:tracking-[0.22em]`}
            style={{ color: theme.accent }}
          >
            Yol Tarifi →
          </a>
        </div>

        <div
          className="px-5 py-6 text-center sm:px-8 sm:py-8 sm:text-left"
          style={{ backgroundColor: theme.cardBg }}
        >
          <p
            className={`${sans.className} mb-2 text-[9px] uppercase tracking-[0.24em] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]`}
            style={{ color: theme.accent }}
          >
            Şehir
          </p>
          <p
            className={`${serif.className} text-base font-normal leading-snug sm:text-xl`}
            style={{ color: theme.text }}
          >
            İstanbul
          </p>
        </div>

        <div
          className="px-5 py-6 text-center sm:px-8 sm:py-8 sm:text-left sm:col-span-2"
          style={{ backgroundColor: theme.cardBg }}
        >
          <p
            className={`${sans.className} mb-2 text-[9px] uppercase tracking-[0.24em] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]`}
            style={{ color: theme.accent }}
          >
            Kıyafet
          </p>
          <p
            className={`${serif.className} text-base font-normal leading-snug sm:text-xl`}
            style={{ color: theme.text }}
          >
            Şık kıyafet — detaylar yakında
          </p>
        </div>
      </div>

      <p
        className={`${serif.className} mx-auto mt-8 max-w-2xl text-center text-base font-normal leading-relaxed sm:mt-12 sm:text-xl`}
        style={{ color: theme.text }}
      >
        Zamansız ve zarif bir günde, sevdiklerimizle bir araya gelip yeni hayatımıza birlikte
        başlıyoruz.
      </p>
    </section>
  );
}
