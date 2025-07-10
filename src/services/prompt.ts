import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import { cdnBaseUrl } from "@/configs/general";
import type { HttpResponse, IPrompt, IPromptLite } from "@/types/general";

type Response = Array<{
  id: number;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hasVariable: boolean;
  coverImage?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    size: number;
    url: string;
    previewUrl: string;
  };
}>;

export async function getAllPrompts(): Promise<Array<IPromptLite>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: "/prompts",
      params: { populate: "*" },
    });

    const result = response.data.map(
      (prompt) =>
        ({
          slug: prompt.slug,
          name: prompt.name,
          description: prompt.description,
          coverImage: prompt.coverImage ? `${cdnBaseUrl}${prompt.coverImage.url}` : "",
        }) satisfies IPromptLite,
    );

    return result;
  } catch (error) {
    console.error("Error getting all prompts:", error);
    return [];
  }
}

export async function getPromptBySlug(slug: string): Promise<Nullable<IPrompt>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/prompts?populate=*&filters[slug]=${slug}`,
    });

    const result = response.data[0];

    return {
      slug: result.slug,
      name: result.name,
      content: result.content,
      description: result.description,
      hasVariable: result.hasVariable,
      coverImage: result.coverImage ? `${cdnBaseUrl}${result.coverImage.url}` : "",
    } satisfies IPrompt;
  } catch (error) {
    console.error("Error getting prompt by slug:", error);
    return null;
  }
}
