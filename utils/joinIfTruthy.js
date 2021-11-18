/**
 * Will filter through an array to get truthy values(or apply any callback that u passed to it) and then will call Array.join() on filtered array.
 * **/
export const joinIfTruthy = (array = [], separator, callback) =>
  (array || []).filter(callback || ((_) => _)).join(separator || " ");
