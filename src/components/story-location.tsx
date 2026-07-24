import Link from "next/link";
import { ArmchairIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const FEATURES = [
  {
    icon: ArmchairIcon,
    title: "Moderan enterijer",
    caption: "Već ostaje zapamćen.",
  },
  {
    icon: MapPinIcon,
    title: "Majke Jugovića 5",
    caption: "Centru Kruševca.",
  },
];

export function StoryLocation() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              A gde je naš lokal?
            </h2>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-muted md:text-lg">
              Pronađite nas u samom centru Kruševca, u ulici Majke Jugovića
              5, na atraktivnoj gradskoj lokaciji. Uvek ste nadomak glavnih
              dešavanja, u urbanom jezgru grada koje živi punim ritmom.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/#lokacija"
                className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-[background-color,transform] duration-150 ease-out hover:bg-accent active:scale-[0.97]"
              >
                Kontakt
              </Link>
              <a
                href="tel:+381638124455"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors duration-150 ease-out hover:border-accent-strong hover:text-accent-strong active:scale-[0.97]"
              >
                <PhoneIcon size={18} weight="regular" />
                Pozovi i rezerviši
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 place-items-center gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex w-full flex-col items-center text-center"
              >
                <feature.icon
                  size={44}
                  weight="thin"
                  className="mx-auto text-accent"
                />
                <p className="mt-4 w-full font-display text-xl text-ink">
                  {feature.title}
                </p>
                <p className="mx-auto mt-2 max-w-[16ch] text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {feature.caption}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
