import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/Section";

const ProjectPoints = (props) => {
  const { points } = props;

  return (
    <Div mb="4">
      <SectionTitle icon="focus-center" title="projects.points" />
      {/* mx="-4" */}
      <Div Mw="100%">
        <Tree branches={points} branchesAccessor="points" defaultOpen />
      </Div>
    </Div>
  );
};

export default ProjectPoints;
