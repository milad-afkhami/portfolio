import MaterialTextField from "@material/react-text-field";
// import MaterialTextField from "node_modules/@material/react-text-field/dist/index";
import styled from "styled-components";
import {
  c,
  spacings,
  curves,
  setTextTypography,
  paces,
  imp,
} from "@stylesheets";
import { shouldForwardProp } from "@helpers";

const StyledTextField = styled(MaterialTextField).withConfig({
  shouldForwardProp: shouldForwardProp("Input"),
})(({ height, stateColor, disabled, error, success, leadingIcon }) => {
  const borderColor = error || success ? stateColor : "border-light";
  return {
    // marginBottom: spacings[3],
    width: "100%",
    "&, & *": {
      fontFamily: "inherit",
      ...setTextTypography("xsm"),
    },
    "&.mdc-text-field": {
      backgroundColor: "transparent !important",
      // disable hover bg
      "&:hover": {
        ...(!disabled ? { borderColor: c("border-dark", true) } : {}),
        ":before": {
          backgroundColor: "transparent !important",
        },
      },
      // borderBottom: `1px solid ${c(bg)}`,
      transition: "all " + paces.fast,
      borderBottom: imp(`2px solid ${c(borderColor)}`),
      height,
      ".mdc-notched-outline__leading": { borderRadius: 0 },
      ".mdc-notched-outline__trailing": { borderRadius: 0 },
      '[dir="rtl"] .mdc-text-field .mdc-floating-label': {
        right: "0.25rem",
      },
      ".mdc-floating-label": {
        color: imp(c("text-secondary")),
        marginBottom: "0",
        ...(leadingIcon ? { insetInlineStart: "3rem" } : {}),
      },
      "&.mdc-text-field--focused .mdc-floating-label": {
        color: imp(c("text-secondary")),
      },
      ".mdc-text-field__input": {
        paddingRight: "0.25rem",
        paddingLeft: "0.25rem",
        caretColor: imp(c("text-secondary")),
        border: imp("none"),
        backgroundColor: "transparent !important",
        color: c("text-primary"),
        ...(leadingIcon ? { paddingInlineStart: "3rem" } : {}),
        ...setTextTypography("sm"),
      },
      ".mdc-line-ripple": {
        display: "none",
      },
    },
  };
});

export default StyledTextField;
