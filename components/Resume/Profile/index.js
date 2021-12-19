import React from "react";
import { Div } from "@kits";
import { NameSvg } from "./NameSvg";
import { ResumeProfileAvatar } from "./Avatar";
import { ResumeProfileJob } from "./Job";

export function ResumeProfile(props) {
  return (
    <Div
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
        <NameSvg />
        <ResumeProfileJob />
      </Div>
      <ResumeProfileAvatar />
    </Div>
  );
}
