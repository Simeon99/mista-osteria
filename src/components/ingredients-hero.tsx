"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";

export function IngredientsHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden bg-dark">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/sastojci cover.png"
          alt="Pica ulazi u peć na drva, makro atmosfera"
          fill
          sizes="100vw"
          className="object-cover opacity-85"
          priority
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28,20,13,.55) 0%, rgba(28,20,13,.15) 40%, rgba(28,20,13,.88) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,20,13,.72) 0%, rgba(28,20,13,0) 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] px-6 pb-24 pt-32 md:px-16 md:pb-28">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span aria-hidden className="block h-px w-14 bg-accent-soft" />
            <span className="text-xs uppercase tracking-[0.42em] text-accent-soft">
              Sastojci
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="m-0 max-w-[12ch] text-balance font-display text-5xl leading-[1.04] tracking-wide text-background sm:text-6xl md:text-7xl lg:text-[6.8rem]">
            Sve počinje sastojkom.
          </h1>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 border-l-2 border-accent pl-6">
            <p className="max-w-[46ch] text-sm font-light leading-[1.8] text-background/85">
              Pre ukusa, postoji izbor. Ovo je priča o onome što biramo —
              mnogo pre nego što tanjir stigne na sto.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-24 right-6 z-10 hidden flex-col items-center gap-4 md:right-16 md:flex">
        <span
          className="text-[10px] tracking-[0.4em] text-background/70"
          style={{ writingMode: "vertical-rl" }}
        >
          SKROLUJTE
        </span>
        <span className="block h-16 w-px overflow-hidden bg-accent-soft/40">
          <span className="block h-full w-full origin-top animate-[ingredientsScrollCue_2.6s_ease-in-out_infinite] bg-accent-soft" />
        </span>
      </div>

      <style>{`
        @keyframes ingredientsScrollCue {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
