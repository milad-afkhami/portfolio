import HttpClient from "@/utils/http";
import { cdnBaseUrl } from "@/configs/general";
import type { HttpResponse, IFavouriteCategory } from "@/types/general";

type Response = Array<{
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: IFavouriteCategory["slug"];
  coverImage: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    mime: string;
    url: string;
    previewUrl: string | null;
  };
}>;

export async function getFavouriteCategories(): Promise<Array<IFavouriteCategory>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/favourite-categories`,
      params: { populate: "coverImage" },
    });

    const result = response.data.map(
      (category) =>
        ({
          slug: category.slug,
          title: category.title,
          description: category.description,
          image: `${cdnBaseUrl}${category.coverImage.url}`,
        }) satisfies IFavouriteCategory,
    );

    return result;
  } catch (error) {
    console.error("Error getting favourite categories:", error);
    return [];
  }
}

export async function getFavouriteCategoryBySlug(slug: IFavouriteCategory["slug"]): Promise<IFavouriteCategory | null> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/favourite-categories`,
      params: { populate: "coverImage", "filters[slug]": slug },
    });

    const result = response.data[0];

    return {
      slug: result.slug,
      title: result.title,
      description: result.description,
      image: `${cdnBaseUrl}${result.coverImage.url}`,
    } satisfies IFavouriteCategory;
  } catch (error) {
    console.error("Error getting favourite category by slug:", error);
    return null;
  }
}
