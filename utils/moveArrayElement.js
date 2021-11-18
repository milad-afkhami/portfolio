/**
 * swap Array elements from [from] position to [to] position
 * @param {Array} array the array to modify
 * @param {Number} from the index of source element
 * @param {Number} to the destination position in array
 */

export const moveArrayElement = (array, from, to) => {
  return array.reduce((prev, current, idx, self) => {
    if (from === to) prev.push(current);

    if (idx === from) return prev;

    if (from < to) prev.push(current);

    if (idx === to) prev.push(self[from]);

    if (from > to) prev.push(current);

    return prev;
  }, []);
};
