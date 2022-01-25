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

  blockquote {
    background: var(--color-bg-secondary);
    border-left: 10px solid var(--color-border-dark);
    margin: 1.5em 0 1.5rem 1rem;
    padding: 1rem;
  }
  /* blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  } */
  blockquote p {
    display: inline;
  }
`;
