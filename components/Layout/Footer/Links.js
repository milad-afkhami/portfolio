import React from "react";
import { Div, Link, Text } from "@kits";
import { useMemo } from "@hooks";
import { LayoutHelper } from "@helpers";

export function FooterLinks(props) {
  const footerLinks = useMemo(LayoutHelper.getFooterLinks, []);

  return (
    <Div flex={["start", "start", "row"]} mx="-3">
      {footerLinks.map(({ links, group }) => (
        <Div key={group} flex={["start", "start", "column"]} mx="3" mb="3">
          <Div mb="4">
            <Text size="md-b">{`layout.footer.${group}`}</Text>
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
