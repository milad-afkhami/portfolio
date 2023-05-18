import mediaFeatures from "@stylesheets/mediaFeatures";
import __reduce from "lodash-es/reduce";
import type DivProps from "@kits/Div/props";

export default function responsiveProps(
  responsive: NonNullable<DivProps["responsive"]>
) {
  return __reduce(
    responsive,
    (result, rspValue, rspKey) => {
      if (rspValue) {
        // eslint-disable-next-line no-param-reassign
        result[`@media ${mediaFeatures[rspKey as MediaFeatures]}`] = rspValue;
      }
      return result;
    },
    {} as Dictionary<DivProps>
  );
}
