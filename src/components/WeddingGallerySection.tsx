import { SectionHeading } from "@/components/SectionHeading";
import { weddingGallery } from "@/data/content";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingGallerySection() {
  const theme = getTheme("wedding");

  return (
    <section id="galeri" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-14">
        <SectionHeading
          eyebrow={weddingGallery.eyebrow}
          title={weddingGallery.title}
          variant="wedding"
          className="mb-4"
        />
        <p className={`${sans.className} mx-auto mb-8 max-w-lg text-center text-sm opacity-70`}>
          {weddingGallery.note}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {weddingGallery.placeholders.map((label) => (
            <div
              key={label}
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
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
