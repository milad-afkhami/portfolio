import FAVOURITE_TYPES from "@constants/favourites";
import __capitalize from "lodash-es/capitalize";
import __lowerCase from "lodash-es/lowerCase";
import __map from "lodash-es/map";

export default class FavouritesHelper {
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
