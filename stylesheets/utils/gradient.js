export function linearGradient(
  start: String | { color: String, percentage: String | Number },
  end: String | { color: String, percentage: String | Number },
  dir = "bottom"
) {
  const startColor = typeof start === "object" ? start.color : start;
  const endColor = typeof end === "object" ? end.color : end;
  const startPercentage =
    (typeof start === "object" ? start.percentage : "0") + "%";
  const endPercentage =
    (typeof end === "object" ? end.percentage : "100") + "%";
  return `to ${dir}, ${startColor} ${startPercentage}, ${endColor} ${endPercentage}`;
}

export function radialGradient() {
  return "";
}
