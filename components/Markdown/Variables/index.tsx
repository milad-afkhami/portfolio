import Div from "@kits/Div";
import ColorVariables from "./Colors";
import CurveVariables from "./Curves";
import PaceVariables from "./Paces";
import SpacingVariables from "./Spacings";
import TypographyVariables from "./Typography";
import ShadowVariables from "./Shadows";
import SectionTitle from "@components/Layout/Title/SectionTitle";

const MarkdownVariables = (props) => {
  const {} = props || {};

  return (
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
};

export default MarkdownVariables;
