import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const ProjectDescription: FC<Pick<IProject, "slug">> = (props) => {
  const { slug } = props;

  return (
    <Div mb="3">
      <Text size="lg">{`projects.${slug}.description`}</Text>
      {/* /{" "}<Text size="md-b" as="time" css={{ textDecoration: "underline" }}>{`${props.date}`}</Text> */}
    </Div>
  );
};

export default ProjectDescription;
