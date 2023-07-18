import { styled } from "goober";
import breakpoints from "@constants/stylesheets/breakpoints.json";

const ProjectCardsWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: var(--spacing-4);
  row-gap: var(--spacing-4);
  overflow: auto;
  padding: var(--spacing-2);
  grid-auto-flow: row;

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ProjectCardsWrapper;
