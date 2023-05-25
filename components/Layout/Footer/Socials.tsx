// @ts-nocheck
import Div from "@kits/Div";
import Link from "@kits/Link";
import Icon from "@kits/Icon";
import __map from "lodash-es/map";
import type IconProps from "@kits/Icon/props";
import type { FC } from "react";

const FooterSocials: FC = () => {
  const socials: Dictionary<{
    name: string;
    icon: IconProps["name"];
    link: string;
  }> = {
    instagram: { name: "instagram", icon: "instagram", link: "instagram.com" },
    twitter: { name: "twitter", icon: "twitter", link: "twitter.com" },
    linkedIn: { name: "linkedIn", icon: "linkedin", link: "linkedIn.com" },
    youtube: { name: "youtube", icon: "youtube", link: "youtube.com" },
  };

  return (
    <Div flex={["center"]}>
      {__map(socials, ({ name, icon, link }, social) => (
        <Link key={social} href={link} mx="3" flex={["center", "center"]}>
          <Icon
            title={name}
            name={icon}
            size="20"
            color="text-secondary-main"
            hoverColor="brand-main"
          />
        </Link>
      ))}
    </Div>
  );
};

export default FooterSocials;
