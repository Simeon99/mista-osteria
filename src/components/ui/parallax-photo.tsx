"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function ParallaxPhoto({
  src,
  alt,
  sizes = "(max-width: 1024px) 100vw, 42vw",
  className = "aspect-[4/5]",
  range = 9,
  rounded = "rounded-[28px]",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  range?: number;
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`-${range}%`, `${range}%`]
  );

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden ${rounded} ${className}`}
    >
      <motion.div style={{ y }} className="absolute -top-[10%] -bottom-[10%] left-0 right-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
