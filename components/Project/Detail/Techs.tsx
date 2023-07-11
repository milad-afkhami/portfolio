import Div from "@kits/Div";
import Chips from "@kits/Chips";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

type ProjectTechsProps = Pick<IProject, "techs">;

const ProjectTechs: FC<ProjectTechsProps> = (props) => {
  const { techs } = props;

  return (
    <div>
      <SectionTitle icon="tools" title="tools" ns="projects" />
      <Div my="3">
        <Chips items={techs.map(({ name, link }) => ({ label: name, link }))} />
      </Div>
    </div>
  );
};

export default ProjectTechs;
