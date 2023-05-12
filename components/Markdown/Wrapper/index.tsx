import { useEffect } from "@hooks";
import { THEMES } from "@constants";
import styled from "styled-components";
import { PrismTomorrowTheme } from "./PrismTomorrowTheme";
import { TableStyles } from "./TableStyles";



const MarkdownWrapper = ({ children, ...rest }) => {
  useEffect(() => {
    // import("prismjs/themes/prism-tomorrow.css");
    // import("../../node_modules/prismjs/themes/prism-tomorrow.css");

    require("prismjs/prism").highlightAll();
    require("prismjs/components/prism-jsx.js");
    require("prismjs/components/prism-js-extras.js");
  }, []);

  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 300;

  code {
    font-family: monospace !important;
  }

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
    border-left: 10px solid var(--color-border-light);
    margin: 1.5em 0 1.5rem 1rem;
    padding: 1rem;
  }

  blockquote p {
    display: inline;
  }

  /* for adding small text as p.s. */
  h5 {
    font-weight: 100;
  }

  ${TableStyles}

  ${PrismTomorrowTheme}
`;

            
                
            
            
            
            export default MarkdownWrapper;