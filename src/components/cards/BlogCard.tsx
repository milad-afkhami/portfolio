import Link from "next/link";
import Image from "next/image";
import type { IBlog } from "@/types/general";
import styles from "./collections.module.css";

export default function BlogCard({ blog }: { blog: IBlog }): JSX.Element {
  const { slug, title, description, date, readingTime, coverImage } = blog;
  return (
    <article className={styles.card}>
      <Link href={`/blog/${slug}`} className={styles.link} aria-labelledby={`blog-card-${slug}-title`}>
        <div className={styles.image}>
          <Image src={coverImage} alt="" fill sizes="(max-width: 767px) 90vw, 45vw" />
        </div>
        <div className={styles.body}>
          <h2 id={`blog-card-${slug}-title`}>{title}</h2>
          <p>{description}</p>
          <div className={styles.meta}>
            <time dateTime={date}>{date}</time>
            <span>{readingTime} to read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
