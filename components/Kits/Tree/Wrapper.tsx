import mediaFeatures from "@stylesheets/mediaFeatures";
import { styled } from "goober";

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
    border-left: 1px solid var(--color-border-light);
    content: "";
    height: 100%;
    position: absolute;
    left: 0.8rem;
    top: 2rem;
    height: calc(100% - 2rem);
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
    padding-left: 2rem;
    padding-left: 0;
  }
  .tree-nav__item.is-expandable > .tree-nav__item-title::before {
    position: absolute;
    will-change: transform;
    transition: var(--pace-fast) ease;
    font-family: "auto";
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    font-weight: bold;
    line-height: 1.2;
    /* content: "›"; */
    content: "\\e923";
    font-family: "icomoon";
    height: 100%;
    display: inline-block;
    right: -2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    text-align: center;
  }

  .tree-nav__item-title {
    cursor: default;
    display: block;
    outline: 0;
    color: var(--color-text-primary);
    line-height: 2.5rem;
  }
  .is-expandable > .tree-nav__item-title {
    cursor: pointer;
    transition: color var(--pace-x-fast);
    :hover {
      color: var(--color-text-secondary);
      :before {
        color: var(--color-text-secondary);
      }
    }
  }
  .tree-nav__item-title::-webkit-details-marker {
    display: none;
  }

  @media ${mediaFeatures.sm} {
    .tree-nav__item .tree-nav__item {
      padding-left: 1.5rem;
    }

    .tree-nav__item.is-expandable > .tree-nav__item-title::before {
      line-height: 0.9;
    }
  }
`;

export default TreeWrapper;
