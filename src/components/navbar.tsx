"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Jelovnik", href: "/jelovnik" },
  { label: "Pizza meni", href: "/pizza-meni" },
  { label: "Naša pica", href: "/nasa-prica" },
  { label: "Sastojci", href: "/sastojci" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const solid = scrolled || !hasDarkHero;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 80;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  });

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: reduce ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: reduce ? 0 : 0.18, ease: [0.4, 0, 1, 1] as const },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: reduce ? {} : { staggerChildren: 0.045, delayChildren: 0.08 },
    },
    exit: {
      transition: reduce ? {} : { staggerChildren: 0.02, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
      opacity: 0,
      y: reduce ? 0 : 8,
      transition: { duration: reduce ? 0 : 0.15 },
    },
  };

  return (
    <header className="fixed top-0 z-40 w-full">
      <div
        className={`transition-colors duration-300 ${solid
          ? "border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-6 md:h-[72px] lg:px-10">
          <Link href="/" className="shrink-0" aria-label="Mista Osteria, početna">
            <Image
              src="/logo bez pozadine.png"
              alt="Mista Osteria"
              width={220}
              height={56}
              className={`h-8 w-auto transition-[filter] duration-300 md:h-9 ${solid ? "brightness-0" : ""
                }`}
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors ${solid
                      ? "text-ink hover:text-accent-strong"
                      : "text-background hover:text-background/70"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-150 ease-out active:scale-90 md:hidden ${solid ? "text-ink" : "text-background"
              }`}
            aria-label="Otvori meni"
          >
            <ListIcon size={24} weight="regular" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
          >
            <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-6">
              <Image
                src="/logo bez pozadine.png"
                alt="Mista Osteria"
                width={220}
                height={56}
                className="h-8 w-auto brightness-0"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-transform duration-150 ease-out active:scale-90"
                aria-label="Zatvori meni"
              >
                <XIcon size={24} weight="regular" />
              </button>
            </div>

            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-1 flex-col items-start justify-center gap-8 px-10"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={itemVariants}
                  whileTap={{ scale: reduce ? 1 : 0.97 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl italic text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="mt-4">
                <Link
                  href="/#lokacija"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-transform duration-150 ease-out active:scale-[0.97]"
                >
                  Rezervišite sto
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
