import { styled, type CSSAttribute } from "goober";
import breakpoints from "@constants/stylesheets/breakpoints.json";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type IconButtonProps from "./props";

const disabledStylesheets: CSSAttribute = {
  cursor: "pointer",
  [`@media (min-width: ${breakpoints[responsiveUpperBoundBreakpoint]}px)`]: {
    "&:hover": {
      background: "var(--color-bg-primary-dark)",
    },
  },
};

const StyledIconButtonWrapper = styled("div")<
  Pick<IconButtonProps, "type" | "disabled">
>(({ type = "default", disabled }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "var(--icon-button-height)",
  height: "var(--icon-button-height)",
  minWidth: "var(--icon-button-height)",
  minHeight: "var(--icon-button-height)",
  borderRadius: type === "default" ? "50%" : "var(--curve-sm)",
  ...(!disabled ? disabledStylesheets : {}),
}));

export default StyledIconButtonWrapper;
