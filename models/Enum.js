/**
 * An Enum constructor in javascript, well not quite, not a complete instance of the Enum but a similar one.
 * @param args Enum members
 * @method next this method gets a member of instanciated enum and returns the next member. if there wasn't any, it will return first parameter
 */
export function Enum(...values) {
  for (const val of values) this[val] = val;
}

Enum.prototype.next = function (currentValue) {
  const members = Object.values(this);
  const currentIndex = members.indexOf(currentValue);

  let nextIndex = (currentIndex + 1) % members.length;

  return members[nextIndex];
};
