import React from "react";
import { Div, Tree } from "@kits";
import { useState } from "@hooks";
import { SectionTitle } from "@components/Layout";
import { paces } from "@stylesheets";

export const PaceVariables = (props) => {
  return (
    <Div id="colors" my="3">
      <SectionTitle title="markdown.variables.paces" tag="h4" />
      <Tree branches={Object.keys(paces)} defaultOpen={false} />
    </Div>
  );
};
