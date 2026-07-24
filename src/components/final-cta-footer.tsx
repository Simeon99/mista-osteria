import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const NAV_LINKS = [
  { label: "jelovnik", href: "/jelovnik" },
  { label: "pizza meni", href: "/pizza-meni" },
  { label: "naša priča", href: "/nasa-prica" },
  { label: "sastojci", href: "/sastojci" },
];

const HOURS = [
  { label: "PON - ČET, NED:", value: "08:00 - 00:00" },
  { label: "PET - SUB:", value: "08:00 - 01:00" },
];

export function FinalCtaFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:pt-32 lg:px-10">
        <Reveal>
          <p className="max-w-3xl font-display text-3xl italic leading-snug text-accent-strong md:text-4xl lg:text-5xl">
            &ldquo;Otkrijte suštinu Italije u svakom nezaboravnom
            jelu&rdquo;
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-16 flex flex-col flex-wrap gap-10 md:mt-24 md:flex-row md:items-start md:justify-between"
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base text-ink transition-colors hover:text-accent-strong"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://www.instagram.com/mistaosteria/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-accent-strong"
              >
                <InstagramLogoIcon size={18} weight="regular" />
                MISTA
              </a>
            </li>
            <li>
              <a
                href="tel:+381638124455"
                className="inline-flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-accent-strong"
              >
                <PhoneIcon size={18} weight="regular" />
                +381 63 8124455
              </a>
            </li>
          </ul>

          <div className="flex items-start gap-2">
            <MapPinIcon size={18} weight="regular" className="mt-0.5 shrink-0 text-ink" />
            <p className="max-w-[22ch] text-sm font-semibold uppercase tracking-wide text-ink">
              Majke Jugovića 5, Kruševac
            </p>
          </div>

          <div className="flex gap-10">
            {HOURS.map((item, i) => (
              <div key={i}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  {item.label}
                </p>
                <p className="mt-1 text-base font-semibold text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-24 select-none md:mt-32">
        <Image
          src="/logo bez pozadine.png"
          alt="Mista Osteria"
          width={1169}
          height={298}
          className="h-auto w-[64vw] pl-6 invert lg:pl-10"
        />
      </Reveal>

      <div className="mx-auto max-w-[1400px] px-6 pb-8 lg:px-10">
        <p className="text-xs text-ink-muted">
          © {year} Mista Osteria. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
