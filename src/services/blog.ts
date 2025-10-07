import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";
import { serialize } from "next-mdx-remote/serialize";
import type { IBlog, IBlogMetadata } from "@/types/general";

const BLOGS_PATH = path.join(process.cwd(), "src/data/blogs");

export async function getBlogBySlug(slug: string): Promise<Nullable<IBlog>> {
  try {
    const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");

    const mdxSource = await serialize(source, {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === "development",
      },
    });

    return {
      slug,
      content: mdxSource,
      ...(mdxSource.frontmatter as IBlogMetadata),
    } satisfies IBlog;
  } catch (error) {
    console.error("Error getting blog by slug:", error);
    return null;
  }
}

export async function getAllBlogs(): Promise<Array<IBlog>> {
  try {
    const files = fs.readdirSync(BLOGS_PATH);
    const blogs = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, "");
          const blog = await getBlogBySlug(slug);
          return blog;
        }),
    );

    return blogs
      .filter((blog): blog is IBlog => blog !== null)
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .sort((a, b) => {
        const qualityOrder = { top: 0, high: 1, medium: 2, low: 3 };
        return qualityOrder[a.quality] - qualityOrder[b.quality];
      }) satisfies Array<IBlog>;
  } catch (error) {
    console.error("Error getting all blogs:", error);
    return [];
  }
}
