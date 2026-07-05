import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function StoryHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] w-full items-center justify-center overflow-hidden bg-dark">
      <Image
        src="/IMG_3621.JPG"
        alt="Ruke u brašnu oblikuju testo na radnoj površini"
        fill
        sizes="100vw"
        className="object-cover object-[center_70%]"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-dark/55" />

      <div className="relative z-10 px-6 text-center">
        <Reveal>
          <h1 className="font-display text-4xl tracking-[0.15em] text-background md:text-6xl">
            Naša Priča
          </h1>
          <p className="mx-auto mt-4 max-w-md font-display text-sm italic tracking-[0.08em] text-background/80 md:text-base">
            Više od restorana. Naš pogled na dobar zalogaj.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
