import { Div } from "style-wiz";
import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

const ProjectCardsMoreLink: FC = () => (
  <Div mt="2">
    <Link
      href="/projects"
      width="100%"
      height="3rem"
      flex={["center", "center"]}
      bg="bg-secondary-main"
      hoverBg="bg-secondary-hover"
      curve="sm"
    >
      <Text size="md" bold ns="home">
        projects.seeMore
      </Text>
    </Link>
  </Div>
);

export default ProjectCardsMoreLink;
