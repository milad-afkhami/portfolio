import { THEMES } from "@constants";
import styled from "styled-components";

// import styles here
export const Wrapper = styled.div`
  position: relative;
  min-height: 2.75rem;

  /* background: var(--color-bg-secondary) !important; */
  [data-theme="${THEMES.DARK}"] pre {
    background: var(--color-bg-secondary) !important;
  }

  & pre:hover #copy-code {
    /* display: flex !important; */
    opacity: 1;
  }

  /* .token.class-name {
    color: var(--color-brand-hover);
  } */
`;
