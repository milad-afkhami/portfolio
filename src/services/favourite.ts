import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";
import type { IFavourite, IFavouriteCategory } from "@/types/general";

const FAVOURITES_DIR = path.join(process.cwd(), "src/data/favourites");

export async function getFavouritesByCategory(category: IFavouriteCategory["slug"]): Promise<Array<IFavourite>> {
  try {
    const filePath = path.join(FAVOURITES_DIR, `${category}.json`);
    const source = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(source) as Array<IFavourite>;
  } catch (error) {
    console.error("Error getting favourites by category:", error);
    return [];
  }
}

export async function getFavouriteBySlug(
  category: IFavouriteCategory["slug"],
  slug: string,
): Promise<Nullable<IFavourite>> {
  try {
    const favourites = await getFavouritesByCategory(category);
    return favourites.find((favourite) => favourite.slug === slug) ?? null;
  } catch (error) {
    console.error("Error getting favourite by slug:", error);
    return null;
  }
}
