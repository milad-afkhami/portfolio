import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import CardsWrapper from "@/components/cards/Wrapper";
import type { IFavouriteCategory } from "@/types/general";
import { favouritesCategories } from "@/configs/favourites";
import { getFavouritesByCategory } from "@/services/favourite";
import FavouriteEntityCard from "@/components/cards/FavouriteEntityCard";

type CategoryPageProps = {
  params: {
    category: IFavouriteCategory["slug"];
  };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const currentCategory = favouritesCategories.find((category) => category.slug === params.category);

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
  const currentCategory = favouritesCategories.find((category) => category.slug === params.category);

  if (!currentCategory) notFound();

  const { slug, title, description } = currentCategory;

  const favourites = await getFavouritesByCategory(slug);

  return (
    <div className="space-y-8">
      <Link href="/favourites" className="inline-flex items-center gap-2 text-base-content/80 hover:text-primary">
        <FaArrowLeft className="size-4" />
        Back to Favourites
      </Link>
      <header className="page-heading">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      {favourites.length === 0 && <p>No favourites in this category yet. Choose another category from Favourites.</p>}

      <CardsWrapper>
        {favourites.map((favourite) => (
          <FavouriteEntityCard key={favourite.slug} category={slug} favourite={favourite} />
        ))}
      </CardsWrapper>
    </div>
  );
}
