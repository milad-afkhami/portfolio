import { THEMES } from "@constants";
import styled from "styled-components";

// import styles here
export const Wrapper = styled.pre`
  /* background: var(--color-bg-secondary) !important; */
  [data-theme="${THEMES.DARK}"] & {
    background: var(--color-bg-secondary) !important;
  }

  /* .token.class-name {
    color: var(--color-brand-hover);
  } */
`;
