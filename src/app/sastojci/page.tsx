import type { Metadata } from "next";
import { IngredientsHero } from "@/components/ingredients-hero";
import { IngredientsManifest } from "@/components/ingredients-manifest";
import { IngredientsPietra } from "@/components/ingredients-pietra";
import { IngredientsFermentationStrip } from "@/components/ingredients-fermentation-strip";
import { IngredientsSalumeria } from "@/components/ingredients-salumeria";
import { IngredientsMesara } from "@/components/ingredients-mesara";
import { IngredientsRiso } from "@/components/ingredients-riso";
import { IngredientsSelection } from "@/components/ingredients-selection";
import { IngredientsFinale } from "@/components/ingredients-finale";

export const metadata: Metadata = {
  title: "Sastojci | Mista Osteria",
  description:
    "Petra brašno, italijanska salumerija, meso iz Mesare Morava, San Massimo riža i premium selekcija — poreklo namirnica koje stoje iza svakog jela u Mista Osteria.",
};

export default function SastojciPage() {
  return (
    <>
      <IngredientsHero />
      <IngredientsManifest />
      <IngredientsPietra />
      <IngredientsFermentationStrip />
      <IngredientsSalumeria />
      <IngredientsMesara />
      <IngredientsRiso />
      <IngredientsSelection />
      <IngredientsFinale />
    </>
  );
}
