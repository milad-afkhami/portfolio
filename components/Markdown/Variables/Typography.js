import React from "react";
import { Div, Tree } from "@kits";
import { SectionTitle } from "@components/Layout";
import { typographyVariants } from "@stylesheets";

export const TypographyVariables = (props) => {
  return (
    <Div id="colors" my="3">
      <SectionTitle title="markdown.variables.typography" tag="h4" />
      <Tree
        branches={Object.keys(typographyVariants.default)
          .filter((tp) => !tp.includes("-b"))
          .map((tp) => (tp += "[-b]"))}
      />
    </Div>
  );
};
