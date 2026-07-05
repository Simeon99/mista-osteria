import Image from "next/image";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const FACTS = [
  "72 sata fermentacije",
  "prirodan kvasac",
  "visoka hidriranost testa",
  "bez aditiva",
];

export function PizzaMenuHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block"
          >
            <div className="h-full w-px bg-border" />
            <span className="absolute -bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ink" />
          </div>

          <div className="flex flex-col items-center gap-10 text-center md:items-end md:pr-14 md:text-right lg:pr-20">
            <Reveal>
              <h1 className="font-display text-5xl leading-[1.1] tracking-[0.06em] text-ink md:text-6xl lg:text-7xl">
                Pizza
                <br />
                Jelovnik
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-3 text-sm tracking-[0.12em] text-ink-muted md:text-base">
                {FACTS.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-center justify-center gap-2 md:justify-end"
                  >
                    <CheckIcon
                      size={14}
                      weight="bold"
                      className="shrink-0 text-accent-strong"
                    />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={0.15}
            className="flex justify-center md:justify-start md:pl-14 lg:pl-20"
          >
            <div className="relative aspect-[270/534] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[230px]">
              <Image
                src="/depositphotos_15951557-stock-pho 1.png"
                alt="Sveža margarita pica, presečena na pola"
                fill
                sizes="(max-width: 768px) 60vw, 25vw"
                className="object-contain"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
