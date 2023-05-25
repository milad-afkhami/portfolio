import Div from "@kits/Div";
import Image from "@kits/Image";
import useTranslation from "@hooks/useTranslation";
import type { FC } from "react";

interface AboutAvatarProps {
  static?: boolean;
}

const AboutAvatar: FC<AboutAvatarProps> = (props) => {
  const { t } = useTranslation();

  return (
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
          <Image src="/images/avatar.jpg" alt={t("app.name")} />
        ) : (
          <Image
            src="/images/avatar.jpg"
            placeholder="blur"
            blurDataURL="/images/avatar.jpg"
            layout="fill"
            fit="cover"
            alt={t("app.name")}
          />
        )}
      </Div>
    </Div>
  );
};

export default AboutAvatar;
