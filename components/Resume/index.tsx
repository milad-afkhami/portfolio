import Div from "@kits/Div";
import ResumeHeader from "./Header";
import ResumeWorkExperience from "./WorkExperience";
import ResumeEducation from "./Education";
import ResumeProjects from "./Projects";
import ResumeSkills from "./Skills";
import ResumeLanguages from "./Languages";
import ResumeReference from "./Reference";
import { appBaseURL } from "@config";
// import { ResumeInterests } from "./Interests";

const Resume=()=> {
  return (
    <Div
      css={{
        "@page": {
          size: "auto",
          size: "A3",
          margin: "0mm",
          WebkitPrintColorAdjust: "exact",
        },
      }}
    >
      <ResumeHeader />
      <Div px="4" border="border-dark" borderSide="bottom">
        <ResumeReference i18nKey="resume.message" link={appBaseURL} route="/" />
      </Div>
      <Div width="100%" flex={["start"]} p="4">
        <Div width="100%">
          <ResumeWorkExperience />
          <ResumeEducation />
          <ResumeLanguages />
        </Div>
        <Div width="100%">
          <ResumeProjects />
          <ResumeSkills />
        </Div>
      </Div>
    </Div>
  );
}

            
                
            
            
            export default Resume