import Link from "next/link";
import Image from "next/image";
import styles from "./collections.module.css";
import type { IFavouriteCategory } from "@/types/general";

export default function FavouriteCategoryCard({ slug, title, description, image }: IFavouriteCategory): JSX.Element {
  return (
    <article className={styles.card}>
      <Link href={`/favourites/${slug}`} className={styles.link}>
        <div className={styles.image}>
          <Image src={image} alt="" fill sizes="(max-width: 767px) 90vw, 45vw" />
        </div>
        <div className={styles.body}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
}
