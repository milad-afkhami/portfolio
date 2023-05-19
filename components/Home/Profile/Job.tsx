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
        color="text-secondary-main"
      </Text>
    </Div>
  </Div>
);

export default ProfileJob;
