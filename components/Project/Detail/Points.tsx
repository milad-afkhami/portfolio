import { Div } from "style-wiz";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

const ProjectDetailPoints: FC<Required<Pick<IProject, "points">>> = (props) => {
  const { points } = props;

  return (
    <Div mb="4">
      <SectionTitle icon="focus-center" title="points" ns="projects" />
      {/* mx="-4" */}
      <Div Mw="100%">
        <Tree ns="projects" branches={points} defaultOpen />
      </Div>
    </Div>
  );
};

export default ProjectDetailPoints;
