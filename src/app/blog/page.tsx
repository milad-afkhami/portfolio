import type { Metadata } from "next";
import { getAllBlogs } from "@/services/blog";
import BlogCard from "@/components/cards/BlogCard";
import CardsWrapper from "@/components/cards/Wrapper";
import CollectionEmpty from "@/components/cards/CollectionEmpty";
import CollectionIntro from "@/components/cards/CollectionIntro";

export const metadata: Metadata = {
  title: "Blog - Milad Afkhami",
  description: "Read my latest articles about web development, React, Next.js, and more.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage(): Promise<JSX.Element> {
  const blogs = await getAllBlogs();

  return (
    <div>
      <CollectionIntro title="Blog">Thoughts, tutorials, and insights about web development.</CollectionIntro>
      {blogs.length === 0 && <CollectionEmpty />}

      <CardsWrapper>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </CardsWrapper>
    </div>
  );
}
