import { Div } from "style-wiz";
import ProfileJob from "./Job";
import ProfileAvatar from "./Avatar";
import ProfileNameSvg from "./NameSvg";
import responsiveStyles from "@helpers/responsiveStyles";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";

const Profile: FC = () => (
  <Div
    // href="/about"
    // prefetch={false}
    flex={[, , "column-reverse"]}
    styles={responsiveStyles(responsiveUpperBoundBreakpoint, {
      flexDirection: "row",
    })}
    width="100%"
    my="4"
  >
    <Div
      width="100%"
      flex={["center", , "column"]}
      styles={responsiveStyles(responsiveUpperBoundBreakpoint, {
        display: "block",
      })}
    >
      <ProfileNameSvg />
      <ProfileJob />
    </Div>
    <ProfileAvatar />
  </Div>
);

export default Profile;
