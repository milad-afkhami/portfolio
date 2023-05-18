import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

const Logo: FC = () => (
  <Link href="/">
    <Text size="h-lg-b" as="h1">
      layout.header.defaultTitle
    </Text>
  </Link>
);

export default Logo;
