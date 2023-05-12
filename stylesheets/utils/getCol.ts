import __reduce from "lodash-es/reduce";

const getCol = (col = {}) =>
  __reduce(
    col,
    (acc, cv, key) => {
      if (key === "xs" && cv) acc += ` col-${cv} `;
      else if (cv) acc += ` col-${key}-${cv} `;

      return acc;
    },
    ""
  );

export default getCol;
