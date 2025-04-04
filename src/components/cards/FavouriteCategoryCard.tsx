import Link from "next/link";
import Image from "next/image";
import { createElement } from "react";
import type { IFavouriteCategory } from "@/types/general";

export default function FavouriteCategoryCard({
  slug,
  title,
  description,
  icon,
  image,
}: IFavouriteCategory): JSX.Element {
  return (
    <Link href={`/favourites/${slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                {createElement(icon, { className: "h-5 w-5" })}
              </div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <p className="mt-2 text-sm text-white/80">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
