import { SectionHeading } from "@/components/common/SectionHeading";
import { WeddingBotanicalAccent } from "@/components/wedding/decorations/WeddingBotanicalAccent";
import { serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingStorySection() {
  const theme = getTheme("wedding");

  return (
    <section id="hikayemiz" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div
          className="relative flex items-center justify-center px-8 py-12 lg:py-14"
          style={{ backgroundColor: theme.bgLayer }}
        >
          <WeddingBotanicalAccent color={theme.accent} accentColor={theme.gold} className="absolute left-6 top-8 h-20 w-28" />
          <p
            className={`${serif.className} relative z-10 max-w-xs text-center text-3xl font-normal italic leading-snug sm:text-4xl`}
            style={{ color: theme.text }}
          >
            Birlikte yazdığımız yolculuk
          </p>
        </div>
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          <SectionHeading
            eyebrow="Hikayemiz"
            title="Madrid'den İstanbul'a"
            variant="wedding"
            align="left"
            className="mb-6"
          />
          <p
            className={`${serif.className} text-lg leading-relaxed sm:text-xl`}
            style={{ color: theme.text, opacity: 0.9 }}
          >
            Madrid&apos;de başlayan hikâyemizi, İstanbul&apos;un zamansız zarafetiyle taçlandırıyoruz.
            Aden Boğazköy Tesisleri&apos;nde, bu yolculuğun en güzel sayfasını birlikte yazıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
