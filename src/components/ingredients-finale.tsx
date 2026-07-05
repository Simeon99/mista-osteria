import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function IngredientsFinale() {
  return (
    <section className="relative overflow-hidden bg-dark px-6 py-32 md:py-52">
      <div className="absolute -inset-20">
        <Image
          src="/IMG_3992.JPG"
          alt="Gotovo jelo na stolu, toplo svetlo"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.38]"
          loading="lazy"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,20,13,.2) 0%, rgba(28,20,13,.92) 78%)",
        }}
      />

      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal>
          <div className="mb-9 flex items-center justify-center gap-4">
            <span aria-hidden className="block h-px w-11 bg-accent-soft" />
            <span className="text-xs uppercase tracking-[0.42em] text-accent-soft">
              Na tanjiru
            </span>
            <span aria-hidden className="block h-px w-11 bg-accent-soft" />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="m-0 mb-8 text-balance font-display text-5xl leading-[1.1] text-background md:text-8xl">
            Od sastojka, do tanjira.
          </h2>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mx-auto mb-14 max-w-[48ch] text-sm font-light leading-[2] text-background/80">
            Sve što biramo, biramo zbog jednog trenutka — prvog zalogaja za
            vašim stolom.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/jelovnik"
              className="inline-block rounded-md bg-accent-strong px-10 py-4 font-display text-base tracking-wide text-background transition-colors duration-200 hover:bg-accent"
            >
              Istraži meni
            </Link>
            <Link
              href="/#lokacija"
              className="inline-block rounded-md border border-accent-soft/55 bg-transparent px-10 py-4 font-display text-base tracking-wide text-background/90 transition-colors duration-200 hover:border-accent-soft hover:text-accent-soft"
            >
              Rezerviši sto
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
