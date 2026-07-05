"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-dark">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/IMG_3677.JPG"
          alt="Pica ulazi u drvenu peć u plamenu"
          fill
          sizes="100vw"
          className="object-cover object-[center_90%]"
          priority
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/10" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-6 pt-32 pb-16 md:px-10 md:pb-24 lg:px-16">
        <div className="max-w-3xl">
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl leading-[1.05] tracking-tight text-background md:text-6xl lg:text-7xl"
            >
              Mista Osteria
            </motion.h1>
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[46ch] text-base text-background/85 md:text-lg"
          >
            Prostor u kojem sastojci govore najviše - daleko od još jedne obične picerije
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9"
          >
            <a
              href="#lokacija"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-background/90 active:scale-[0.97]"
            >
              Rezervišite sto
              <ArrowRightIcon
                size={16}
                weight="bold"
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
