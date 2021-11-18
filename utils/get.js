import { get } from "lodash";

export const __get = (object, path) => (path ? get(object, path) : object);
