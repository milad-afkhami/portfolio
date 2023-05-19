import Div from "@kits/Div";
import Image from "@kits/Image";
import { logoLg } from "@images";
import type { FC } from "react";

const ProfileAvatar: FC = () => (
  <Div flex={[, "center"]}>
    <Div
      width="11rem"
      height="11rem"
      curve="circle"
      bg="brand-main"
      position="relative"
      overflow="hidden"
      mb="3"
    >
      <Image src={logoLg} layout="fill" fit="cover" maximizable />
    </Div>
  </Div>
);

export default ProfileAvatar;
