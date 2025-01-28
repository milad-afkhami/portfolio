import { Div } from "style-wiz";
import { useMemo } from "react";
import Image from "@kits/Image";
import { Button, Menu } from "ui-wiz";
import { useRouter } from "next/router";
import useToggle from "@hooks/useToggle";
import LanguageHelper from "@helpers/language";
import { languages, defaultLanguage } from "@configs/languages";
import type { FC } from "react";

const HeaderChangeLanguage: FC = () => {
  const router = useRouter();
  const [isOpen, toggle] = useToggle(false);

  const onChangeLanguage = (id: Languages) => {
    LanguageHelper.changeLanguage(id);
    // if (id !== "en") toastUtil.info("error.sorryTranslation");
  };

  const canChangeLanguage = useMemo(
    () => Object.keys(languages).length > 1,
    []
  );

  const currentLanguage =
    languages[(router.locale ?? defaultLanguage) as Languages];

  if (!canChangeLanguage) return null;

  return (
    <Div position="relative">
      <Button
        onClick={toggle}
        text={currentLanguage.fullName}
        // @ts-expect-error
        icon={
          <Image
            src={currentLanguage.flag}
            width={20}
            height={20}
            quality={1}
            alt={currentLanguage.fullName}
          />
        }
      />
      <Menu
        isOpen={isOpen}
        handleClose={toggle}
        items={Object.values(languages).map(({ fullName }) => ({
          content: fullName,
          value: fullName,
        }))}
        onClickItem={(id) => onChangeLanguage(id as Languages)}
      />
    </Div>
  );
};

export default HeaderChangeLanguage;
