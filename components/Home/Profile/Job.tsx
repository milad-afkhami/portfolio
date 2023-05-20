import Div from "@kits/Div";
import Text from "@kits/Text";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";

const ProfileJob: FC = () => (
  <Div>
    <Div
      mb="3"
      css={{ textAlign: "center" }}
      responsive={{
        [responsiveUpperBoundBreakpoint]: { css: { textAlign: "start" } },
      }}
    >
      <Text ns="home" size="lg" bold as="h2">
        profile.job
      </Text>
    </Div>
    <Div
      Mw="600px"
      css={{ textAlign: "center" }}
      responsive={{
        [responsiveUpperBoundBreakpoint]: {
          css: { textAlign: "start", "*": { whiteSpace: "pre-line" } },
        },
      }}
    >
      <Text
        ns="home"
        size="lg"
        color="text-secondary-main"
        as="p"
        lineHeight="2"
      >
        profile.jobDescription
      </Text>
    </Div>
  </Div>
);

export default ProfileJob;
