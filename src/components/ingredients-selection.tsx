import { Reveal } from "@/components/reveal";
import { ParallaxPhoto } from "@/components/ui/parallax-photo";

const MARQUEE_ITEMS = [
  "San Marzano DOP",
  "Fior di Latte",
  "Parmigiano Reggiano",
  "Ekstra devičansko ulje",
  "Burrata di Puglia",
  "Aceto Balsamico",
];

const PHOTOS = [
  {
    src: "/IMG_3647.JPG",
    alt: "Makro: sos od paradajza na svežem testu",
    caption: "LA TORRENTE PELAT - KAMPANIJA, ITALIJA",
    offset: "pt-16",
  },
  {
    src: "/4a09f1682f62f4da236d04c4c04330d1.jpg",
    alt: "Makro: feta sir sa paradajzom i bosiljkom",
    caption: "EMILIA-ROMAGNA, ITALIJA",
    offset: "",
  },
  {
    src: "/f6d9ac2d9f69288b0bb358338e29f179.jpg",
    alt: "Sveži bosiljak na sosu od paradajza",
    caption: "ABRUZZO, ITALIJA",
    offset: "pt-32",
  },
];

export function IngredientsSelection() {
  return (
    <section
      id="selekcija"
      className="relative overflow-hidden bg-background pb-16 pt-32 md:pt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="mb-24 grid grid-cols-1 items-end gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span aria-hidden className="block h-px w-14 bg-accent" />
                <span className="text-xs uppercase tracking-[0.42em] text-accent-strong">
                  05 — Selekcija
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="m-0 font-display text-4xl leading-[1.12] text-ink md:text-6xl">
                Italija, direktno.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-[44ch] text-sm font-light leading-[2] text-ink-muted md:ml-auto md:text-right">
              Od paradajza do maslinovog ulja — svaka namirnica na našem
              meniju ima poreklo koje možemo da imenujemo. Originalne
              italijanske namirnice, bez alternativa.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="overflow-hidden border-y border-ink/[0.08] py-8">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-baseline gap-11 pr-11"
            >
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-baseline gap-11">
                  <span className="whitespace-nowrap font-display text-[34px] text-ink">
                    {item}
                  </span>
                  <span aria-hidden className="text-xl text-accent">
                    ·
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-24 md:px-16">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-10">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 0.08}
              className={photo.offset}
            >
              <ParallaxPhoto
                src={photo.src}
                alt={photo.alt}
                className="aspect-[3/4]"
                rounded="rounded-none"
                range={10}
              />
              <div className="mt-3.5 text-[11px] uppercase tracking-[0.28em] text-ink-muted/70">
                {photo.caption}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
