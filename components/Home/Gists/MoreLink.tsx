import Div from "@kits/Div";
import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

const GistsMoreLink: FC = () => (
  <Div mt="2">
    <Link
      href="/gists"
      width="100%"
      height="3rem"
      flex={["center", "center"]}
      bg="bg-secondary-main"
      hoverBg="bg-secondary-hover"
      curve="sm"
    >
      <Text size="md" bold ns="home">
        gists.seeMore
      </Text>
    </Link>
  </Div>
);

export default GistsMoreLink;
