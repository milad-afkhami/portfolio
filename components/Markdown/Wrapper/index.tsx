/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
import { useEffect } from "react";
import StyledWrapper from "./Styled";
import type { HOCFunctionalComponent } from "@_types/components";

const MarkdownWrapper: HOCFunctionalComponent = ({ children }) => {
  useEffect(() => {
    // import("prismjs/themes/prism-tomorrow.css");
    // import("../../node_modules/prismjs/themes/prism-tomorrow.css");

    require("prismjs/prism").highlightAll();
    require("prismjs/components/prism-jsx.js");
    require("prismjs/components/prism-js-extras.js");
  }, []);

  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MarkdownWrapper;
