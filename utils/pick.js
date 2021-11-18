import { pick as _pick, groupBy as _groupBy } from "lodash";

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @category Object
 * @param object The source object.
 * @param [props] The property names/paths to pick, specified individually or in an array.
 * @param namingFunction function to name keys, by default it picks the key of the property itself.
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3, 'd': { 'e': 4 } };
 * pick(object, ['a', 'c', 'd.e']);
 * // => { 'a': 1, 'c': 3, e: 4 }
 */
export const pick = (object, props, namingFunction) =>
  (typeof props === "string" ? [props] : props).reduce((acc, cv) => {
    acc[namingFunction ? namingFunction(cv) : cv.split(".").pop()] = _.get(
      object,
      cv
    );
    return acc;
  }, {});
