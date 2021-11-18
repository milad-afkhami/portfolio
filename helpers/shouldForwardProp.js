const domProhibitedProps = {
  Div: [
    // "width", "height" image component extends Div and it need width and height attribute.
    "mw",
    "Mw",
    "mh",
    "Mh",
    "matchParent",
    "curve",
    "shadow",
    "pace",
    "border",
    "borderW",
    "bg",
    "bgImage",
    "color",
    "hoverBg",
    "hoverColor",
    "hoverShadow",
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
    "flex",
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
  ],
  Input: ["height", "bg", "error", "success", "stateColor"],
};

// for some internal reasons, defaultValidatorFn was filtering layout property which is necessary for rendering next/image, so we manually allowed it to pass.
const domAllowedProps = ["quality", "layout", "width", "height", "blurDataURL"];

export const shouldForwardProp =
  (kitName, customValidatorFn = () => true) =>
  (prop, defaultValidatorFn) =>
    !domProhibitedProps[kitName].includes(prop) &&
    (domAllowedProps.includes(prop) ? true : defaultValidatorFn(prop)) &&
    customValidatorFn(prop);
