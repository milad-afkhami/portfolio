import { Div } from "style-wiz";
import Image from "@kits/Image";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

const AboutAvatar: FC = () => {
  const [t] = useTranslation();

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
        <Image
          src="/images/avatar.jpg"
          placeholder="blur"
          blurDataURL="/images/avatar.jpg"
          layout="fill"
          fit="cover"
          alt={t("app.name")}
        />
      </Div>
    </Div>
  );
};

export default AboutAvatar;
