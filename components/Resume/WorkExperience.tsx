import Div from "@kits/Div";
import Text from "@kits/Text";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import { workExperienceTimelineSections } from "@config";
import { ResumeReference } from "./Reference";

const ResumeWorkExperience = () => {
  return (
    <Div mb="5">
      <SectionTitle title="about.workExperience.title" icon="suitcase" />
      <ResumeReference
        i18nKey="resume.workExperience.message"
        link="cutt.ly/work-experience"
        route="/about#work-experience"
      />
      <Div>
        {workExperienceTimelineSections.map((exp) => (
          <Div my="3">
            <Div>
              <Text
                size="md"
                color="text-secondary"
              >{`${exp.items[0]}_desc`}</Text>
            </Div>
            <Div>
              <Text size="md-b">{exp.items[0]}</Text>
            </Div>
            <Div>
              <Text size="sm" color="text-secondary">
                {exp.year}
              </Text>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default ResumeWorkExperience;
