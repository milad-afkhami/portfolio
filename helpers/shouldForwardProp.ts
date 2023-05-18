import { shouldForwardProp as gooberShouldForwardProp } from "goober/should-forward-prop";

const domProhibitedProps = [
  // Div
  // "width", "height" // image component extends Div and it need width and height attribute.
  "w",
  "mw",
  "Mw",
  "h",
  "mh",
  "Mh",
  "matchParent",
  "curve",
  "shadow",
  "pace",
  "border",
  "borderW",
  "borderSide",
  "opacity",
  "bg",
  "bgImage",
  "color",
  "hover",
  "hoverBg",
  "hoverColor",
  "hoverShadow",
  "zoomOnHover",
  "m",
  "mStart",
  "mEnd",
  "mx",
  "my",
  "mt",
  "mb",
  "p",
  "pStart",
  "pEnd",
  "px",
  "py",
  "pt",
  "pb",
  "gap",
  "flex",
  "flexPortion",
  "display",
  "col",
  "overflow",
  "overflowX",
  "overflowY",
  "cursor",
  "position",
  "dimensions",
  "zIndex",
  "order",
  "grid",
  "after",
  "before",
  "responsive",
  "css",
  "animation",
  "pointerEvents",
  "rotate",
  "blurBg",
  // Button
  "variant",
  "active",
  "block",
  "loading",
  "trailingIcon",
  // Text
  "lineHeight",
  "maxLines",
  "truncate",
  "bold",
  "userSelect",
  "noTranslation",
  "ns",
  // Image
  "preload",
];

const shouldForwardProp = gooberShouldForwardProp(
  (prop) => !domProhibitedProps.includes(prop)
);

export default shouldForwardProp;
