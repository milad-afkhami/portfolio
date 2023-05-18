import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const ProfileJob: FC = () => (
  <Div>
    <Div
      mb="3"
      css={{ textAlign: "center" }}
      responsive={{ md: { css: { textAlign: "start" } } }}
    >
      <Text size="lg-b" as="h2">
        home.profile.job
      </Text>
    </Div>
    <Div
      css={{ textAlign: "center" }}
      responsive={{
        md: { css: { textAlign: "start", "*": { whiteSpace: "pre-line" } } },
      }}
    >
      <Text size="lg" color="text-secondary" as="p" lineHeight="2" Mw="600px">
        home.profile.jobDescription
      </Text>
    </Div>
  </Div>
);

export default ProfileJob;
