import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function StorySastojci() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] lg:aspect-auto lg:h-full lg:min-h-[560px]">
          <Image
            src="/IMG_3682.JPG"
            alt="Presek pica kore, vazdušasta struktura testa"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl leading-[1.1] text-accent-soft md:text-5xl">
            Iza svake pice stoje pravi sastojci
          </h2>
          <div className="mt-6 max-w-[52ch] space-y-4 text-base leading-relaxed text-background/80 md:text-lg">
            <p>
              Ukus koji pamtite ne nastaje slučajno. On počinje od namirnica
              koje biramo sa istom pažnjom kao i svaki korak u pripremi.
            </p>
            <p>
              Koristimo proverene sastojke koji stižu direktno iz Italije —
              brašno, paradajz i sireve koji nose tradiciju i kvalitet
              regiona iz kog dolaze. Sve ostalo biramo sa jasnom idejom: da
              podrži testo, a ne da ga nadjača.
            </p>
            <p className="text-background">
              Svaki sastojak ima svoju ulogu.
              <br />
              Ništa nije tu zbog efekta, već zbog balansa, čistoće ukusa i
              prepoznatljivog karaktera.
            </p>
          </div>

          <Link
            href="/#sastojci"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent-strong px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-[background-color,transform] duration-150 ease-out hover:bg-accent active:scale-[0.97]"
          >
            Upoznajte naše sastojke
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
