import React from "react";
import { Div, Tree } from "@kits";
import { useState } from "@hooks";
import { SectionTitle } from "@components/Layout";
import { shadows } from "@stylesheets";

export const ShadowVariables = (props) => {
  return (
    <Div id="colors" my="3">
      <SectionTitle title="markdown.variables.shadows" tag="h4" />
      <Tree branches={Object.keys(shadows)} defaultOpen={false} />
    </Div>
  );
};
