import breakpoints from "@stylesheets/breakpoints";
import styled from "styled-components";

const StyledSvg = styled.svg`
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

export default StyledSvg;
