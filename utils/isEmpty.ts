import _isEmpty from "lodash/isEmpty";

// checks if an object is empty or not, if yes returns object itself.
export const isEmpty = (obj = {}) => (!_isEmpty(obj) ? obj : false);
