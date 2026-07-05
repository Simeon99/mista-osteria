import { Hero } from "@/components/hero";
import { OfferMarquee } from "@/components/offer-marquee";
import { FeaturedDishes } from "@/components/featured-dishes";
import { Provenance } from "@/components/provenance";
import { Fermentation } from "@/components/fermentation";
import { Location } from "@/components/location";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferMarquee />
      <FeaturedDishes />
      <Provenance />
      <Fermentation />
      <Location />
    </>
  );
}
