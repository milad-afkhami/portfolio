import { styled } from "goober";
import breakpoints from "@constants/stylesheets/breakpoints.json";

const TreeWrapper = styled("div")`
  & > details {
    overflow-x: auto;
    overflow-y: hidden;
  }
  .tree-nav__item details {
    width: fit-content;

    overflow: inherit;
    &.is-expandable {
    }
  }

  font-size: var(--font-size-md-b);
  summary {
    cursor: default;
    width: fit-content;
    position: relative;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  .tree-nav__item {
    display: block;
    white-space: nowrap;
    position: relative;
  }
  .tree-nav__item.is-expandable::before {
    content: "";
    border-left: 1px solid var(--color-border-light-main);
    position: absolute;
    left: 0;
    top: 3rem;
    height: calc(100% - 4rem);
  }
  .tree-nav__item .tree-nav__item {
    padding-left: 1rem;
  }
  .tree-nav__item.is-expandable[open] > .tree-nav__item-title::before {
    transform: rotate(90deg);
  }
  .tree-nav__item.is-expandable > .tree-nav__item-title {
    padding-left: 0;
  }
  .tree-nav__item.is-expandable > .tree-nav__item-title::before {
    content: "\\e923";
    font-family: "icomoon";
    font-size: var(--font-size-lg);
    font-weight: bold;
    position: absolute;
    right: -2rem;
    will-change: transform;
    transition: var(--pace-fast) ease;
    color: var(--color-text-primary-main);
    line-height: 1.2;
    height: 100%;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .tree-nav__item-title {
    cursor: default;
    display: block;
    outline: 0;
    color: var(--color-text-primary-main);
    line-height: 2.5rem;
  }
  .is-expandable > .tree-nav__item-title {
    cursor: pointer;
    transition: color var(--pace-x-fast);
    :hover {
      color: var(--color-text-secondary-main);
      :before {
        color: var(--color-text-secondary-main);
      }
    }
  }
  .tree-nav__item-title::-webkit-details-marker {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}px) {
    .tree-nav__item .tree-nav__item {
      padding-left: 1.5rem;
    }
    .tree-nav__item.is-expandable > .tree-nav__item-title::before {
      line-height: 0.9;
    }
  }
`;

export default TreeWrapper;
