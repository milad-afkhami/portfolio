import { keys, values } from "lodash-es";

/**
 * Creates an array of the own enumerable property names of object.
 * @param object The object to query.
 * @param cb the callback to filter through keys.
 * @return Returns the array of property names that fits to cb conditions.
 */
export const __keys = (obj, cb = () => true) => keys(obj).filter(cb);

/**
 * Creates an array of the own enumerable property values of object.
 *
 * @param object The object to query.
 * @param cb the callback to filter through values.
 * @return Returns an array of property values that fits to cb conditions.
 */
export const __values = (obj, cb = () => true) => values(obj).filter(cb);
