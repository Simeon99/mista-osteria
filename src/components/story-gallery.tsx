import Image from "next/image";
import { Reveal } from "@/components/reveal";

const PHOTOS = [
  {
    src: "/IMG_3315.JPG",
    alt: "Enterijer restorana sa maslinom i ciglenim zidom peći",
  },
  {
    src: "/IMG_3447.JPG",
    alt: "Detalj enterijera sa Mista emblemom i mermernim šankom",
  },
  {
    src: "/IMG_3324.JPG",
    alt: "Enterijer restorana, ogledalo i stolice od kože",
  },
];

export function StoryGallery() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {PHOTOS.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 0.06}>
            <div className="relative aspect-[6/7] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 34vw"
                className="object-cover object-[center_70%]"
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
