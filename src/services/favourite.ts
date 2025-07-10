import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import { cdnBaseUrl } from "@/configs/general";
import type { HttpResponse, IFavourite, IFavouriteCategory } from "@/types/general";

type Response = Array<{
  id: number;
  documentId: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  link: string | null;
  metadata: Array<{ key: string; value: string }> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage: {
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
  } | null;
}>;

export async function getFavouritesByCategory(category: IFavouriteCategory["slug"]): Promise<Array<IFavourite>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/favourites`,
      params: { populate: "*", "filters[category][slug]": category },
    });

    const result = response.data.map(
      (favourite) =>
        ({
          slug: favourite.slug,
          title: favourite.title,
          subtitle: favourite.subtitle,
          description: favourite.description,
          cover: favourite.coverImage ? `${cdnBaseUrl}${favourite.coverImage.url}` : "",
          link: favourite.link ?? undefined,
          meta: favourite.metadata ?? undefined,
        }) satisfies IFavourite,
    );

    return result;
  } catch (error) {
    console.error("Error getting favourites by category:", error);
    return [];
  }
}

export async function getFavouriteBySlug(slug: string): Promise<Nullable<IFavourite>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/favourites`,
      params: { populate: "*", "filters[slug]": slug },
    });

    const result = response.data[0];

    return {
      slug: result.slug,
      title: result.title,
      subtitle: result.subtitle,
      description: result.description,
      cover: result.coverImage ? `${cdnBaseUrl}${result.coverImage.url}` : "",
      link: result.link ?? undefined,
      meta: result.metadata ?? undefined,
    } satisfies IFavourite;
  } catch (error) {
    console.error("Error getting favourite by slug:", error);
    return null;
  }
}
