import React from "react";
import { Div, Link } from "@kits";
import { ProfileNameSvg } from "./NameSvg";
import { ProfileAvatar } from "./Avatar";
import { ProfileJob } from "./Job";

export function Profile(props) {
  return (
    <Div
      // href="/about"
      // prefetch={false}
      flex={[, , "column-reverse"]}
      responsive={{ md: { css: { flexDirection: "row" } } }}
      width="100%"
      my="4"
    >
      <Div
        width="100%"
        flex={["center", , "column"]}
        responsive={{ md: { display: "block" } }}
      >
        <ProfileNameSvg />
        <ProfileJob />
      </Div>
      <ProfileAvatar />
    </Div>
  );
}
