import spacings from "@stylesheets/constants/spacing";

const prepareSpacing = (s = []) =>
  `${s.map(($s) => spacings[$s] || $s).join(" ")}`;

export default prepareSpacing;
