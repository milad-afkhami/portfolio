import React from "react";
import { Div, Icon, Image, Text } from "@kits";
import { NameSvg } from "./NameSvg";
import { logoLg } from "@images";

export function ResumeProfile(props) {
  const {} = props || {};
  return (
    <Div flex width="100%" my="4">
      <Div width="100%">
        {/* <Div mb="2">
          <Text size="h-lg-b" tag="h1">
            resume.profile.name
          </Text>
        </Div> */}
        <NameSvg />
        <Div mb="3">
          <Text size="md" tag="h2">
            resume.profile.job
          </Text>
        </Div>
        <Div>
          <Text
            size="md"
            color="text-secondary"
            tag="h3"
            css={{ whiteSpace: "pre-line", lineHeight: 2 }}
            Mw="600px"
          >
            resume.profile.jobDescription
          </Text>
        </Div>
      </Div>
      <Div>
        <Div
          width="11rem"
          height="11rem"
          curve="circle"
          bg="brand"
          position="relative"
          overflow="hidden"
        >
          <Image src={logoLg} layout="fill" fit="cover" />
        </Div>
      </Div>
    </Div>
  );
}
