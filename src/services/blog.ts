import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import { type IBlog } from "@/types/general";
import { cdnBaseUrl } from "@/configs/general";
import { serialize } from "next-mdx-remote/serialize";
import type { HttpResponse, IBlogLite } from "@/types/general";

type Response = {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: Array<string>;
  quality: "high" | "medium" | "low";
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  coverImage: {
    id: number;
    caption: string | null;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getBlogBySlug(slug: string): Promise<Nullable<IBlog>> {
  try {
    const response = await HttpClient.get<HttpResponse<Array<Response>>>({
      url: `/blogs`,
      params: { populate: "*", "filters[slug]": slug },
    });

    const result = response.data[0];

    const mdxContent = await serialize(result.content);

    return {
      slug: result.slug,
      date: result.date,
      tags: result.tags,
      content: mdxContent,
      title: result.title,
      summary: result.summary,
      quality: result.quality,
      category: result.category.name,
      description: result.description,
      readingTime: result.readingTime,
      coverImage: `${cdnBaseUrl}${result.coverImage.url}`,
    } satisfies IBlog;
  } catch (error) {
    console.error("Error getting blog by slug:", error);
    return null;
  }
}

export async function getAllBlogs(): Promise<Array<IBlogLite>> {
  try {
    const blogs = await HttpClient.get<HttpResponse<Array<Response>>>({
      url: "/blogs",
      params: { populate: "*" },
    });

    return blogs.data
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .sort((a, b) => {
        const qualityOrder = { high: 0, medium: 1, low: 2 };
        return qualityOrder[a.quality] - qualityOrder[b.quality];
      })
      .map(
        (blog) =>
          ({
            slug: blog.slug,
            date: blog.date,
            title: blog.title,
            description: blog.description,
            readingTime: blog.readingTime,
            coverImage: `${cdnBaseUrl}${blog.coverImage.url}`,
            quality: blog.quality,
          }) satisfies IBlogLite,
      );
  } catch (error) {
    console.error("Error getting all blogs:", error);
    return [];
  }
}
