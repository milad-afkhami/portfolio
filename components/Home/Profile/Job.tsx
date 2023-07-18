import { Div } from "style-wiz";
import Text from "@kits/Text";
import { styled } from "goober";
import { responsiveUpperBoundBreakpointValue } from "@configs/general";
import type { FC } from "react";

const ProfileJobWrapper = styled("div")`
  * {
    text-align: center;
  }
  @media (min-width: ${responsiveUpperBoundBreakpointValue}) {
    * {
      text-align: start;
    }
  }
`;

const ProfileJob: FC = () => (
  <ProfileJobWrapper>
    <Div mb="3">
      <Text ns="home" size="lg" bold as="h2">
        profile.job
      </Text>
    </Div>
    <Div Mw="700px">
      <Text
        ns="home"
        size="lg"
        color="text-secondary-main"
        as="p"
        styles={{ lineHeight: 2 }}
      >
        profile.jobDescription
      </Text>
    </Div>
  </ProfileJobWrapper>
);

export default ProfileJob;
