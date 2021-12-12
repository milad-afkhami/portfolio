import React from "react";
import { Div } from "@kits";
import { HeaderMenuItem } from "./Item";

export function HeaderMenus(props) {
  return (
    <Div display="flex" mx="-3">
      <HeaderMenuItem link="/" label="home" />
      <HeaderMenuItem link="/courses" label="courses" />
      <HeaderMenuItem link="/blog" label="blog" />
      <HeaderMenuItem link="/packages" label="packages" />
      <HeaderMenuItem link="/projects" label="projects" />
      <HeaderMenuItem link="/favourites" label="favourites" />
      <HeaderMenuItem link="/gists" label="gists" />
    </Div>
  );
}
