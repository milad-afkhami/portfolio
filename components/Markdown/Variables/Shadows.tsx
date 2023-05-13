import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/Section";
import shadows from "@stylesheets/constants/shadows";

const ShadowVariables = (props) => {
  return (
    <Div id="shadows" my="3">
      <SectionTitle title="markdown.variables.shadows" tag="h4" />
      <Tree branches={Object.keys(shadows)} defaultOpen={false} />
    </Div>
  );
};

export default ShadowVariables;
