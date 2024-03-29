import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";
import type { INavItem } from "@_types/layout";

const HeaderMenuItem: FC<INavItem> = (props) => {
  const { link, onClick, label } = props;

  return (
    <Link href={link} onClick={onClick} display="flex">
      <Text
        ns="layout"
        size="md"
        bold
        as="p"
        hoverColor="text-secondary-main"
        truncate
      >
        {`header.menu.${label}`}
      </Text>
    </Link>
  );
};

export default HeaderMenuItem;
