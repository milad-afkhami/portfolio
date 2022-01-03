import get from "lodash/get";

export const __get = (object, path) => (path ? get(object, path) : object);
