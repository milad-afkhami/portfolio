import Div from "@kits/Div";
import Text from "@kits/Text";

const ProjectDescription = (props) => {
  const { slug } = props || {};

  return (
    <Div mb="3">
      <Text size="lg">{`projects.${slug}.description`}</Text>
      {/* /{" "}<Text size="md-b" tag="time" css={{ textDecoration: "underline" }}>{`${props.date}`}</Text> */}
    </Div>
  );
};

export default ProjectDescription;
