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
  const favourite = await getFavouriteBySlug(params.slug);
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
  const favourite = await getFavouriteBySlug(params.slug);
  if (!favourite) notFound();

  const Icon = categoryIcons[category];

  return (
    <div className="space-y-8">
      <Link
        href={`/favourites/${category}`}
        className="inline-flex items-center gap-2 text-base-content/80 hover:text-primary"
      >
        <FaArrowLeft className="size-4" />
        <div className="flex items-center gap-1">
          Back to Favourite <span className="capitalize">{category}</span> {<Icon className="size-4" />}
        </div>
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <Image
            src={favourite.cover}
            alt={favourite.title}
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3">
              <Icon className="size-10 text-primary" />
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
                <a href={favourite.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-link btn-sm">
                    Visit Site
                    <FaExternalLinkAlt className="size-4" />
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
