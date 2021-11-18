import { c } from "@stylesheets";
import { createGlobalStyle } from "styled-components";

export const BottomSheetStyles = createGlobalStyle(({ variables }) => ({
  'div[role="dialog"]': {
    "--rsbs-handle-bg": c("border-light", true),
    "--rsbs-bg": `linear-gradient(148.16deg, ${c("bg-tertiary")} 3.38%, ${c(
      "bg-primary"
    )} 58.18%)`.imp(),
    "--rsbs-overlay-rounded": "40px".imp(),
  },
}));
