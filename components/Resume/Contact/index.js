import React from "react";
import { Div, Icon, Text } from "@kits";
import { ResumeContactOption } from "./Option";

export function ResumeContact(props) {
  const {} = props || {};

  return (
    <Div flex={["center", "around"]}>
      <ResumeContactOption type="email" value="milad@gmail.com" />
      <ResumeContactOption type="phone" value="+98 939 284 0749" />
      <ResumeContactOption type="email" value="milad@gmail.com" />
      <ResumeContactOption type="phone" value="+98 939 284 0749" />
      <ResumeContactOption type="email" value="milad@gmail.com" />
      {/* <ResumeContactOption type="telegram" value="t.me/mrs2i" /> */}
    </Div>
  );
}
