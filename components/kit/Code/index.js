import React from "react";
import { highlightAll } from "prismjs/prism";
import { useEffect, useTheme } from "@hooks";
import { Wrapper } from "./Wrapper";
import "prismjs/components/prism-jsx";

// 1 : okaidia, solarizedlight, tomorrow
// 2 : twilight, coy, dark, funky
import "prismjs/themes/prism-tomorrow.css";

export const Code = (props) => {
  const { children, code, language = "jsx" } = props || {};

  useEffect(highlightAll, []);

  return (
    <Wrapper>
      <code className={`language-${language}`}>{code || children}</code>
    </Wrapper>
  );
};

// const { theme } = useTheme(); useEffect(() => { theme === THEMES.DARK ? import("prismjs/themes/prism-okaidia.css") : theme === THEMES.LIGHT ? import("prismjs/themes/prism-solarizedlight.css") : ""; Prism.highlightAll(); }, [theme]);
