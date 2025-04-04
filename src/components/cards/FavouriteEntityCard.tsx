import Link from "next/link";
import Image from "next/image";
import type { IFavourite, IFavouriteCategory } from "@/types/general";

type FavouriteEntityCardProps = {
  category: IFavouriteCategory["slug"];
  favourite: IFavourite;
};

export default function FavouriteEntityCard({ category, favourite }: FavouriteEntityCardProps): JSX.Element {
  const { slug, title, subtitle, cover, meta } = favourite;

  return (
    <Link href={`/favourites/${category}/${slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-2 text-xl font-bold text-base-content">{title}</h2>
          <p className="mb-4 text-base-content/70">{subtitle}</p>

          <div className="space-y-2">
            {meta?.map((item) => (
              <p key={item.key} className="text-sm text-base-content/70">
                <span className="font-medium">{item.key}:</span> {item.value}
              </p>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
