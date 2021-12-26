import { FAVOURITE_TYPES } from "@constants";
import { __capitalize, __lowerCase, __map } from "@utils";

export class LayoutHelper {
  static getFooterLinks = () => {
    return __map(
      FAVOURITE_TYPES,
      (links, group) => ({
        group: `favourite${__capitalize(group)}s`,
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
