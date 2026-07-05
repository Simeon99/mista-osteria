import { Reveal } from "@/components/reveal";

const LINKS = [
  { href: "#pietra", num: "01", label: "Petra brašno" },
  { href: "#salumerija", num: "02", label: "Italijanska salumerija" },
  { href: "#mesara", num: "03", label: "Mesara Morava" },
  { href: "#riza", num: "04", label: "San Massimo pirinač" },
  { href: "#selekcija", num: "05", label: "Premium selekcija" },
];

export function IngredientsManifest() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-16 md:py-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-24">
        <div>
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span aria-hidden className="block h-px w-14 bg-accent" />
              <span className="text-xs uppercase tracking-[0.42em] text-accent-strong">
                Naša filozofija
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 text-balance font-display text-4xl leading-[1.18] text-ink md:text-6xl">
              Ne počinje sve u kuhinji.
              <br />
              <span className="text-accent-strong">Počinje izborom.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:pt-16">
          <Reveal delay={0.18}>
            <p className="max-w-[44ch] text-sm font-light leading-[2] text-ink-muted">
              Ukus koji pamtite nastaje u mlinu u Italiji, na pirinčanim
              poljima Lombardije, u podrumima gde pršut zri mesecima. Mi samo
              poštujemo ono što je već urađeno kako treba — i ne skraćujemo
              ništa.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-11 flex flex-col">
              {LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group flex items-baseline gap-6 border-t border-ink/[0.08] py-[18px] no-underline ${i === LINKS.length - 1 ? "border-b" : ""
                    }`}
                >
                  <span className="text-xs tracking-[0.2em] text-accent-strong">
                    {link.num}
                  </span>
                  <span className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-accent-strong">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
