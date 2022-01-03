import React from "react";
import { Div } from "@kits";
import { ColorVariables } from "./Colors";
import { CurveVariables } from "./Curves";
import { PaceVariables } from "./Paces";
import { SpacingVariables } from "./Spacings";
import { TypographyVariables } from "./Typography";
import { ShadowVariables } from "./Shadows";
import { SectionTitle } from "@components/Layout";

export const MarkdownVariables = (props) => {
  const {} = props || {};

  return (
    <Div id="markdown-variables" my="4">
      <SectionTitle title="markdown.variables.title" icon="variable" />
      <ColorVariables />
      <CurveVariables />
      <PaceVariables />
      <SpacingVariables />
      <TypographyVariables />
      <ShadowVariables />
    </Div>
  );
};
