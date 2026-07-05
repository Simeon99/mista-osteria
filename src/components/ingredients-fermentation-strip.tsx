import { Reveal } from "@/components/reveal";

const FACTS = [
  {
    title: "Hladna fermentacija",
    desc: "Tri dana na niskoj temperaturi. Šećeri se razgrađuju, ukus dobija dubinu.",
  },
  {
    title: "Prirodni kvasac",
    desc: "Pažljivo održavan, svakog dana. Bez prečica, bez dodataka.",
  },
  {
    title: "Vazduh u zalogaju",
    desc: "Testo koje nosi ukus, ne težinu. Lakše za varenje, bogatije aromom.",
  },
];

export function IngredientsFermentationStrip() {
  return (
    <section className="relative overflow-hidden bg-dark px-6 py-32 md:px-16 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-40px] top-1/2 -mt-[0.5em] select-none font-display text-[36vw] leading-none text-accent-soft/[0.06] md:text-[26vw]"
      >
        72
      </div>

      <div className="relative mx-auto max-w-[1312px]">
        <Reveal>
          <div className="mb-9 flex items-center gap-4">
            <span aria-hidden className="block h-px w-14 bg-accent-soft" />
            <span className="text-xs uppercase tracking-[0.42em] text-accent-soft">
              Naše testo
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="m-0 mb-20 max-w-[14ch] text-balance font-display text-5xl leading-[1.08] text-background md:mb-24 md:text-8xl">
            72 sata. <span className="text-accent-soft">Ni sat manje.</span>
          </h2>
        </Reveal>

        <div className="grid max-w-[1080px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-16">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.title} delay={0.16 + i * 0.08}>
              <div className="border-t border-accent-soft/35 pt-6">
                <p className="m-0 font-display text-xl leading-[1.5] text-background/90">
                  {fact.title}
                </p>
                <p className="mt-3 text-[13.5px] font-light leading-[1.9] text-background/60">
                  {fact.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
