import { mediaFeatures } from "@stylesheets/breakpoints";
import __reduce from "lodash-es/reduce";

const responsiveProps = (responsive) =>
__reduce(
  responsive,
  (result, rspValue, rspKey) => {
    result[`@media ${mediaFeatures[rspKey]}`] = rspValue;
    return result;
  },
  {}
  );


            export default responsiveProps;