import Link from "@kits/Link";
import Icon from "@kits/Icon";
import type { FC } from "react";

const HeaderGithub: FC = () => (
  <Link
    outerLink
    height="2.5rem"
    flex={["center", "center"]}
    href="https://github.com/miladMAPS/portfolio"
  >
    <Icon name="github" size="28px" />
  </Link>
);

export default HeaderGithub;
