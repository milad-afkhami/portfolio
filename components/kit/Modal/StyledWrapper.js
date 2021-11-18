import { c } from "@stylesheets";
import styled from "styled-components";

export const StyledModalWrapper = styled.div(({ isOpen }) => ({
  position: "absolute",
  ...(isOpen
    ? {
        transition: "all 0.3s",
        zIndex: "var(--overlay-z-index)",
        width: "100%",
        height: "100%",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(15px)",
        opacity: "1",
        background: c("bg-tertiary-pale"),
      }
    : {
        backdropFilter: "blur(0px)",
        opacity: "0",
        width: "0",
        height: "0",
        left: "50%",
      }),
}));
