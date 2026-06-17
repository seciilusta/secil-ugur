import { SectionHeading } from "@/components/common/SectionHeading";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingGallerySection() {
  const theme = getTheme("wedding");

  return (
    <section id="galeri" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-14">
        <SectionHeading eyebrow="Anılar" title="Galeri" variant="wedding" className="mb-4" />
        <p className={`${sans.className} mx-auto mb-8 max-w-lg text-center text-sm opacity-70`}>
          Düğün fotoğrafları burada paylaşılacak.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <div
            className="flex aspect-[4/5] items-center justify-center"
            style={{
              backgroundColor: theme.bgLayer,
              border: `1px solid ${theme.cardBorder}`,
              boxShadow: `inset 0 0 0 1px ${theme.border}`,
            }}
          >
            <span
              className={`${sans.className} text-[9px] uppercase tracking-[0.25em] opacity-40`}
              style={{ color: theme.text }}
            >
              I
            </span>
          </div>
          <div
            className="flex aspect-[4/5] items-center justify-center"
            style={{
              backgroundColor: theme.bgLayer,
              border: `1px solid ${theme.cardBorder}`,
              boxShadow: `inset 0 0 0 1px ${theme.border}`,
            }}
          >
            <span
              className={`${sans.className} text-[9px] uppercase tracking-[0.25em] opacity-40`}
              style={{ color: theme.text }}
            >
              II
            </span>
          </div>
          <div
            className="flex aspect-[4/5] items-center justify-center"
            style={{
              backgroundColor: theme.bgLayer,
              border: `1px solid ${theme.cardBorder}`,
              boxShadow: `inset 0 0 0 1px ${theme.border}`,
            }}
          >
            <span
              className={`${sans.className} text-[9px] uppercase tracking-[0.25em] opacity-40`}
              style={{ color: theme.text }}
            >
              III
            </span>
          </div>
          <div
            className="flex aspect-[4/5] items-center justify-center"
            style={{
              backgroundColor: theme.bgLayer,
              border: `1px solid ${theme.cardBorder}`,
              boxShadow: `inset 0 0 0 1px ${theme.border}`,
            }}
          >
            <span
              className={`${sans.className} text-[9px] uppercase tracking-[0.25em] opacity-40`}
              style={{ color: theme.text }}
            >
              IV
            </span>
          </div>
          <div
            className="flex aspect-[4/5] items-center justify-center"
            style={{
              backgroundColor: theme.bgLayer,
              border: `1px solid ${theme.cardBorder}`,
              boxShadow: `inset 0 0 0 1px ${theme.border}`,
            }}
          >
            <span
              className={`${sans.className} text-[9px] uppercase tracking-[0.25em] opacity-40`}
              style={{ color: theme.text }}
            >
              V
            </span>
          </div>
          <div
            className="flex aspect-[4/5] items-center justify-center"
            style={{
              backgroundColor: theme.bgLayer,
              border: `1px solid ${theme.cardBorder}`,
              boxShadow: `inset 0 0 0 1px ${theme.border}`,
            }}
          >
            <span
              className={`${sans.className} text-[9px] uppercase tracking-[0.25em] opacity-40`}
              style={{ color: theme.text }}
            >
              VI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
