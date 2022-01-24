import React from "react";
import styled from "styled-components";

export const MarkdownWrapper = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 300;

  & a {
    color: var(--color-brand);
    :hover: {
      color: var(--color-brand-hover);
    }
  }

  table code {
    background: var(--color-brand-light);
    padding: 2px 4px;
    border-radius: 4px;
    color: var(--color-bg-tertiary);
    font-weight: bold;
  }

  ul {
    margin-bottom: 1rem;
    margin-left: 1rem;
    ul {
      margin-left: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
