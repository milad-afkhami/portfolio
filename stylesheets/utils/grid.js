import { spacings } from "@stylesheets";

export const grid = (cols = "", rows = "", colGap, rowGap) => ({
  display: "grid",
  ...(cols ? { gridTemplateColumns: cols } : {}),
  ...(rows ? { gridTemplateRows: rows } : {}),
  ...(colGap ? { gridColumnGap: spacings[colGap] || colGap } : {}),
  ...(rowGap ? { gridRowGap: spacings[rowGap] || rowGap } : {}),
});
