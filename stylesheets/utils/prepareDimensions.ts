import __reduce from "lodash-es/reduce";
import spacingVar from "./var/spacingVar";
import type DivProps from "@kits/Div/props";

type Dimensions = NonNullable<DivProps["dimensions"]>;

export default function prepareDimensions(d: Dimensions) {
  return __reduce(
    d,
    (result, v, k) => {
      const value = spacingVar(v);
      // eslint-disable-next-line no-param-reassign
      result[k as keyof typeof result] = value;
      return result;
    },
    {} as Dimensions
  );
}
