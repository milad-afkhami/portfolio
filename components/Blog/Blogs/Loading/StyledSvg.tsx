import { breakpoints } from "@stylesheets";
import styled from "styled-components";

export const StyledSvg = styled.svg`
  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg}px) {
    #clip-path rect {
      width: calc(50% - 0.5rem);

      &:nth-child(3n) {
        display: none;
      }

      &:nth-child(3n + 2) {
        x: calc(50% + 0.5rem);
      }
    }
  }
`;
