import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "LCV — Seçil & Uğur",
  description: "Seçil ve Uğur'un nişan ve düğün davetine katılımınızı bildirin.",
};

const attendanceOptions = [
  { value: "engagement", label: "Nişan" },
  { value: "wedding", label: "Düğün" },
  { value: "both", label: "İkisi de" },
];

export default function RsvpPage() {
  const theme = getTheme("wedding");

  const inputClass = `${sans.className} w-full border bg-transparent px-4 py-3 text-sm font-light outline-none transition-colors focus:ring-1`;
  const labelClass = `${sans.className} mb-2 block text-[11px] uppercase tracking-[0.2em]`;

  return (
    <div
      className="texture-editorial min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar variant="wedding" />

      <section className="px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Katılımınızı Bildirin"
          title="LCV"
          variant="wedding"
          className="mb-4"
        />
        <p
          className={`${serif.className} mx-auto mb-12 max-w-lg text-center text-lg font-light italic`}
          style={{ color: theme.accent }}
        >
          Sizi aramızda görmek isteriz
        </p>

        <form
          className="mx-auto max-w-lg space-y-8 px-8 py-10 sm:px-10 sm:py-12"
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            boxShadow: `inset 0 0 0 1px ${theme.border}`,
          }}
        >
          <div>
            <label htmlFor="name" className={labelClass} style={{ color: theme.accent }}>
              Ad Soyad
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={inputClass}
              style={{ borderColor: theme.cardBorder, color: theme.text }}
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass} style={{ color: theme.accent }}>
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className={inputClass}
              style={{ borderColor: theme.cardBorder, color: theme.text }}
              placeholder="05xx xxx xx xx"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass} style={{ color: theme.accent }}>
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
              style={{ borderColor: theme.cardBorder, color: theme.text }}
              placeholder="ornek@email.com"
            />
          </div>

          <fieldset>
            <legend className={labelClass} style={{ color: theme.accent }}>
              Hangi davete katılıyorsunuz?
            </legend>
            <div className="mt-4 space-y-3">
              {attendanceOptions.map((option) => (
                <label
                  key={option.value}
                  className={`${sans.className} flex items-center gap-3 text-sm font-light`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    required
                    className="h-4 w-4 accent-[#2C1810]"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="guests" className={labelClass} style={{ color: theme.accent }}>
              Kaç kişi katılacaksınız?
            </label>
            <select
              id="guests"
              name="guests"
              className={inputClass}
              style={{ borderColor: theme.cardBorder, color: theme.text }}
              defaultValue="1"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} kişi
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="note" className={labelClass} style={{ color: theme.accent }}>
              Notunuz
            </label>
            <textarea
              id="note"
              name="note"
              rows={4}
              className={inputClass}
              style={{ borderColor: theme.cardBorder, color: theme.text }}
              placeholder="Beslenme tercihiniz, mesajınız veya sorularınız..."
            />
          </div>

          <button
            type="button"
            className={`${sans.className} h-12 w-full text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-80`}
            style={{ backgroundColor: theme.text, color: theme.bg }}
          >
            Gönder
          </button>

          <p
            className={`${sans.className} text-center text-xs font-light opacity-60`}
          >
            Form gönderimi yakında aktif olacak — şimdilik önizleme.
          </p>
        </form>
      </section>

      <Footer variant="wedding" />
    </div>
  );
}
