import Div from "@kits/Div";
import PaceVariables from "./Paces";
import ColorVariables from "./Colors";
import CurveVariables from "./Curves";
import ShadowVariables from "./Shadows";
import SpacingVariables from "./Spacings";
import TypographyVariables from "./Typography";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

const MarkdownVariables: FC = () => (
  <Div id="markdown-variables" my="4">
    <SectionTitle title="markdown.variables.title" icon="measure" />
    <ColorVariables />
    <CurveVariables />
    <PaceVariables />
    <SpacingVariables />
    <TypographyVariables />
    <ShadowVariables />
  </Div>
);

export default MarkdownVariables;
