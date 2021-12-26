import React from "react";
import { Div, Tree } from "@kits";
import { useState } from "@hooks";
import { SectionTitle } from "@components/Layout";
import { spacings } from "@stylesheets";

export const SpacingVariables = (props) => {
  return (
    <Div id="colors" my="3">
      <SectionTitle title="markdown.variables.spacings" tag="h4" />
      <Tree
        branches={Object.keys(spacings).filter((a) => !a.includes("".imp()))}
        defaultOpen={false}
      />
    </Div>
  );
};
