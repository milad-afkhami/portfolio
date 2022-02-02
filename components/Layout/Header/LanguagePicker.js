import React from "react";
import { useRouter, useMemo, useEnhancedToast } from "@hooks";
import { Div, DropDown } from "@kits";
import { languages as languagesList } from "@constants";
import { __map } from "@utils";
import { LanguageHelper } from "@helpers";

export function HeaderChangeLanguage(props) {
  const {} = props || {};

  const router = useRouter();
  const toast = useEnhancedToast();

  const onChangeLanguage = (id) =>
    LanguageHelper.changeLanguage(id).then(() =>
      toast("error.sorryTranslation", { type: "info" })
    );

  const dropDownItems = useMemo(
    () =>
      __map(languagesList, (lang) => ({
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
}
