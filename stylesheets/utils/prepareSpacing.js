import { spacings } from "@stylesheets";

export const prepareSpacing = (s = []) =>
  `${s.map(($s) => spacings[$s] || $s).join(" ")}`;
