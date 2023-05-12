import { spacings } from "@stylesheets";

const prepareSpacing = (s = []) =>
  `${s.map(($s) => spacings[$s] || $s).join(" ")}`;

export default prepareSpacing;
