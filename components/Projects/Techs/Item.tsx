import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

type ProjectTechProps = ValueOf<IProject["techs"]> & { compact?: boolean };

const ProjectTech: FC<ProjectTechProps> = (props) => {
  const { name, link, compact } = props;

  return (
    <Link
      outerLink
      href={link}
      bg="brand"
      hoverBg="brand-hover"
      px={compact ? 1 : 2}
      curve="xsm"
      display="flex"
    >
      <Text size={compact ? "xsm" : "md-b"} color="bg-primary">
        {name}
      </Text>
    </Link>
  );
};

export default ProjectTech;
