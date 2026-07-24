import Image from "next/image";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

export function Location() {
  return (
    <section id="lokacija" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Sto vas čeka.
          </h2>
          <p className="mt-3 max-w-[60ch] text-ink-muted">
            Svratite bez najave ili rezervišite sto unapred.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col gap-7 rounded-[28px] border border-border bg-surface p-8 md:p-10">
              <div className="flex items-start gap-4">
                <ClockIcon size={22} weight="regular" className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-ink">Radno vreme</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    Ponedeljak - Četvrtak, Nedelja: 08:00 - 00:00
                  </p>
                  <p className="text-sm text-ink-muted">
                    Petak - Subota: 08:00 - 01:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPinIcon size={22} weight="regular" className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-ink">Adresa</p>
                  <p className="mt-1 text-sm text-ink-muted">Majke Jugovića 5, Kruševac</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon size={22} weight="regular" className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-ink">Telefon</p>
                  <p className="mt-1 text-sm text-ink-muted">+381 63 8124455</p>
                </div>
              </div>

              <a
                href="tel:+381638124455"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent-strong px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-[background-color,transform] duration-150 ease-out hover:bg-accent active:scale-[0.97]"
              >
                Pozovite nas
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[28px]">
              <Image
                src="/IMG_3315.JPG"
                alt="Enterijer restorana sa maslinom i ciglenim zidom peći"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[28px]">
              <Image
                src="/IMG_3324.JPG"
                alt="Enterijer restorana, ogledalo i stolice od kože"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
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
