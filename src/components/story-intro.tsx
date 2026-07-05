import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function StoryIntro() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[3/5] w-full max-w-sm overflow-hidden rounded-full">
              <Image
                src="/IMG_3962.JPG"
                alt="Pekar rasteže sveže testo iznad velike posude za mešenje"
                fill
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-strong">
              Inspirisano italijanskom tradicijom
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Mesto gde se pica pravi drugačije
            </h2>
            <div className="mt-6 max-w-[58ch] space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                U srcu Kruševca stvaramo mesto gde se poštuje vreme i proces,
                baš onako kako se radi u Italiji. Testo fermentiše danima,
                sastojci se biraju pažljivo, a svaka pica se priprema sa
                jasnom idejom, da bude lagana, uravnotežena i punog ukusa.
              </p>
              <p>
                Ukus je ono što ostaje. Onaj prepoznatljiv, čist i prirodan,
                kakav biste očekivali u pizzerijama Napulja ili Rima gde je
                sve podređeno testu, sosu i savršenom balansu.
              </p>
              <p className="text-ink">
                Bez viška, bez prečica.
                <br />
                Samo pica koja ima karakter i govori sama za sebe.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
