import React from "react";
import { Div, Link, Text } from "@kits";
import { FooterLinks } from "./Links";
import { FooterSocials } from "./Socials";

export function Footer(props) {
  return (
    <Div pt="3" container>
      <Div mt="5" row>
        <Div col={{ xs: 12, lg: 6 }}>
          <FooterLinks />
        </Div>
        <Div col={{ xs: 12, lg: 6 }}>
          <Div flex={["end", , "column"]}>
            <FooterSocials />
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
