import React from "react";
import styled from "styled-components";

export const MarkdownWrapper = styled.div`
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
`;
