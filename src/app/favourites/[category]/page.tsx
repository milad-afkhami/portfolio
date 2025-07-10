import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import CardsWrapper from "@/components/cards/Wrapper";
import type { IFavouriteCategory } from "@/types/general";
import { getFavouritesByCategory } from "@/services/favourite";
import FavouriteEntityCard from "@/components/cards/FavouriteEntityCard";
import { getFavouriteCategoryBySlug } from "@/services/favouriteCategories";

type CategoryPageProps = {
  params: {
    category: IFavouriteCategory["slug"];
  };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const currentCategory = await getFavouriteCategoryBySlug(params.category);

  if (!currentCategory) notFound();

  const { title, description } = currentCategory;
  const favourites = await getFavouritesByCategory(params.category);
  const categoryCount = favourites.length;

  const generatedTitle = `${title} - Milad Afkhami`;
  const generatedDescription = `${description} - Browse through ${categoryCount} ${params.category}.`;

  return {
    title: generatedTitle,
    description: generatedDescription,
    robots: { index: false, follow: false },
    alternates: { canonical: `/favourites/${params.category}` },
    openGraph: {
      title: generatedTitle,
      description: generatedDescription,
      images: [{ url: currentCategory.image, alt: title }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps): Promise<JSX.Element> {
  const currentCategory = await getFavouriteCategoryBySlug(params.category);

  if (!currentCategory) notFound();

  const { slug, title, description } = currentCategory;

  const favourites = await getFavouritesByCategory(slug);

  return (
    <div className="space-y-8">
      <Link href="/favourites" className="inline-flex items-center gap-2 text-base-content/80 hover:text-primary">
        <FaArrowLeft className="size-4" />
        Back to Favourites
      </Link>
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">Favourite {title}</h1>
          <p className="mt-2 text-lg text-base-content/80">{description}</p>
        </div>
      </div>

      <CardsWrapper>
        {favourites.map((favourite) => (
          <FavouriteEntityCard key={favourite.slug} category={slug} favourite={favourite} />
        ))}
      </CardsWrapper>
    </div>
  );
}
