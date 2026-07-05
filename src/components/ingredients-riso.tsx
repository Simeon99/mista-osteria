import { Reveal } from "@/components/reveal";
import { ParallaxPhoto } from "@/components/ui/parallax-photo";

export function IngredientsRiso() {
  return (
    <section
      id="riza"
      className="relative overflow-hidden bg-dark px-6 py-32 md:px-16 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-3 top-24 select-none whitespace-nowrap font-display text-[19vw] leading-none text-accent-soft/[0.07] md:-left-5 md:text-[20vw]"
      >
        RISO
      </div>

      <div className="relative mx-auto grid max-w-[1312px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div>
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span aria-hidden className="block h-px w-14 bg-accent-soft" />
              <span className="text-xs uppercase tracking-[0.42em] text-accent-soft">
                04 — Pirinač
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 mb-8 text-balance font-display text-4xl leading-[1.14] text-background md:text-6xl">
              Pravi rižoto počinje pravim zrnom.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mb-6 max-w-[44ch] text-sm font-light leading-[2] text-background/65">
              San Massimo — carnaroli pirinač sa zaštićenog imanja u Lombardiji.
              Zrno koje upija, a ne raspada se; koje daje kremoznost, a
              ostaje al dente.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mb-12 max-w-[44ch] text-sm font-light leading-[2] text-background/65">
              Zato naš rižoto ne zavisi od trikova u kuhinji. Zavisi od
              izbora — donetog mnogo pre prvog mešanja.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-14">
              <div>
                <div className="font-display text-3xl text-accent-soft md:text-4xl">
                  Carnaroli
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-background/45">
                  Kralj rižota
                </div>
              </div>
              <div className="border-l border-accent-soft/30 pl-8 sm:pl-10 md:pl-14">
                <div className="font-display text-3xl text-accent-soft md:text-4xl">
                  Riserva
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-background/45">
                  Jedno imanje, jedna žetva
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ParallaxPhoto
            src="/Riserva-San-Massimo-CARNAROLI-pa.jpg"
            alt="Kremasti rižoto sa pršutom, para se izdiže sa tanjira"
            className="aspect-[4/5]"
            rounded="rounded-none"
            range={9}
          />
        </Reveal>
      </div>
    </section>
  );
}
