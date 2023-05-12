/**
 * this method is just like Array.prototype.push except that it returns modified array.
 * @param {Array} array
 * @param {*} element
 */


const push = (array = [], element) => {
  array && array.push(element);
  return array;
};

            export default push;