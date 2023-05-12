import Div from "@kits/Div";
import Text from "@kits/Text";
import SectionTitle from "@components/Layout/Title/SectionTitle";

const resumeSkills = [
  { name: "JavaScript / TypeScript" },
  { name: "CSS" },
  { name: "React" },
  { name: "Next.js" },
];

const ResumeSkills = () => {
  return (
    <Div>
      <SectionTitle title="resume.skills.title" icon="focus-center" />
      <Div
        flex={["center", "start", , "wrap"]}
        css={{ gap: "var(--spacing-2)" }}
        mb={3}
      >
        {resumeSkills.map(({ name }) => (
          <Div bg="assistive-info" px={2} curve="xsm" display="flex">
            <Text size="md-b" color="bg-primary">
              {name}
            </Text>
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default ResumeSkills;
