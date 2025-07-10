import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import { cdnBaseUrl } from "@/configs/general";
import type { HttpResponse, IBlogLite, IHome, IProjectLite } from "@/types/general";

type Response = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blogs: Array<{
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
  }>;
  projects: Array<{
    id: number;
    documentId: string;
    slug: string;
    title: string;
    description: string;
    shortDescription: string;
    date: string;
    technologies: Array<string>;
    link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    features: Array<string>;
    logo?: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
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
      createdAt: string;
    };
    images?: Array<{
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
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
      createdAt: string;
    }>;
  }>;
};

export async function getHome(): Promise<Nullable<IHome>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/home?populate=blogs&populate=blogs.coverImage&populate=projects&populate=projects.logo`,
    });

    return {
      blogs: response.data.blogs.map(
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
      ),
      projects: response.data.projects.map(
        (project) =>
          ({
            slug: project.slug,
            title: project.title,
            shortDescription: project.shortDescription,
            technologies: project.technologies,
            logo: project.logo ? `${cdnBaseUrl}${project.logo.url}` : "",
          }) satisfies IProjectLite,
      ),
    } satisfies IHome;
  } catch (error) {
    console.error("Error getting home:", error);
    return null;
  }
}
