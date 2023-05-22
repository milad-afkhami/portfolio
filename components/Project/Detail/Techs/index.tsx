import Div from "@kits/Div";
import ProjectTech from "./Item";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

type ProjectTechsProps = Pick<IProject, "techs">;

const ProjectTechs: FC<ProjectTechsProps> = (props) => {
  const { techs } = props;

  return (
    <Div>
      <SectionTitle icon="tools" title="tools" ns="projects" />
      <Div
        flex={["center", "start", , "wrap"]}
        css={{ gap: "var(--spacing-2)" }}
        my="4"
      >
        {techs.map((tech, i) => (
          <ProjectTech key={i} {...tech} />
        ))}
      </Div>
    </Div>
  );
};

export default ProjectTechs;
