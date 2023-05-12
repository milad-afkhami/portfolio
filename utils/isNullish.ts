const isNullish = (value) =>
  typeof value === "undefined" || value === null ? true : false;

export default isNullish;
