import { useMemo } from "react";
import { useRouter } from "next/router";
import useEnhancedToast from "@hooks/useEnhancedState";
import Div from "@kits/Div";
import DropDown from "@kits/DropDown";
import languages from "@constants/languages";
import __map from "lodash-es/map";
import LanguageHelper from "@helpers/language";

const HeaderChangeLanguage = (props) => {
  const router = useRouter();
  const toast = useEnhancedToast();

  const onChangeLanguage = (id) =>
    LanguageHelper.changeLanguage(id).then(() => {
      if (id !== "en") return toast("error.sorryTranslation", { type: "info" });
    });

  const dropDownItems = useMemo(
    () =>
      __map(languages, (lang) => ({
        text: lang.displayName,
        image: lang.flag,
        id: lang.name,
      })),
    []
  );

  return (
    <Div>
      <DropDown
        items={dropDownItems}
        selected={router.locale}
        onChange={onChangeLanguage}
      />
    </Div>
  );
};

export default HeaderChangeLanguage;