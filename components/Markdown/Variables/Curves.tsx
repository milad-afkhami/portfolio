import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import curves from "@stylesheets/constants/curves";

const CurveVariables = (props) => {
  return (
    <Div id="curves" my="3">
      <SectionTitle title="markdown.variables.curves" tag="h4" />
      <Tree branches={Object.keys(curves)} />
    </Div>
  );
};



            
                
            
            
            
            export default CurveVariables;