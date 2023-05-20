import { styled } from "goober";
import { responsiveUpperBoundBreakpointValue } from "@configs/general";

/** number of items to hide in responsive */
const itemsToHide = 3;

const ProjectCardsWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: var(--spacing-4);
  row-gap: var(--spacing-4);
  overflow: auto;
  padding: var(--spacing-2);
  grid-auto-flow: row;
  & > *:nth-child(n + ${6 - itemsToHide + 1}) {
    display: "none";
  }
  @media (min-width: ${responsiveUpperBoundBreakpointValue}) {
    grid-template-columns: repeat(3, 1fr);
    & > *:nth-child(n + ${6 - itemsToHide + 1}) {
      display: flex;
    }
  }
`;

export default ProjectCardsWrapper;
