import { styled } from "goober";

const TimelineSectionWrapper = styled("div")`
  margin: var(--spacing-5) 0;
  padding: var(--spacing-4) var(--spacing-3);
  border-radius: var(--curve-sm);
  background-color: var(--color-bg-secondary-main);
  &:last-child::before {
    content: "";
    border: 2px solid var(--color-border-light-main);
    height: calc(100% + 1rem);
    position: absolute;
    left: -2rem;
    top: 1rem;
  }
  ::after {
    content: "";
    border: var(--color-assistive-success-main);
    border-width: 4px;
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: -3rem;
    top: -1rem;
    border-radius: var(--curve-circle);
    box-shadow: 0px 0px 4px 1px var(--color-assistive-success-main);
  }
`;

export default TimelineSectionWrapper;
