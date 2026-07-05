"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

interface MenuItem {
  name: string;
  price: string;
  sastojci?: string;
  prilog?: string;
}

interface Section {
  slug: string;
  navLabel: string;
  heading: string;
  items: MenuItem[];
  photo?: { src: string; alt: string; objectPosition?: string };
  pizzaTeaser?: boolean;
  distinctAccent?: boolean;
  showHours?: boolean;
}

const SECTIONS: Section[] = [
  {
    slug: "dorucak",
    navLabel: "doručak",
    heading: "Doručak",
    distinctAccent: true,
    showHours: true,
    photo: {
      src: "/IMG_5906.JPG",
      alt: "Doručak jelovnik slika",
    },
    items: [
      {
        name: "Avocado Toast",
        price: "450 RSD",
        sastojci:
          "Hrskavo tostirani integralni hleb sa kremastim pireom od avokada i cottage sirom, uz dva jaja na oko i hrskavu slaninu.",
      },
      {
        name: "Croissanti – Cornetto al salmone affumicato",
        price: "490 RSD",
        sastojci:
          "Dva puterasta francuska kroasana punjena dimljenim lososom i cottage sirom.",
      },
      {
        name: "Croissanti – Cornetto alla crema",
        price: "190 RSD",
        sastojci: "Puter kroasan punjen bogatom italijanskom kremom od vanile.",
      },
      {
        name: "Granola Bowl",
        price: "350 RSD",
        sastojci:
          "Grčki jogurt, domaća granola bez veštačkih zaslađivača, med i sezonsko voće.",
      },
      {
        name: "Omelette Classica",
        price: "200 RSD",
        sastojci: "Omlet od svežih jaja, pripremljen po tradicionalnoj recepturi.",
      },
      {
        name: "Omelette Verdure",
        price: "290 RSD",
        sastojci: "Omlet sa pažljivo odabranim sezonskim povrćem.",
      },
      {
        name: "Omelette Prosciutto e formaggio",
        price: "350 RSD",
        sastojci: "Omlet sa kvalitetnom šunkom i topljenim sirom.",
      },
      {
        name: "Omelette al salmone",
        price: "400 RSD",
        sastojci: "Omlet sa dimljenim lososom.",
      },
      {
        name: "Chia Pudding Premium",
        price: "390 RSD",
        sastojci:
          "Organsko chia seme u premium kokosovom mleku, zaslađeno medom uz granolu i sezonsko voće.",
      },
    ],
  },
  {
    slug: "hladna-predjela",
    navLabel: "hladna predjela",
    heading: "Hladna predjela",
    photo: {
      src: "/IMG_3091.jpeg",
      alt: "Biftek carpaccio sa kaparima, začinskim puterom i mikrobiljem",
    },
    items: [
      {
        name: "Italijanska goveđa pršuta",
        price: "800 RSD",
        sastojci: "Goveđa pršuta, čeri paradajz, masline.",
      },
      {
        name: "Italijanska svinjska pršuta",
        price: "550 RSD",
        sastojci: "Svinjska pršuta, čeri paradajz, masline.",
      },
      {
        name: "Brusketi Piko di Galo",
        price: "390 RSD",
        sastojci:
          "5 parčeta grilovanog hleba, paradajz, maslinovo ulje, beli luk, crni luk, svinjska pršuta.",
      },
      {
        name: "Biftek Carpaccio",
        price: "1.450 RSD",
        sastojci:
          "Biftek, rukola, puter, kapar, hleb, listići parmezana, maslinovo ulje.",
      },
      {
        name: "Burata",
        price: "950 RSD",
        sastojci: "Burrata, rukola, hleb, čeri paradajz, masline.",
      },
      {
        name: "Selekcija sireva",
        price: "950 RSD",
        sastojci: "Selekcija četiri vrste sireva.",
      },
    ],
  },
  {
    slug: "topla-predjela",
    navLabel: "topla predjela",
    heading: "Topla predjela",
    photo: {
      src: "/IMG_3982.JPG",
      alt: "Feta Saganaki pečena u tiganju sa paradajzom, bosiljkom i grilovanim hlebom",
      objectPosition: "object-[58%_38%]",
    },
    items: [
      {
        name: "Feta Saganaki",
        price: "390 RSD",
        sastojci: "Feta sir, paradajz, čeri paradajz, beli luk, crni luk, feferoni.",
      },
      {
        name: "Parmigiana di Melanzane",
        price: "550 RSD",
        sastojci:
          "Plavi patlidžan, sos od paradajza, mozzarella, maslinovo ulje, parmezan.",
      },
    ],
  },
  {
    slug: "supe",
    navLabel: "supe",
    heading: "Supe",
    items: [
      { name: "Potaž od paradajza", price: "350 RSD" },
      { name: "Potaž od povrća", price: "350 RSD" },
      { name: "Potaž od pečuraka", price: "350 RSD" },
    ],
  },
  {
    slug: "pizza",
    navLabel: "pizza",
    heading: "Pizza",
    pizzaTeaser: true,
    photo: {
      src: "/IMG_3956.JPG",
      alt: "Sveža margarita pica, upravo izvađena iz peći",
    },
    items: [
      {
        name: "Margarita",
        price: "850 RSD",
        sastojci: "Pelat, mocarela, bosiljak, pekorino.",

      },
      {
        name: "Capricosa",
        price: "1.150 RSD",
        sastojci: "Pelat, mocarela, cotto šunka, šampinjoni, artičoka, masline.",

      },
      {
        name: "Mortabella",
        price: "1.350 RSD",
        sastojci:
          "Ricotta podloga, mocarela, mortadela, pistaći krem, bufala, parmezan, pistaći.",

      },
      {
        name: "Burrata",
        price: "1.600 RSD",
        sastojci:
          "Pelat, mocarela, žuti čeri paradajz, pančeta, burrata, rukola.",

      },
      {
        name: "Parma e Bufala",
        price: "1.350 RSD",
        sastojci:
          "Pelat, mocarela, pršuta, rukola, bufala, čeri paradajz, parmezan.",

      },
      {
        name: "Cotto Bianca",
        price: "1.450 RSD",
        sastojci: "Alfredo podloga, mocarela, cotto šunka, šampinjoni, masline.",

      },
      {
        name: "Mista",
        price: "1.650 RSD",
        sastojci:
          "Ricotta podloga, mocarela, tartufata, biftek carpaccio, rukola, parmezan, sušeni paradajz.",
      },
    ],
  },
  {
    slug: "rizoto",
    navLabel: "rižoto",
    heading: "Rižoto",
    photo: {
      src: "/DSC02265 (1).JPG",
      alt: "Kremasti rižoto sa pršutom i sušenim paradajzom",
      objectPosition: "object-[55%_40%]",
    },
    items: [
      {
        name: "Rižoto sa biftekom i pečurkama",
        price: "1.350 RSD",
        sastojci:
          "Biftek, vrganji, šampinjoni, luk, beli luk, sušeni paradajz, puter, parmezan, mladi luk.",
      },
      {
        name: "Rižoto sa jajčarom i biftek carpacciom",
        price: "1.350 RSD",
        sastojci:
          "Jajčara, biftek carpaccio, praziluk, puter, parmezan, sušeni paradajz.",
      },
      {
        name: "Rižoto piletina tikvice",
        price: "900 RSD",
        sastojci: "Piletina, tikvice, praziluk, puter, parmezan.",
      },
      {
        name: "Rižoto sa gamborima",
        price: "1.300 RSD",
        sastojci:
          "Paradajz sos, luk, beli luk, čeri paradajz, gambori, puter, parmezan.",
      },
      {
        name: "Rižoto bukovača sa carpacciom od pačetine",
        price: "1.350 RSD",
        sastojci:
          "Bukovača, celer, carpaccio od pačetine, luk, beli luk, puter, parmezan, sušeni paradajz.",
      },
      {
        name: "Rižoto vegetarijana",
        price: "850 RSD",
        sastojci:
          "Boranija, žuta boranija, zelena boranija, šargarepa, čeri paradajz, puter, parmezan, luk, sušeni paradajz.",
      },
    ],
  },
  {
    slug: "paste",
    navLabel: "paste",
    heading: "Paste",
    photo: {
      src: "/IMG_4170.JPG",
      alt: "Tagliatelle sa tartufatom i pecorino romano",
    },
    items: [
      {
        name: "Tagliatelle Carbonara",
        price: "900 RSD",
        sastojci: "Tagliatelle, guanciale, Pecorino Romano, jaja, biber, parmezan.",
      },
      {
        name: "Tagliatelle sa špekom i vrganjima",
        price: "1.200 RSD",
        sastojci:
          "Tagliatelle, špek, vrganji, parmezan, praziluk, beli luk, crni luk, puter.",
      },
      {
        name: "Pikantne Tagliatelle sa biftekom",
        price: "1.350 RSD",
        sastojci:
          "Tagliatelle, biftek, miks povrća, peperonćini, maslinovo ulje, sušeni paradajz.",
      },
      {
        name: "Tagliatelle Amatriciana",
        price: "1.200 RSD",
        sastojci:
          "Tagliatelle, luk, beli luk, parmezan, jaja, pikantna kobasica, pančeta.",
      },
      {
        name: "Pene sa piletinom i šampinjonima",
        price: "950 RSD",
        sastojci:
          "Penne, piletina, sušeni paradajz, šampinjoni, parmezan, puter, listići padema.",
      },
      {
        name: "Tagliatelle Fungi",
        price: "850 RSD",
        sastojci:
          "Tagliatelle, šampinjoni, vrganji, bukovača, luk, beli luk, puter, parmezan.",
      },
    ],
  },
  {
    slug: "obrok-salate",
    navLabel: "obrok salate",
    heading: "Obrok salate",
    items: [
      {
        name: "Mix salata sa biftekom i baby mozzarellom",
        price: "950 RSD",
        sastojci: "Salata Sinfonija, biftek, čeri paradajz, parmezan, baby mozzarella.",
      },
      {
        name: "Mix salata sa ćurećim fileom",
        price: "850 RSD",
        sastojci:
          "Salata Sinfonija, čeri paradajz, ćureći file, sušena brusnica, borovnica, mozzarella.",
      },
      {
        name: "Mix salata sa glaziranim orašastim plodovima",
        price: "750 RSD",
        sastojci: "Salata Sinfonija, pistaći, badem, orah, borovnica, sušena smokva.",
      },
    ],
  },
  {
    slug: "salate",
    navLabel: "salate",
    heading: "Salate",
    items: [
      { name: "Orient salata", price: "350 RSD" },
      { name: "Simfonija Cherry", price: "350 RSD" },
      { name: "Žilijen Mix", price: "350 RSD" },
      { name: "Paradajz", price: "300 RSD" },
    ],
  },
  {
    slug: "carne",
    navLabel: "carne",
    heading: "Carne",
    photo: {
      src: "/IMG_2606.jpeg",
      alt: "Biftek sa roštilja, mladim krompirom i žutom boranijom",
      objectPosition: "object-[50%_62%]",
    },
    items: [
      { name: "Hamburger Di Manzo 250g", price: "1.100 RSD", prilog: "Mladi krompir." },
      {
        name: "Hamburger Mista 300g",
        price: "1.300 RSD",
        sastojci: "Čedar sir, špek.",
        prilog: "Mladi krompir.",
      },
      { name: "Pileći file 250g", price: "850 RSD", prilog: "Mladi krompir." },
      {
        name: "Pačetina 250g u sosu od borovnice",
        price: "1.450 RSD",
        prilog: "Mladi krompir i carski miks.",
      },
      { name: "Ćureći steak 250g", price: "1.200 RSD", prilog: "Grilovano povrće." },
      { name: "Bela vešalica 250g", price: "900 RSD", prilog: "Mladi krompir." },
      {
        name: "Svinjski file 250g",
        price: "1.000 RSD",
        prilog: "Mladi krompir i baby šargarepa na puteru.",
      },
      {
        name: "Ramstek 250g",
        price: "1.350 RSD",
        prilog: "Mladi krompir i žuta boranija.",
      },
      { name: "Biftek 250g", price: "2.100 RSD", prilog: "Mladi krompir." },
      {
        name: "Ribeye Steak 300g",
        price: "2.100 RSD",
        prilog: "Mladi krompir i grilovano povrće.",
      },
      {
        name: "T-Bone Steak 1kg",
        price: "5.800 RSD",
        prilog: "Mladi krompir, žuta i zelena boranija.",
      },
      {
        name: "Carne Mista",
        price: "1.000 RSD",
        sastojci: "Svinjski medaljon 100g, ramstek 100g, ćureći steak 100g.",
        prilog: "Mladi krompir i grilovano povrće.",
      },
      { name: "Losos Steak 250g", price: "1.800 RSD", prilog: "Grilovano povrće." },
    ],
  },
  {
    slug: "sendvici",
    navLabel: "sendviči",
    heading: "Sendviči",
    photo: {
      src: "/IMG_3377.JPG",
      alt: "Grilovani sendvič sa šunkom, sirom, maslinama i rukolom",
    },
    items: [
      {
        name: "Sendvič sa šunkom i Cezar dresingom",
        price: "460 RSD",
        sastojci:
          "Cezar dresing, mozzarella, cotto šunka, rukola, čeri paradajz, masline, parmezan.",
      },
      {
        name: "Sendvič sa mortadelom",
        price: "450 RSD",
        sastojci:
          "Pistaći krem, mozzarella, mortadela, rukola, čeri paradajz, masline, parmezan.",
      },
      {
        name: "Sendvič sa pršutom",
        price: "480 RSD",
        sastojci:
          "Pesto ricotta, mozzarella, pršuta, rukola, čeri paradajz, masline, parmezan.",
      },
      {
        name: "Sendvič sa goveđom pršutom",
        price: "560 RSD",
        sastojci:
          "Pesto ricotta, mozzarella, goveđa pršuta, rukola, čeri paradajz, masline, parmezan.",
      },
      {
        name: "Posni sendvič sa tunjevinom",
        price: "490 RSD",
        sastojci: "Tunjevina, pelat, rukola, čeri paradajz, masline.",
      },
    ],
  },
  {
    slug: "sosovi",
    navLabel: "sosovi",
    heading: "Sosovi",
    photo: {
      src: "/borovnica_sos.png",
      alt: "Sos od borovnice u belom tanjiru",
    },
    items: [
      { name: "Sos od borovnice", price: "200 RSD" },
      { name: "Sos od brusnice", price: "200 RSD" },
      { name: "Sos od bibera", price: "200 RSD" },
      { name: "Sos od šampinjona", price: "200 RSD" },
      { name: "Sos od lisičare", price: "200 RSD" },
      { name: "Sos od bukovače", price: "200 RSD" },
      { name: "Sos od vrganja", price: "350 RSD" },
      { name: "Sos od tartufa", price: "350 RSD" },
    ],
  },
  {
    slug: "prilozi",
    navLabel: "prilozi",
    heading: "Prilozi",
    items: [
      { name: "Grilovano povrće", price: "280 RSD" },
      { name: "Mladi krompir", price: "280 RSD" },
      { name: "Zelena boranija", price: "280 RSD" },
      { name: "Žuta boranija", price: "280 RSD" },
      { name: "Bebi šargarepa", price: "280 RSD" },
      { name: "Carski mix", price: "280 RSD" },
    ],
  },
  {
    slug: "hleb",
    navLabel: "hleb",
    heading: "Hleb",
    photo: {
      src: "/IMG_4368.JPG",
      alt: "Grilovana focaccia sa rukolom, servirana na tanjiru",
    },
    items: [
      {
        name: "Focaccia",
        price: "200 RSD",
        sastojci: "Pizza testo, beli luk, ruzmarin, morska so, maslinovo ulje.",
      },
      {
        name: "Pane per Pizza",
        price: "150 RSD",
        sastojci: "Hleb od pizza testa.",
      },
    ],
  },
  {
    slug: "dezerti",
    navLabel: "dezerti",
    heading: "Dezerti",
    photo: {
      src: "/IMG_4363.JPG",
      alt: "Domaći kolačić punjen kremom",
      objectPosition: "object-[35%_55%]",
    },
    items: [
      { name: "Cannoli", price: "320 RSD" },
      { name: "Cannoli Pistacio", price: "350 RSD" },
      { name: "Tiramisu", price: "380 RSD" },
      { name: "Tiramisu Pistacio", price: "420 RSD" },
      { name: "Tiramisu Nocciola", price: "420 RSD" },
      { name: "Millefoglie", price: "380 RSD" },
    ],
  },
];

function MenuRow({ item, accent }: { item: MenuItem; accent?: boolean }) {
  const description = [item.sastojci, item.prilog ? `Prilog: ${item.prilog}` : null]
    .filter(Boolean)
    .join(" ");

  return (
    <li className="group py-6 md:py-7">
      <div className="flex items-baseline justify-between gap-6 transition-transform duration-500 ease-out group-hover:translate-x-1">
        <h3
          className={`font-display text-lg text-ink transition-colors duration-500 md:text-xl ${accent ? "group-hover:text-breakfast-accent-strong" : "group-hover:text-accent-strong"
            }`}
        >
          {item.name}
        </h3>
        <span className="shrink-0 whitespace-nowrap font-semibold text-ink md:text-base">
          {item.price}
        </span>
      </div>
      {description && (
        <p className="mt-1.5 max-w-[56ch] text-sm text-ink-muted">{description}</p>
      )}
    </li>
  );
}

const BREAKFAST_OPEN_MINUTES = 9 * 60;
const BREAKFAST_CLOSE_MINUTES = 12 * 60 + 30;

function isBreakfastOpenNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const minutes = hour * 60 + minute;
  return minutes >= BREAKFAST_OPEN_MINUTES && minutes <= BREAKFAST_CLOSE_MINUTES;
}

function BreakfastStatus() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setIsOpen(isBreakfastOpenNow());
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-display text-lg text-ink">9:00 – 12:30</span>
      {isOpen !== null && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${isOpen
            ? "bg-breakfast-accent/15 text-breakfast-accent-strong"
            : "bg-ink/5 text-ink-muted"
            }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-breakfast-accent-strong" : "bg-ink-muted"
              }`}
          />
          {isOpen ? "Aktivno sada" : "Trenutno van radnog vremena"}
        </span>
      )}
    </div>
  );
}

function MenuSection({ section }: { section: Section }) {
  return (
    <section
      id={section.slug}
      className="scroll-mt-28 border-t border-border py-16 md:py-20"
    >
      <div
        className={`grid grid-cols-1 gap-10 ${section.photo ? "lg:grid-cols-2 lg:gap-16 lg:items-start" : ""
          }`}
      >
        <div className={section.photo ? "" : "mx-auto w-full max-w-3xl"}>
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              {section.heading}
            </h2>
          </Reveal>

          {section.showHours && (
            <Reveal delay={0.03} className="mt-5">
              <BreakfastStatus />
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <ul className="mt-8 divide-y divide-border border-t border-border">
              {section.items.map((item) => (
                <MenuRow key={item.name} item={item} accent={section.distinctAccent} />
              ))}
            </ul>

            {section.pizzaTeaser && (
              <Link
                href="/pizza-meni"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-strong px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-[background-color,transform] duration-150 ease-out hover:bg-accent active:scale-[0.97]"
              >
                Pogledaj sve pice
              </Link>
            )}
          </Reveal>
        </div>

        {section.photo && (
          <Reveal
            delay={0.1}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] lg:aspect-auto lg:h-full lg:min-h-[420px]"
          >
            <Image
              src={section.photo.src}
              alt={section.photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={`object-cover ${section.photo.objectPosition ?? ""}`}
              loading="lazy"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function FullMenu() {
  const [active, setActive] = useState<string | null>(null);

  const scrollTo = (slug: string) => {
    setActive(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setActive(null);
    document.getElementById(SECTIONS[0].slug)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-8 text-center md:pt-44 lg:px-10">
        <Reveal>
          <h1 className="font-display text-5xl tracking-[0.08em] text-ink md:text-6xl">
            Jelovnik
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <button
              type="button"
              onClick={scrollToTop}
              className={`text-sm font-semibold tracking-wide transition-colors ${active === null
                ? "text-accent-strong underline decoration-2 underline-offset-4"
                : "text-ink-muted hover:text-ink"
                }`}
            >
              sve kategorije
            </button>
            {SECTIONS.map((section) => (
              <button
                key={section.slug}
                type="button"
                onClick={() => scrollTo(section.slug)}
                className={`text-sm font-semibold tracking-wide transition-colors ${active === section.slug
                  ? section.distinctAccent
                    ? "text-breakfast-accent-strong underline decoration-2 underline-offset-4"
                    : "text-accent-strong underline decoration-2 underline-offset-4"
                  : "text-ink-muted hover:text-ink"
                  }`}
              >
                {section.navLabel}
              </button>
            ))}
          </nav>
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-24 bg-accent-strong/40 sm:w-40" />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
          <span className="h-px w-24 bg-accent-strong/40 sm:w-40" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
        {SECTIONS.map((section) => (
          <MenuSection key={section.slug} section={section} />
        ))}
      </div>
    </div>
  );
}
