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
    <article className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-base-content/70">
          <span>{date}</span>
          <span>•</span>
          <span>{readingTime}</span>
          <span>•</span>
          <span>{category}</span>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl text-base-content/80">{summary || description}</p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image src={coverImage} alt={title} fill objectFit="cover" priority />
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            {tag}
          </span>
        ))}
      </div>

      <MDXRemote content={content} />
    </article>
  );
}
