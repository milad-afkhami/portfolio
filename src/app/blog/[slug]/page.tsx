import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MDXRemote from "@/components/MDXRemote";
import { getAllBlogs, getBlogBySlug } from "@/services/blog";
import { allowedBlogQualitiesForSeo } from "@/configs/general";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found - Milad Afkhami",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} - Milad Afkhami`,
    description: blog.description,
    robots: allowedBlogQualitiesForSeo.includes(blog.quality)
      ? { index: true, follow: true }
      : { index: false, follow: false },
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      type: "article",
      tags: blog.tags,
      title: blog.title,
      section: blog.category,
      publishedTime: blog.date,
      authors: ["Milad Afkhami"],
      description: blog.description,
      images: [{ url: blog.coverImage, alt: blog.title }],
    },
  };
}

export const generateStaticParams = async (): Promise<Array<{ slug: string }>> => {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => ({ slug: blog.slug }));
};

export const dynamicParams = false;

export default async function BlogPage({ params }: BlogPageProps): Promise<JSX.Element> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const { title, description, summary, date, readingTime, category, coverImage, tags, content } = blog;

  return (
    <article className="reading-page space-y-8">
      <Link href="/blog" className="back-link">
        Back to Blog
      </Link>
      <header>
        <h1>{title}</h1>
        <p>{summary || description}</p>
        <div className="reading-meta">
          <span>{date}</span>
          <span>•</span>
          <span>{readingTime}</span>
          <span>•</span>
          <span>{category}</span>
        </div>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width:767px) 90vw,800px"
          priority
        />
      </div>

      <div className="detail-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <MDXRemote content={content} />
    </article>
  );
}
