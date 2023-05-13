import Div from "@kits/Div";
import SectionTitle from "@components/Layout/Title/Section";
import { ResumeLanguageItem } from "./Item";

const resumeLanguages = [
  { name: "Persian", proficiency: "5" },
  { name: "English", proficiency: "3" },
];

const ResumeLanguages = () => {
  return (
    <Div mb="5">
      <SectionTitle title="resume.languages.title" icon="earth" />
      {resumeLanguages.map((lang) => (
        <ResumeLanguageItem {...lang} />
      ))}
    </Div>
  );
};

export default ResumeLanguages;
