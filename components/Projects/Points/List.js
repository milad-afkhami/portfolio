import React from "react";
import { Div, Text } from "@kits";
import styled from "styled-components";

export const ProjectPointsList = (props) => {
  const { points } = props || {};

  return (
    <StyledWrapper>
      {points.map((point) =>
        point ? (
          <details
            className={`tree-nav__item ${point?.points ? "is-expandable" : ""}`}
            open
          >
            <summary className="tree-nav__item-title">
              {typeof point === "string" ? point : point.title}
            </summary>
            {point?.points?.length ? (
              <ProjectPointsList points={point.points} />
            ) : null}
          </details>
        ) : null
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 0 1.5rem;
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
    /*  */
    left: 0;
    top: 3rem;
    height: calc(100% - 4rem);
  }
  .tree-nav__item .tree-nav__item {
    margin-left: 2rem;
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
    transition: transform 300ms ease;
    font-family: "auto";
    color: var(--color-text-primary);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 0.9;
    content: "›";
    display: inline-block;
    /* left: 4px; */
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
    /* padding-left: 2rem; */
  }
  .is-expandable > .tree-nav__item-title {
    cursor: pointer;
    transition: color 0.1s;
    :hover {
      color: var(--color-text-secondary);
    }
  }
  .tree-nav__item-title::-webkit-details-marker {
    display: none;
  }
`;
