import _isEmpty from "lodash/isEmpty";

// checks if an object is empty or not, if yes returns object itself.
export const isEmpty = (obj: Object = {}) => (!_isEmpty(obj) ? obj : false);
