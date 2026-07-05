import type { Metadata } from "next";
import { PizzaMenuHero } from "@/components/pizza-menu-hero";
import { PizzaMenuList } from "@/components/pizza-menu-list";

export const metadata: Metadata = {
  title: "Pizza meni | Mista Osteria",
  description:
    "Sve napolitanske pice u Mista Osteria — testo fermentisano 72 sata, iz peći na drva.",
};

export default function PizzaMeniPage() {
  return (
    <>
      <PizzaMenuHero />
      <PizzaMenuList />
    </>
  );
}
