import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import { cdnBaseUrl } from "@/configs/general";
import { serialize } from "next-mdx-remote/serialize";
import type { HttpResponse, IAbout } from "@/types/general";

type Response = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

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
  text: string;
  virtues: Array<{
    name: string;
    description: string;
  }>;
  skills: Array<{
    category: string;
    items: Array<string>;
  }>;
};

export async function getAbout(): Promise<Nullable<IAbout>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/about`,
      params: { populate: "*" },
    });

    const mdxContent = await serialize(response.data.text);

    return {
      coverImage: `${cdnBaseUrl}${response.data.coverImage.url}`,
      text: mdxContent,
      virtues: response.data.virtues.map((virtue) => ({
        name: virtue.name,
        description: virtue.description,
      })),
      skills: response.data.skills.map((skill) => ({
        category: skill.category,
        items: skill.items,
      })),
    } satisfies IAbout;
  } catch (error) {
    console.error("Error getting about:", error);
    return null;
  }
}
