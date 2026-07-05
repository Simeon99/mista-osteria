"use client";

import { Reveal } from "@/components/reveal";
import { ParallaxPhoto } from "@/components/ui/parallax-photo";

const SASTOJCI = [
  {
    name: "Brašno Petra",
    desc: "Iz Italije, mleveno za testo koje sporo fermentira punih 72 sata.",
    poreklo: "Italija",
  },
  {
    name: "Italijanski salumi",
    desc: "Mortadela, gvančale, panceta i pršut — birani direktno od italijanskih proizvođača.",
    poreklo: "Italija",
  },
  {
    name: "Fior di latte i buffala mocarela",
    desc: "Sveži italijanski sirevi, uvezeni radi kremaste teksture koja se ne da imitirati.",
    poreklo: "Italija",
  },
  {
    name: "Pirinač San Massimo",
    desc: "Sorta uzgajana za rižoto — upija ukus, a ostaje kremast do poslednjeg zalogaja.",
    poreklo: "Italija",
  },
  {
    name: "Paradajz La Torrente",
    desc: "Sunčan italijanski paradajz, osnova našeg sosa za picu bez ijednog dodatka.",
    poreklo: "Italija",
  },
  {
    name: "Mesara Morava",
    desc: "Pažljivo birana srpska govedina, sazrevana za stekove najviše klase.",
    poreklo: "Srbija",
  },
  {
    name: "Parmigiano Reggiano i Pecorino Romano",
    desc: "Zreli italijanski sirevi koji zaokružuju ukus, od testa do tanjira.",
    poreklo: "Italija",
  },
  {
    name: "Ekstra devičansko maslinovo ulje",
    desc: "Hladno ceđeno italijansko ulje, prisutno u svakom jelu koje izađe iz naše kuhinje.",
    poreklo: "Italija",
  },
];

function IngredientRow({
  index,
  name,
  desc,
  poreklo,
}: {
  index: number;
  name: string;
  desc: string;
  poreklo: string;
}) {
  return (
    <Reveal delay={0.04 * index} y={16}>
      <li className="group list-none py-7 first:pt-0 md:py-8">
        <div className="flex flex-col gap-2 transition-transform duration-500 ease-out group-hover:translate-x-1.5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm text-accent-strong/70 [font-variant-numeric:tabular-nums]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className="h-px w-6 bg-ink/20 transition-all duration-500 ease-out group-hover:w-10 group-hover:bg-accent-strong"
            />
            <h3 className="font-display text-xl text-ink transition-colors duration-500 group-hover:text-accent-strong md:text-2xl">
              {name}
            </h3>
          </div>
          <span className="shrink-0 font-display text-sm italic text-ink-muted/70 md:text-right">
            {poreklo}
          </span>
        </div>
        <p className="mt-3 max-w-[58ch] text-sm text-ink-muted md:pl-[76px] md:text-base">
          {desc}
        </p>
      </li>
    </Reveal>
  );
}

export function Provenance() {
  return (
    <section
      id="sastojci"
      className="relative overflow-hidden bg-background py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <p
        aria-hidden
        className="pointer-events-none absolute -top-4 left-0 right-0 select-none whitespace-nowrap font-display text-[22vw] italic leading-none text-ink/[0.035] md:text-[16vw]"
      >
        Materia Prima
      </p>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-lg italic text-accent-strong">
                Materia Prima
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-[3.25rem]">
                Izuzetna jela počinju izuzetnim{" "}
                <em className="italic">sastojcima</em>.
              </h2>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-ink-muted md:text-lg">
                Ne pravimo kompromise oko onoga što stavljamo na tanjir.
                Brašno, meso, sir i povrće biramo lično, od proizvođača koje
                poznajemo po imenu — ne po katalogu. Ono što ne bismo
                servirali gostu, ne ulazi u našu kuhinju.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-14 hidden lg:block">
              <ParallaxPhoto
                src="/Sastojci toscana.png"
                alt="Ruke oblikuju testo od brašna Petra pre 72-časovne fermentacije"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-28">
            <ul className="border-t border-border">
              {SASTOJCI.map((item, i) => (
                <IngredientRow key={item.name} index={i} {...item} />
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="lg:hidden">
            <ParallaxPhoto
              src="/Sastojci toscana.png"
              alt="Ruke oblikuju testo od brašna Petra pre 72-časovne fermentacije"
            />
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="mx-auto mt-28 max-w-[30ch] border-t border-border pt-14 text-center md:mt-36 md:max-w-[36ch] md:pt-16"
        >
          <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
            Ne verujemo da izuzetna hrana počinje u kuhinji. Počinje mnogo
            pre prvog plamena.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
