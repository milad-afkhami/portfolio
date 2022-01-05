import React from "react";
import { Div, Link, Text } from "@kits";
import { useMemo } from "@hooks";
import { FavouritesHelper } from "@helpers";
import { __capitalize } from "@utils";

export function FooterLinks(props) {
  const favouritesLinks = useMemo(FavouritesHelper.getLinks, []);

  return (
    <Div flex={["start", "start", "row"]} mx="-3">
      {favouritesLinks.map(({ links, group }, i) => (
        <Div key={i} flex={["start", "start", "column"]} mx="3" mb="3">
          <Div mb="4">
            <Text size="md-b">{`layout.footer.favourite${__capitalize(
              group
            )}s`}</Text>
          </Div>
          {links.map(({ label, link }, i) => (
            <Link href={link} mb="3" key={i}>
              <Text
                hoverColor="text-secondary"
                size="sm-b"
              >{`layout.footer.${label}`}</Text>
            </Link>
          ))}
        </Div>
      ))}
    </Div>
  );
}
