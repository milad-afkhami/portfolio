import Div from "@kits/Div";
import Link from "@kits/Link";
import { ProfileNameSvg } from "./NameSvg";
import { ProfileAvatar } from "./Avatar";
import { ProfileJob } from "./Job";


const Profile = (props) => {
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




            
                
            
            
            
            export default Profile;