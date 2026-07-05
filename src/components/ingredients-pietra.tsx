import { Reveal } from "@/components/reveal";
import { ParallaxPhoto } from "@/components/ui/parallax-photo";

export function IngredientsPietra() {
  return (
    <section
      id="pietra"
      className="relative mx-auto max-w-[1440px] overflow-hidden px-6 py-20 md:px-16 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-2 -top-3 select-none whitespace-nowrap font-display text-[18vw] leading-none tracking-wide text-transparent md:text-[14vw]"
        style={{ WebkitTextStroke: "1px rgba(43,32,24,0.14)" }}
      >
        PETRA
      </div>

      <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:pt-24">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span aria-hidden className="block h-px w-14 bg-accent" />
              <span className="text-xs uppercase tracking-[0.42em] text-accent-strong">
                01 — Brašno
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 mb-8 font-display text-5xl leading-[1.1] text-ink md:text-7xl">
              Petra.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mb-6 max-w-[42ch] text-sm font-light leading-[2] text-ink-muted">
              Premium italijansko brašno, mleveno kombinacijom kamenih mlinova
              i livenih gvozdenih valjaka. Najstabilnije brašno na tržištu —
              ponaša se isto, dan za danom, u svakom testu.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="max-w-[42ch] text-sm font-light leading-[2] text-ink-muted">
              Od njega mesimo testo koje fermentiše tri dana. Rezultat je
              vazduh: lagana, hrskava kora koja nosi ukus, ne težinu.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-11 font-display text-sm italic tracking-wide text-accent-strong">
              Strpljenje je sastojak.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-14 pt-10">
          <Reveal>
            <ParallaxPhoto
              src="/testo mista.png"
              alt="Presek fermentiranog testa sa vazdušastim mehurićima"
              className="aspect-[4/5]"
              rounded="rounded-none"
              range={7}
            />
            <div className="mt-3.5 flex justify-between">
              <span className="text-[11px] uppercase tracking-[0.28em] text-ink-muted/70">
                Testo, dan treći
              </span>
              <span className="text-[11px] tracking-[0.28em] text-ink-muted/70">
                — 01
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="w-[72%] self-end">
            <ParallaxPhoto
              src="/brasno.png"
              alt="Brašno i testo tokom mešenja"
              className="aspect-square"
              rounded="rounded-none"
              range={13}
            />
            <div className="mt-3.5 flex justify-between">
              <span className="text-[11px] uppercase tracking-[0.28em] text-ink-muted/70">
                Mleveno na kamenu
              </span>
              <span className="text-[11px] tracking-[0.28em] text-ink-muted/70">
                — 02
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
