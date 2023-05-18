import Div from "@kits/Div";
import Image from "@kits/Image";
import type { FC } from "react";

interface AboutAvatarProps {
  static?: boolean;
}

const AboutAvatar: FC<AboutAvatarProps> = (props) => (
  <Div flex={[, "center"]}>
    <Div
      width="11rem"
      height="11rem"
      curve="circle"
      position="relative"
      overflow="hidden"
      mb="3"
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.static ? (
        <Div as="img" src="/images/avatar.jpg" matchParent />
      ) : (
        <Image
          src="/images/avatar.jpg"
          placeholder="blur"
          blurDataURL="/images/avatar.jpg"
          layout="fill"
          fit="cover"
          maximizable
        />
      )}
    </Div>
  </Div>
);

export default AboutAvatar;
