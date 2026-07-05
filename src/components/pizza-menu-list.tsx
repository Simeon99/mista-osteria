"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Reveal } from "@/components/reveal";

type Category = "sve" | "rosse" | "bianche";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "sve", label: "Sve kategorije" },
  { key: "rosse", label: "Rosse" },
  { key: "bianche", label: "Bianche" },
];

const PIZZE = [
  {
    name: "Margarita",
    price: "850 RSD",
    sastojci: "Pelat, mocarela, bosiljak, pekorino.",
    kategorija: "rosse" as const,
  },
  {
    name: "Capricosa",
    price: "1.150 RSD",
    sastojci: "Pelat, mocarela, cotto šunka, šampinjoni, artičoka, masline.",
    kategorija: "rosse" as const,
  },
  {
    name: "Diavola",
    price: "1.150 RSD",
    sastojci: "Pelat, mocarela, kulen, nduja.",
    kategorija: "rosse" as const,
  },
  {
    name: "Amatriciana",
    price: "1.150 RSD",
    sastojci: "Pelat, mocarela, pančeta, nduja, luk, parmezan.",
    kategorija: "rosse" as const,
  },
  {
    name: "Mortabella",
    price: "1.350 RSD",
    sastojci:
      "Ricotta podloga, mocarela, mortadela, pistaći krem, bufala, parmezan, pistaći.",
    kategorija: "bianche" as const,
  },
  {
    name: "Rustica",
    price: "1.450 RSD",
    sastojci:
      "Alfredo podloga, mocarela, sušeni paradajz, pančeta, ricotta, parmezan, hrskava pančeta.",
    kategorija: "bianche" as const,
  },
  {
    name: "Vegetariana",
    price: "900 RSD",
    sastojci:
      "Pelat, mocarela, šampinjoni, tikvica, paprika, luk, čeri paradajz, masline.",
    kategorija: "rosse" as const,
  },
  {
    name: "Marinara",
    price: "800 RSD",
    sastojci: "Pelat, kapar, bosiljak, maslinovo ulje, beli luk.",
    kategorija: "rosse" as const,
  },
  {
    name: "Burrata",
    price: "1.600 RSD",
    sastojci:
      "Pelat, mocarela, žuti čeri paradajz, pančeta, burrata, rukola.",
    kategorija: "rosse" as const,
  },
  {
    name: "Salvia",
    price: "1.350 RSD",
    sastojci:
      "Ricotta podloga, mocarela, gorgonzola, goveđa pršuta, rukola, čeri paradajz.",
    kategorija: "bianche" as const,
  },
  {
    name: "Quattro Formaggi",
    price: "1.150 RSD",
    sastojci: "Ricotta podloga, mocarela, gorgonzola, parmezan, pekorino.",
    kategorija: "bianche" as const,
  },
  {
    name: "Parma e Bufala",
    price: "1.350 RSD",
    sastojci:
      "Pelat, mocarela, pršuta, rukola, bufala, čeri paradajz, parmezan.",
    kategorija: "rosse" as const,
  },
  {
    name: "Cotto Bianca",
    price: "1.450 RSD",
    sastojci: "Alfredo podloga, mocarela, cotto šunka, šampinjoni, masline.",
    kategorija: "bianche" as const,
  },
  {
    name: "Mista",
    price: "1.650 RSD",
    sastojci:
      "Ricotta podloga, mocarela, tartufata, biftek carpaccio, rukola, parmezan, sušeni paradajz.",
    kategorija: "bianche" as const,
  },
];

const GALLERY = [
  {
    src: "/IMG_3671.JPG",
    alt: "Sveža margarita pica, upravo izvađena iz peći",
    className: "object-cover",
  },
  {
    src: "/IMG_3995.JPG",
    alt: "Pica se peče u peći na drva Moretti",
    className: "object-cover",
  },
  {
    src: "/IMG_4281.JPG",
    alt: "Sos se širi po svežem testu pre pečenja",
    className: "object-cover",
  },
  {
    src: "/IMG_3370.JPG",
    alt: "Zapečena, hrskava kora pice",
    className: "object-cover scale-125 object-[15%_85%]",
  },
];

export function PizzaMenuList() {
  const [active, setActive] = useState<Category>("sve");
  const [activeImage, setActiveImage] = useState(0);
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);

  const groups = useMemo(() => {
    if (active !== "sve") {
      return [
        { label: null, items: PIZZE.filter((p) => p.kategorija === active) },
      ];
    }
    return [
      { label: "Rosse", items: PIZZE.filter((p) => p.kategorija === "rosse") },
      {
        label: "Bianche",
        items: PIZZE.filter((p) => p.kategorija === "bianche"),
      },
    ];
  }, [active]);

  const filtered = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  const chunkSize = Math.max(1, Math.ceil(filtered.length / GALLERY.length));

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      GALLERY.length - 1,
      Math.max(0, Math.floor(latest * GALLERY.length))
    );
    setActiveImage((prev) => (prev !== index ? index : prev));
  });

  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              className={`text-sm font-semibold tracking-wide transition-colors ${active === cat.key
                ? "text-accent-strong underline decoration-2 underline-offset-4"
                : "text-ink-muted hover:text-ink"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-x-16 lg:grid-cols-[1fr_380px]">
          <div ref={listRef}>
            <ul className="border-t border-border lg:border-t-0">
              <div className="relative my-2 aspect-[4/3] w-full overflow-hidden lg:hidden">
                <Image
                  src={GALLERY[0].src}
                  alt={GALLERY[0].alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {groups.map((group, gi) => (
                <div key={group.label ?? "all"}>
                  {group.label && (
                    <Reveal
                      className={gi > 0 ? "mt-14 border-t border-border pt-10 md:mt-16 md:pt-12" : ""}
                    >
                      <h3 className="font-display text-xl italic text-accent-strong md:text-2xl">
                        {group.label}
                      </h3>
                    </Reveal>
                  )}
                  {group.items.map((pizza, localI) => {
                    const i = filtered.indexOf(pizza);
                    return (
                      <div key={pizza.name}>
                        {i > 0 && i % chunkSize === 0 && (
                          <div className="relative my-2 aspect-[4/3] w-full overflow-hidden lg:hidden">
                            <Image
                              src={GALLERY[Math.min(Math.floor(i / chunkSize), GALLERY.length - 1)].src}
                              alt={GALLERY[Math.min(Math.floor(i / chunkSize), GALLERY.length - 1)].alt}
                              fill
                              sizes="100vw"
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <Reveal delay={Math.min(i, 8) * 0.04} y={16}>
                          <li
                            className={`group list-none py-7 md:py-8 ${localI === 0 ? "" : "border-t border-border"
                              }`}
                          >
                            <div className="flex flex-col gap-2 transition-transform duration-500 ease-out group-hover:translate-x-1.5 md:flex-row md:items-baseline md:justify-between md:gap-8">
                              <div className="flex items-baseline gap-4">
                                <span className="font-display text-sm text-accent-strong/70 [font-variant-numeric:tabular-nums]">
                                  {String(PIZZE.indexOf(pizza) + 1).padStart(2, "0")}
                                </span>
                                <span
                                  aria-hidden
                                  className="h-px w-6 bg-ink/20 transition-all duration-500 ease-out group-hover:w-10 group-hover:bg-accent-strong"
                                />
                                <h3 className="font-display text-xl text-ink transition-colors duration-500 group-hover:text-accent-strong md:text-2xl">
                                  {pizza.name}
                                </h3>
                              </div>
                              <span className="shrink-0 whitespace-nowrap font-semibold text-accent-strong md:text-lg">
                                {pizza.price}
                              </span>
                            </div>
                            <p className="mt-3 max-w-[62ch] text-sm text-ink-muted md:pl-[76px] md:text-base">
                              {pizza.sastojci}
                            </p>
                          </li>
                        </Reveal>
                      </div>
                    );
                  })}
                </div>
              ))}
            </ul>
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] w-full overflow-hidden">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={GALLERY[activeImage].src + activeImage}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={GALLERY[activeImage].src}
                    alt={GALLERY[activeImage].alt}
                    fill
                    sizes="380px"
                    className={GALLERY[activeImage].className}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
