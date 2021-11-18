import { __isEqual } from "@utils";

export const useComparer =
  (...properties) =>
  (firstObj, secondObj) =>
    __isEqual(
      properties.map((property) => firstObj[property]),
      properties.map((property) => secondObj[property])
    );
