import Div from "@kits/Div";
import SectionTitle from "@components/Layout/Title/Section";
import { educationTimelineSections } from "@config";
import { ResumeEducationItem } from "./Item";

const ResumeEducation = () => {
  return (
    <Div mb="5">
      <SectionTitle title="about.education.title" icon="education" />
      <Div>
        {educationTimelineSections.map(({ year, items: [name] }) => (
          <ResumeEducationItem
            year={year}
            title={name}
            description={`${name}_desc`}
          />
        ))}
      </Div>
    </Div>
  );
};

export default ResumeEducation;
