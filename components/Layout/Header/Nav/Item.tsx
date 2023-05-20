import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

const HeaderMenuItem: FC<INavItem> = (props) => {
  const { link, onClick, label } = props;

  return (
    <Link
      href={link}
      m="3 0"
      responsive={{ md: { m: "0 3" } }}
      onClick={onClick}
      display="flex"
      zoomOnHover
    >
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
