import Link from "next/link";
import Image from "next/image";
import styles from "./collections.module.css";
import type { IFavourite, IFavouriteCategory } from "@/types/general";

type Props = { category: IFavouriteCategory["slug"]; favourite: IFavourite };

export default function FavouriteEntityCard({ category, favourite }: Props): JSX.Element {
  const { slug, title, subtitle, cover, meta } = favourite;
  return (
    <article className={styles.card}>
      <Link href={`/favourites/${category}/${slug}`} className={styles.link}>
        <div className={styles.bookImage}>
          <Image src={cover} alt="" fill sizes="(max-width: 767px) 90vw, 45vw" />
        </div>
        <div className={styles.body}>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          {meta?.map((item) => (
            <p key={item.key}>
              <strong>{item.key}:</strong> {item.value}
            </p>
          ))}
        </div>
      </Link>
    </article>
  );
}
