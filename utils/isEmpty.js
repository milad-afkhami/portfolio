import _ from "lodash";

// checks if an object is empty or not, if yes returns object itself.
export const isEmpty = (obj: Object = {}) => (!_.isEmpty(obj) ? obj : false);
