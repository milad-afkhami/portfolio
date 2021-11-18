export const getGrid = (grid = {}) => {
  let res = "";
  Object.entries(grid).map((en) => {
    if (en[0] === "xs" && en[1]) res += `col-${en[1]} `;
    else if (en[1]) res += `col-${en[0]}-${en[1]} `;
  });
  return res;
};
