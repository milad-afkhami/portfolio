import Link from "@kits/Link";
import Icon from "@kits/Icon";
import type { FC } from "react";

const HeaderGithub: FC = () => (
  <Link
    outerLink
    height="100%"
    width="30px"
    flex={["center", "center"]}
    href="https://github.com/milad-afkhami/portfolio"
  >
    <Icon name="github" size="28px" />
  </Link>
);

export default HeaderGithub;
