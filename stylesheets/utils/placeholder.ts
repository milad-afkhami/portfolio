import type { CSSAttribute } from "goober";

/** @deprecated use `prefix` method from `goober/prefixer` instead. */
const placeholder = (styles: CSSAttribute) => ({
  "::-webkit-input-placeholder": styles,
  ":-moz-placeholder": styles,
  "::-moz-placeholder": styles,
  ":-ms-input-placeholder": styles,
  "::placeholder": styles,
});

export default placeholder;
