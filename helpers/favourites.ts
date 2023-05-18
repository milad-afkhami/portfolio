import FAVOURITE_TYPES from "@constants/favourites";
import __lowerCase from "lodash-es/lowerCase";
import __map from "lodash-es/map";

export default class FavouritesHelper {
  static getLinks = (): Array<{
    group: string;
    links: Array<{ label: string; link: string }>;
  }> =>
    __map(
      FAVOURITE_TYPES,
      (links, group) => ({
        group: __lowerCase(group),
        links: Object.values(links).map(
          (_key) => ({
            label: __lowerCase(_key),
            link: "/favourites/".concat(__lowerCase(_key)),
          }),
          []
        ),
      }),
      {}
    );
}
