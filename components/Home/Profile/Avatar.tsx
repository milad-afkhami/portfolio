import { Div } from "style-wiz";
import Image from "@kits/Image";
import { useTranslation } from "next-i18next";
import { logoLg } from "@images";
import type { FC } from "react";

const ProfileAvatar: FC = () => {
  const [t] = useTranslation();

  return (
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
        <Image src={logoLg} layout="fill" fit="cover" alt={t("app.title")} />
      </Div>
    </Div>
  );
};

export default ProfileAvatar;
