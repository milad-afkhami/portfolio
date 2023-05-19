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
        hoverColor="text-secondary-main"
      </Text>
    </Link>
  );
};

export default HeaderMenuItem;
