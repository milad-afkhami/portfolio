import __isEqual from "lodash-es/isEqual";

const useComparer =
  (...properties) =>
  (firstObj, secondObj) =>
    __isEqual(
      properties.map((property) => firstObj[property]),
      properties.map((property) => secondObj[property])
    );

export default useComparer;