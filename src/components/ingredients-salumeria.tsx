import { Reveal } from "@/components/reveal";
import { ParallaxPhoto } from "@/components/ui/parallax-photo";

const ITEMS = [
  { name: "Prosciutto di Parma", note: "24 meseca zrenja" },
  { name: "Guanciale", note: "Svinjski obraz, so, biber" },
  { name: "Spianata Calabrese", note: "Kalabrija, blago ljuta" },
];

export function IngredientsSalumeria() {
  return (
    <section
      id="salumerija"
      className="relative overflow-hidden bg-background py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <Reveal>
            <ParallaxPhoto
              src="/store.png"
              alt="Biftek carpaccio sa kaparima i mikrobiljem, tamna atmosfera"
              className="aspect-[4/5]"
              rounded="rounded-none"
              range={8}
            />
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span aria-hidden className="block h-px w-14 bg-accent" />
                <span className="text-xs uppercase tracking-[0.42em] text-accent-strong">
                  02 — Salumerija
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="m-0 mb-8 text-balance font-display text-4xl leading-[1.12] text-ink md:text-6xl">
                Zrenje se ne požuruje.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mb-14 max-w-[44ch] text-sm font-light leading-[2] text-ink-muted">
                Suhomesnate proizvode ne biramo po ceni, već po poreklu.
                Svaki dolazi iz Italije, iz radionica gde se so, vazduh i
                vreme još uvek smatraju receptom.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-col">
                {ITEMS.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex items-baseline justify-between gap-6 border-t border-ink/[0.08] py-5 ${i === ITEMS.length - 1 ? "border-b" : ""
                      }`}
                  >
                    <span className="font-display text-xl text-ink md:text-2xl">
                      {item.name}
                    </span>
                    <span className="whitespace-nowrap text-xs uppercase tracking-[0.18em] text-accent-strong">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
