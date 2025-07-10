import type { Metadata } from "next";
import CardsWrapper from "@/components/cards/Wrapper";
import { getFavouriteCategories } from "@/services/favouriteCategories";
import FavouriteCategoryCard from "@/components/cards/FavouriteCategoryCard";

export const metadata: Metadata = {
  title: "Favourites - Milad Afkhami",
  description: "Explore my favourite books, playlists, animations, series, anime, and poems.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/favourites" },
};

export default async function FavouritesPage(): Promise<JSX.Element> {
  const favouriteCategories = await getFavouriteCategories();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Favourites</h1>
        <p className="mt-2 text-lg text-base-content/80">
          A collection of my favourite books, playlists, animations, series, anime, and poems.
        </p>
      </div>

      <CardsWrapper>
        {favouriteCategories.map((category) => (
          <FavouriteCategoryCard key={category.slug} {...category} />
        ))}
      </CardsWrapper>
    </div>
  );
}
