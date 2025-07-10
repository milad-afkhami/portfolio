import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import { cdnBaseUrl } from "@/configs/general";
import type { HttpResponse, IProject, IProjectLite } from "@/types/general";

type Response = Array<{
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

export async function getAllProjects(): Promise<Array<IProjectLite>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: "/projects",
      params: { populate: "logo", fields: "slug,title,shortDescription,technologies" },
    });

    const result = response.data.map(
      (project) =>
        ({
          slug: project.slug,
          title: project.title,
          logo: project.logo ? `${cdnBaseUrl}${project.logo.url}` : undefined,
          technologies: project.technologies,
          shortDescription: project.shortDescription,
        }) satisfies IProjectLite,
    );

    return result;
  } catch (error) {
    console.error("Error getting all projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Nullable<IProject>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: "/projects",
      params: { populate: "*", "filters[slug]": slug },
    });

    const result = response.data[0];

    return {
      slug: result.slug,
      date: result.date,
      link: result.link,
      title: result.title,
      logo: result.logo ? `${cdnBaseUrl}${result.logo.url}` : undefined,
      features: result.features,
      description: result.description,
      technologies: result.technologies,
      shortDescription: result.shortDescription,
      images: result.images?.map((image) => `${cdnBaseUrl}${image.url}`),
    } satisfies IProject;
  } catch (error) {
    console.error("Error getting project by slug:", error);
    return null;
  }
}
