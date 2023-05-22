// #region imports
import MarkdownWrapper from "./Wrapper";
import MDXRemote from "./MDXRemote";
import type { FC } from "react";
import type { MDXResult } from "@_types/components";
// #endregion

const Markdown: FC<Pick<MDXResult, "source">> = (props) => {
  const { source } = props;

  return (
    <MarkdownWrapper>
      <MDXRemote {...source} />
    </MarkdownWrapper>
  );
};

export default Markdown;
