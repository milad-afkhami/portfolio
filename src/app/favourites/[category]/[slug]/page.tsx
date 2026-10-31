import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons/lib";
import type { IFavouriteCategory } from "@/types/general";
import { getFavouriteBySlug } from "@/services/favourite";
import { FaArrowLeft, FaBook, FaExternalLinkAlt, FaMusic, FaTv, FaPlayCircle, FaFilm } from "react-icons/fa";

type FavouritePageProps = {
  params: {
    category: IFavouriteCategory["slug"];
    slug: string;
  };
};

export async function generateMetadata({ params }: FavouritePageProps): Promise<Metadata> {
  const favourite = await getFavouriteBySlug(params.category, params.slug);
  if (!favourite) notFound();

  return {
    title: `${favourite.title} - Milad Afkhami`,
    description: favourite.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/favourites/${params.category}/${params.slug}` },
  };
}

const categoryIcons: Record<IFavouriteCategory["slug"], IconType> = {
  books: FaBook,
  playlists: FaMusic,
  animations: FaFilm,
  series: FaTv,
  anime: FaPlayCircle,
};

export default async function FavouritePage({ params }: FavouritePageProps): Promise<JSX.Element> {
  const category = params.category;
  const favourite = await getFavouriteBySlug(category, params.slug);
  if (!favourite) notFound();

  const Icon = categoryIcons[category];

  return (
    <div className="detail-page space-y-8">
      <Link
        href={`/favourites/${category}`}
        className="inline-flex items-center gap-2 text-base-content/80 hover:text-primary"
      >
        <FaArrowLeft className="size-4" />
        <div className="flex items-center gap-1">
          Back to Favourite <span className="capitalize">{category}</span> {<Icon className="size-4" />}
        </div>
      </Link>

      <div className="favourite-detail">
        <div className="favourite-cover">
          <Image
            src={favourite.cover}
            alt={favourite.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">{favourite.title}</h1>
            </div>
            <p className="mt-2 text-lg text-base-content/80">{favourite.description}</p>
          </div>

          <div className="space-y-4">
            {favourite.meta?.map((item) => (
              <div key={item.key}>
                <h2 className="text-lg font-semibold">{item.key}</h2>
                <p className="text-base-content/80">{item.value}</p>
              </div>
            ))}
            {favourite.link && (
              <div>
                <a href={favourite.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit site <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
