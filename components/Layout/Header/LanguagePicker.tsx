import { useMemo } from "react";
import DropDown from "@kits/DropDown";
import { If, Then } from "@kits/ConditionalRendering";
import { useRouter } from "next/router";
import __map from "lodash-es/map";
import LanguageHelper from "@helpers/language";
import { languages, defaultLanguage } from "@configs/languages";
import type { FC } from "react";
import type { DropDownItemProps } from "@kits/DropDown/Item";

const HeaderChangeLanguage: FC = () => {
  const router = useRouter();

  const onChangeLanguage = (id: Languages) => {
    LanguageHelper.changeLanguage(id);
    // if (id !== "en") toastUtil.info("error.sorryTranslation");
  };

  const dropDownItems = useMemo(
    () =>
      __map(
        languages,
        (lang) =>
          ({
            label: lang.displayName,
            image: lang.flag,
            id: lang.name,
          } as DropDownItemProps)
      ),
    []
  );

  const canChangeLanguage = useMemo(
    () => Object.keys(languages).length > 1,
    []
  );

  return (
    <If condition={canChangeLanguage}>
      <Then>
        <DropDown
          items={dropDownItems}
          selected={router.locale ?? defaultLanguage}
          onChange={(id) => onChangeLanguage(id as Languages)}
        />
      </Then>
    </If>
  );
};

export default HeaderChangeLanguage;
