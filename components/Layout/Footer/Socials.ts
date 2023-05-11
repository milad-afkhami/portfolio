import React from "react";
import { Div, Icon, Link, Text } from "@kits";
import { __map } from "@utils";

export function FooterSocials(props) {
  const socials = {
    instagram: { name: "instagram", icon: "instagram", link: "instagram.com" },
    twitter: { name: "twitter", icon: "twitter", link: "twitter.com" },
    linkedIn: { name: "linkedIn", icon: "linkdin", link: "linkedIn.com" },
    youtube: { name: "youtube", icon: "youtube", link: "youtube.com" },
  };

  return (
    <Div row flex={["center"]}>
      {__map(socials, ({ name, icon, link }, social) => (
        <Div mx="3" flex={["center", "center"]} key={social}>
          <Icon
            name={icon}
            size="20"
            color="text-secondary"
            hoverColor="brand"
          />
        </Div>
      ))}
    </Div>
  );
}
