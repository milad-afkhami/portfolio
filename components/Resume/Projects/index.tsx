import Div from "@kits/Div";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import { projectsData } from "@data";
import { ResumeProjectsItem } from "./Item";
import { ResumeReference } from "../Reference";

const ResumeProjects = () => {
  return (
    <Div mb="5">
      <SectionTitle title="projects.title" icon="code" />
      <ResumeReference
        i18nKey="resume.projects.message"
        link="cutt.ly/my-projects"
        route="/projects"
      />
      <Div>
        {projectsData.slice(0, 3).map(({ slug, ...data }) => (
          <ResumeProjectsItem
            {...data}
            name={`projects.${slug}.name`}
            description={`projects.${slug}.description`}
          />
        ))}
        <ResumeProjectsItem name="..." description="..." />
      </Div>
    </Div>
  );
};

export default ResumeProjects;
