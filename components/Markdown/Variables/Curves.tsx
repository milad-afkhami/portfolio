import React from "react";
import { Div, Tree } from "@kits";
import { useState } from "@hooks";
import { SectionTitle } from "@components/Layout";
import { curves } from "@stylesheets";

export const CurveVariables = (props) => {
  return (
    <Div id="curves" my="3">
      <SectionTitle title="markdown.variables.curves" tag="h4" />
      <Tree branches={Object.keys(curves)} />
    </Div>
  );
};
