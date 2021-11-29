import React from "react";
import { Div, Link, Text } from "@kits";
import { FooterLinks } from "./Links";
import { FooterSocials } from "./Socials";

export function Footer(props) {
  return (
    <Div py="4" mw="100%">
      <Div mt="5" row>
        <Div col={{ xs: 12, lg: 8 }}>
          <FooterLinks />
        </Div>
        <Div col={{ xs: 12, lg: 4 }}>
          <Div flex={["end", , "column"]}>
            <FooterSocials />
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
