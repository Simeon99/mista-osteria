import Image from "next/image";
import { HourglassIcon, GrainsIcon, OvenIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    icon: HourglassIcon,
    caption: "72 sata fermentacije testa",
    desc: "Testo pripremamo unapred i ostavljamo da fermentiše puna 72 sata. Taj proces razvija dubinu ukusa, laganu teksturu i savršenu strukturu. Rezultat je pica koja je lakša za varenje, bogatija aromom i stabilna u svakom zalogaju.",
  },
  {
    icon: GrainsIcon,
    caption: "Pažljivo birani sastojci iz Italije",
    desc: "Koristimo proverene, visokokvalitetne sastojke iz Italije, od brašna i paradajza, do sireva i maslinovog ulja. Ne mešamo ukuse bez razloga. Svaki sastojak ima jasnu ulogu i doprinosi balansu, ne nadjačavanju.",
  },
  {
    icon: OvenIcon,
    caption: "Glavna zvezda peć Marana Forni",
    desc: "Sve što je danima pažljivo pripremano, u ovoj peći dobija svoj puni izraz: brzinu, teksturu i ukus koji se pamti.",
  },
];

export function StoryProcess() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <Image
                src="/testo vazduh.png"
                alt="Testo i brašno u pokretu, tekstura pripreme"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="scale-125 object-cover object-[30%_60%]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Proces koji pravi razliku
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-muted md:text-lg">
              Ništa ne prepuštamo slučaju. Od testa koje fermentiše danima,
              preko pažljivo biranih sastojaka iz Italije, do savremene peći
              koja daje završni potpis — svaki korak ima svoju ulogu u ukusu
              koji se pamti.
            </p>

            <div className="relative mt-10">
              <div
                aria-hidden
                className="absolute left-[68px] top-2 bottom-2 w-px bg-border md:left-[76px]"
              />
              <div className="space-y-9">
                {STEPS.map((step) => (
                  <div
                    key={step.caption}
                    className="relative grid grid-cols-[68px_1fr] items-start gap-5 md:grid-cols-[76px_1fr] md:gap-6"
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <step.icon
                        size={26}
                        weight="light"
                        className="text-accent-strong"
                      />
                      <p className="text-[0.65rem] leading-tight text-ink-muted">
                        {step.caption}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="absolute left-[68px] top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-strong md:left-[76px]"
                    />
                    <p className="pt-1 text-sm leading-relaxed text-ink-muted md:text-base">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
