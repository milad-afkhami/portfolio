import type { Metadata } from "next";
import { getAllBlogs } from "@/services/blog";
import BlogCard from "@/components/cards/BlogCard";
import CardsWrapper from "@/components/cards/Wrapper";

export const metadata: Metadata = {
  title: "Blog - Milad Afkhami",
  description: "Read my latest articles about web development, React, Next.js, and more.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage(): Promise<JSX.Element> {
  const blogs = await getAllBlogs();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-base-content/80">Thoughts, tutorials, and insights about web development.</p>
      </div>

      <CardsWrapper>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </CardsWrapper>
    </div>
  );
}
