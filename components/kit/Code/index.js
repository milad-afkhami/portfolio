import React from "react";
import { highlightAll } from "prismjs/prism";
import { useEffect, useTheme } from "@hooks";
import { Wrapper } from "./Wrapper";
import { CopyCode } from "./Copy";
import "prismjs/components/prism-jsx";

// 1 : okaidia, solarizedlight, tomorrow
// 2 : twilight, coy, dark, funky
import "prismjs/themes/prism-tomorrow.css";
import { toast } from "@utils";

export const Code = (props) => {
  const { children, code, language = "jsx" } = props || {};

  useEffect(highlightAll, []);

  const onClickCopy = () =>
    navigator.clipboard
      .writeText(code)
      .then(() => toast("layout.message.codeCopied", { type: "success" }))
      .catch(() => toast("layout.message.error.something", { type: "error" }));

  return (
    <Wrapper>
      <pre className={`language-${language}`}>
        <CopyCode onClick={onClickCopy} />
        <code className={`language-${language}`}>{code || children}</code>
      </pre>
    </Wrapper>
  );
};

// const { theme } = useTheme(); useEffect(() => { theme === THEMES.DARK ? import("prismjs/themes/prism-okaidia.css") : theme === THEMES.LIGHT ? import("prismjs/themes/prism-solarizedlight.css") : ""; Prism.highlightAll(); }, [theme]);
