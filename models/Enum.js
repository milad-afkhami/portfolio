import { __keys } from "@utils";

/**
 * creates an Enum ( not a complete instance of typescript enum )
 * @param args Enum members
 * @method next : this method gets a member of instanciated enum and returns the next member. if there wasn't any, it will return first parameter
 */
export function Enum(...values) {
  for (const val of values) this[val] = val;

  const next = (currentValue) => {
    // to filter methods from members:
    const members = __keys(this, (m) =>
      ["string", "number"].includes(typeof m)
    );
    const currentIndex = members.indexOf(currentValue);

    let nextIndex = (currentIndex + 1) % members.length;

    return members[nextIndex];
  };

  return { ...Object.freeze(this), next };
}

// Enum.prototype.next = (currentValue) => {};
