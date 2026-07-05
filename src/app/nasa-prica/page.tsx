import type { Metadata } from "next";
import { StoryHero } from "@/components/story-hero";
import { StoryIntro } from "@/components/story-intro";
import { StoryProcess } from "@/components/story-process";
import { StorySastojci } from "@/components/story-sastojci";
import { StoryLocation } from "@/components/story-location";
import { StoryGallery } from "@/components/story-gallery";

export const metadata: Metadata = {
  title: "Naša priča | Mista Osteria",
  description:
    "Više od restorana — pogled Mista Osteria na dobar zalogaj, italijansku tradiciju i testo koje fermentiše danima.",
};

export default function NasaPricaPage() {
  return (
    <>
      <StoryHero />
      <StoryIntro />
      <StoryProcess />
      <StorySastojci />
      <StoryLocation />
      <StoryGallery />
    </>
  );
}
