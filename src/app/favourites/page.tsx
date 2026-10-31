import type { Metadata } from "next";
import CardsWrapper from "@/components/cards/Wrapper";
import { favouritesCategories } from "@/configs/favourites";
import CollectionIntro from "@/components/cards/CollectionIntro";
import FavouriteCategoryCard from "@/components/cards/FavouriteCategoryCard";

export const metadata: Metadata = {
  title: "Favourites - Milad Afkhami",
  description: "Explore my favourite books, playlists, animations, series, anime, and poems.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/favourites" },
};

export default function FavouritesPage(): JSX.Element {
  return (
    <div>
      <CollectionIntro title="Favourites">
        A collection of my favourite books, playlists, animations, series, and anime.
      </CollectionIntro>

      <CardsWrapper>
        {favouritesCategories.map((category) => (
          <FavouriteCategoryCard key={category.slug} {...category} />
        ))}
      </CardsWrapper>
    </div>
  );
}
