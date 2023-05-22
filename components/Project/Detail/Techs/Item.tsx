import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

type ProjectTechProps = ValueOf<IProject["techs"]>;

const ProjectTech: FC<ProjectTechProps> = (props) => {
  const { name, link } = props;

  return (
    <Link
      outerLink
      href={link}
      bg="brand-main"
      hoverBg="brand-hover"
      px="2"
      curve="xsm"
      display="flex"
    >
      <Text size="md" bold color="bg-primary-main">
        {name}
      </Text>
    </Link>
  );
};

export default ProjectTech;
