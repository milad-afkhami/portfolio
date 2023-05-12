import Div from "@kits/Div";
import Image from "@kits/Image";
import { logoLg } from "@images";

const ProfileAvatar = (props) => {
  return (
    <Div flex={[, "center"]}>
      <Div
        width="11rem"
        height="11rem"
        curve="circle"
        bg="brand"
        position="relative"
        overflow="hidden"
        mb="3"
      >
        <Image src={logoLg} layout="fill" fit="cover" maximizable />
      </Div>
    </Div>
  );
};

export default ProfileAvatar;
