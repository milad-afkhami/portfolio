import React from "react";
import { Div, Icon } from "@kits";

export function HeaderGithub(props) {
  const {} = props || {};

  return (
    <Div
      as="a"
      height="2.5rem"
      flex={["center", "center"]}
      href="https://github.com/miladMAPS/portfolio"
      target="blank"
    >
      <Icon name="github" size="28px" />
    </Div>
  );
}
