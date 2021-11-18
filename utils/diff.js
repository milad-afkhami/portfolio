import { __reduce, __isEqual } from "./";
export const difference = (obj1, obj2) =>
  __reduce(
    obj1,
    (result, value, key) =>
      __isEqual(value, obj2[key]) ? result : result.concat(key),
    []
  );
