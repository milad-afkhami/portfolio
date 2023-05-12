import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import paces from "@stylesheets/constants/paces";

const PaceVariables = (props) => {
  return (
    <Div id="paces" my="3">
      <SectionTitle title="markdown.variables.paces" tag="h4" />
      <Tree branches={Object.keys(paces)} defaultOpen={false} />
    </Div>
  );
};

export default PaceVariables;
