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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    require("prismjs/prism").highlightAll();
    require("prismjs/components/prism-jsx.js");
    require("prismjs/components/prism-tsx.js");
    require("prismjs/components/prism-typescript.js");
    require("prismjs/components/prism-json.js");
    require("prismjs/components/prism-scss.js");
    require("prismjs/components/prism-markdown.js");
  }, []);

  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MarkdownWrapper;
