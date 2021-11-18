import { forEach } from "lodash";
import { mediaFeatures } from "@stylesheets";
import { __reduce } from "@utils";

export const responsiveProps = (responsive) =>
  __reduce(
    responsive,
    (result, rspValue, rspKey) => {
      result[`@media ${mediaFeatures[rspKey]}`] = rspValue;
      return result;
    },
    {}
  );
