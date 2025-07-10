import Link from "next/link";
import Image from "next/image";
import type { IBlogLite } from "@/types/general";

type BlogCardProps = {
  blog: IBlogLite;
};

export default function BlogCard({ blog }: BlogCardProps): JSX.Element {
  const { slug, title, description, date, readingTime, coverImage } = blog;

  return (
    <article className="group overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${slug}`} className="block h-full" aria-labelledby={`blog-card-${slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2 p-4">
          <h2 className="text-xl font-bold text-base-content" id={`blog-card-${slug}-title`}>
            {title}
          </h2>
          <p className="text-base-content/70">{description}</p>
          <div className="flex items-center gap-4 text-sm text-base-content/70">
            <time>{date}</time>
            <span aria-hidden="true">•</span>
            <span>{readingTime} to read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
