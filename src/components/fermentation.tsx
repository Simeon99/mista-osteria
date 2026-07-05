import Image from "next/image";
import { Reveal } from "@/components/reveal";

const FACTS = [
  "72 sata fermentacije",
  "prirodan kvasac",
  "visoka hidriranost testa",
  "bez aditiva",
];

export function Fermentation() {
  return (
    <section
      id="nasa-pica"
      className="relative overflow-hidden bg-surface py-20 md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-y-0 left-4 w-px bg-accent-soft/60 md:left-6"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start lg:gap-8">
          <Reveal className="order-2 lg:order-1 lg:col-span-3">
            <div className="relative mx-auto aspect-[319/478] w-full max-w-[260px] overflow-hidden">
              <Image
                src="/ChatGPT Image Dec 12, 2025, 03_37_58 PM 1.png"
                alt="Sveže zamešeno testo od brašna Petra u mikseru"
                fill
                sizes="(max-width: 1024px) 60vw, 22vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-6">
            <div className="mx-auto max-w-md text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
                Naše testo
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                72h fermentacije.
                <br />
                Jedan trenutak.
              </h2>

              <div className="mx-auto mt-9 flex max-w-xs flex-col items-center text-sm text-ink-muted md:text-base">
                {FACTS.map((fact, i) => (
                  <div key={fact} className="contents">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="my-3 h-3 w-px bg-ink-muted/30"
                      />
                    )}
                    <p>{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="order-3 lg:col-span-3">
            <div className="relative mx-auto w-full max-w-[280px]">
              <Image
                src="/ChatGPT Image Dec 12, 2025, 03_33_48 PM 1.png"
                alt="Pekar prekriva sveže testo lanenom krpom"
                width={409}
                height={613}
                sizes="(max-width: 1024px) 60vw, 22vw"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-20">
          <div className="relative mx-auto aspect-[448/395] w-full max-w-md">
            <Image
              src="/testo 1.png"
              alt="Presek fermentiranog testa sa vazdušastim mehurićima"
              fill
              sizes="(max-width: 768px) 80vw, 448px"
              className="object-contain"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
