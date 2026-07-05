import Image from "next/image";
import { Reveal } from "@/components/reveal";

const JELA = [
  {
    name: "Mista",
    desc: "Ricotta podloga, mocarela, tartufata, biftek carpaccio, rukola, parmezan, sušeni paradajz.",
    price: "1.650 RSD",
  },
  {
    name: "Ribeye Steak",
    desc: "300g ribeye stek sa mladim krompirom i grilovanim povrćem.",
    price: "2.100 RSD",
  },
  {
    name: "Tagliatelle Carbonara",
    desc: "Guanciale, Pecorino Romano, jaja, biber, parmezan.",
    price: "900 RSD",
  },
  {
    name: "Rižoto sa Gamborima",
    desc: "Gambori, čeri paradajz, puter, parmezan, beli luk.",
    price: "1.300 RSD",
  },
  {
    name: "Mix salata sa biftekom i baby mozzarellom",
    desc: "Biftek, baby mozzarella, čeri paradajz, parmezan, mix salata.",
    price: "950 RSD",
  },
];

export function FeaturedDishes() {
  return (
    <section id="meni" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Istaknuta jela
          </h2>
          <p className="mt-3 max-w-[60ch] text-ink-muted">
            Pet jela koja najbolje objašnjavaju ko smo.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal delay={0.05}>
            <div>
              <ul className="mt-2 divide-y divide-border">
                {JELA.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <div>
                      <p className="font-display text-lg text-ink">
                        {item.name}
                      </p>
                      <p className="mt-1 max-w-[46ch] text-sm text-ink-muted">
                        {item.desc}
                      </p>
                    </div>
                    <span className="whitespace-nowrap font-semibold text-accent-strong">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px]">
              <Image
                src="/IMG_4281.JPG"
                alt="Margarita pica upravo izvađena iz peći"
                fill
                sizes="45vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/DSC02227 (1).JPG"
                  alt="Biftek sa roštilja i pečenim povrćem"
                  fill
                  sizes="22vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/Ribeye.png"
                  alt="Tagliatelle sa tartufatom i pecorino romano"
                  fill
                  sizes="22vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4 lg:hidden">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px]">
              <Image
                src="/IMG_3671.JPG"
                alt="Margarita pica upravo izvađena iz peći"
                fill
                sizes="50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px]">
              <Image
                src="/IMG_3922.JPG"
                alt="Biftek sa roštilja i pečenim povrćem"
                fill
                sizes="50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative col-span-2 aspect-[3/2] overflow-hidden rounded-[24px]">
              <Image
                src="/IMG_4170.JPG"
                alt="Tagliatelle sa tartufatom i pecorino romano"
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
