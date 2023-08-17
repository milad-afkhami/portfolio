import { Div } from "style-wiz";
import Chips from "@kits/Chips";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

type ProjectDetailTechsProps = Pick<IProject, "techs">;

const ProjectDetailTechs: FC<ProjectDetailTechsProps> = (props) => {
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

export default ProjectDetailTechs;
