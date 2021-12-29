import { THEMES } from "@constants";
import styled from "styled-components";

// import styles here
export const Wrapper = styled.pre`
  position: relative;
  min-height: 2.75rem;

  /* background: var(--color-bg-secondary) !important; */
  [data-theme="${THEMES.DARK}"] & {
    background: var(--color-bg-secondary) !important;
  }

  &:hover #copy-code {
    /* display: flex !important; */
    opacity: 1;
  }

  /* .token.class-name {
    color: var(--color-brand-hover);
  } */
`;
