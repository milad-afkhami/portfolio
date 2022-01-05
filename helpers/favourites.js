import { FAVOURITE_TYPES } from "@constants";
import { __capitalize, __lowerCase, __map } from "@utils";

export class FavouritesHelper {
  static getLinks = () => {
    return __map(
      FAVOURITE_TYPES,
      (links, group) => ({
        group: __lowerCase(group),
        links: Object.values(links).map(
          (_key) => ({
            label: __lowerCase(_key),
            link: "/favourites/" + __lowerCase(_key),
          }),
          []
        ),
      }),
      {}
    );
  };
}
