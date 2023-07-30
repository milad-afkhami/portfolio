import FAVOURITE_TYPES from "@constants/favourites";
import __lowerCase from "lodash-es/lowerCase";

export default class FavouritesHelper {
  static getLinks = (): {
    group: string;
    links: { label: string; link: string }[];
  }[] =>
    Object.keys(FAVOURITE_TYPES).map(
      (group) => ({
        group: __lowerCase(group),
        links: Object.values(
          FAVOURITE_TYPES[group as keyof typeof FAVOURITE_TYPES]
        ).map((_key) => ({
          label: __lowerCase(_key),
          link: "/favourites/".concat(__lowerCase(_key)),
        })),
      }),
      {}
    );
}
