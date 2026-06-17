import { SectionHeading } from "@/components/common/SectionHeading";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingScheduleSection() {
  const theme = getTheme("wedding");

  return (
    <section id="program" style={{ backgroundColor: theme.bgAccent }}>
      <div className="mx-auto max-w-3xl px-6 py-12 lg:py-14">
        <SectionHeading
          eyebrow="Program"
          title="Günün Akışı"
          variant="wedding"
          className="mb-10"
        />
        <ol className="space-y-0">
          <li
            className="grid grid-cols-[5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
            style={{ borderColor: theme.border }}
          >
            <p className={`${serif.className} text-lg tracking-wide sm:text-xl`} style={{ color: theme.gold }}>
              19.00
            </p>
            <div>
              <p className={`${serif.className} mb-1 text-lg font-normal sm:text-xl`} style={{ color: theme.text }}>
                Kapı Açılışı & Karşılama
              </p>
              <p className={`${sans.className} text-sm opacity-70`}>Aden Boğazköy Tesisleri</p>
            </div>
            <span className="sr-only">Sonraki</span>
          </li>
          <li
            className="grid grid-cols-[5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
            style={{ borderColor: theme.border }}
          >
            <p className={`${serif.className} text-lg tracking-wide sm:text-xl`} style={{ color: theme.gold }}>
              19.30
            </p>
            <div>
              <p className={`${serif.className} mb-1 text-lg font-normal sm:text-xl`} style={{ color: theme.text }}>
                Nikah Töreni
              </p>
            </div>
            <span className="sr-only">Sonraki</span>
          </li>
          <li
            className="grid grid-cols-[5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
            style={{ borderColor: theme.border }}
          >
            <p className={`${serif.className} text-lg tracking-wide sm:text-xl`} style={{ color: theme.gold }}>
              20.15
            </p>
            <div>
              <p className={`${serif.className} mb-1 text-lg font-normal sm:text-xl`} style={{ color: theme.text }}>
                Kokteyl
              </p>
            </div>
            <span className="sr-only">Sonraki</span>
          </li>
          <li
            className="grid grid-cols-[5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
            style={{ borderColor: theme.border }}
          >
            <p className={`${serif.className} text-lg tracking-wide sm:text-xl`} style={{ color: theme.gold }}>
              21.00
            </p>
            <div>
              <p className={`${serif.className} mb-1 text-lg font-normal sm:text-xl`} style={{ color: theme.text }}>
                Akşam Yemeği & Kutlama
              </p>
            </div>
            <span className="sr-only">Sonraki</span>
          </li>
          <li
            className="grid grid-cols-[5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
            style={{ borderColor: theme.border }}
          >
            <p className={`${serif.className} text-lg tracking-wide sm:text-xl`} style={{ color: theme.gold }}>
              23.00
            </p>
            <div>
              <p className={`${serif.className} mb-1 text-lg font-normal sm:text-xl`} style={{ color: theme.text }}>
                İlk Dans & Eğlence
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
