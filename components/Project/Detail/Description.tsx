import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const ProjectDescription: FC<Pick<IProject, "slug">> = (props) => {
  const { slug } = props;

  return (
    <Div mb="3">
      <Text size="lg" ns="projects">{`${slug}.description`}</Text>
      {/* /{" "}<Text size="md" bold as="time" styles={{ textDecoration: "underline" }}>{`${props.date}`}</Text> */}
    </Div>
  );
};

export default ProjectDescription;
