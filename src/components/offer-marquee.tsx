const OFFERS = [
  "Doručak",
  "Napolitanske pizze",
  "Sveže italijanske paste",
  "Kremasti rižoti",
  "Premium steakovi i mesni specijaliteti",
  "Obrok salate",
  "Sveže salate",
  "Gurmanski sendviči",
  "Domaći deserti",
  "Pažljivo odabrana vina i pića",
];

export function OfferMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border  py-4">
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-10 pr-10"
          >
            {OFFERS.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold tracking-wide text-black"
              >
                {item}
                <span aria-hidden className="text-accent-strong">
                  |
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
