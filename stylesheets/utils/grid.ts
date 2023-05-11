import { spacings } from "@stylesheets";

export const grid = (
  cols = "",
  rows = "",
  colGap,
  rowGap,
  autoFlow,
  align,
  justify
) => ({
  display: "grid",
  ...(cols ? { gridTemplateColumns: cols } : {}),
  ...(rows ? { gridTemplateRows: rows } : {}),
  ...(colGap ? { columnGap: spacings[colGap] || colGap } : {}),
  ...(rowGap ? { rowGap: spacings[rowGap] || rowGap } : {}),
  ...(autoFlow ? { gridAutoFlow: autoFlow } : {}),
  ...(align ? { alignContent: align } : {}),
  ...(justify ? { justifyItems: justify } : {}),
});
