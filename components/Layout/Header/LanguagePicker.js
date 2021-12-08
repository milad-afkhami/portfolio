import React from "react";
import { useState, useEffect, useMemo } from "@hooks";
import { Div, DropDown } from "@kits";
import { languages as languagesList } from "@constants";
import { __map } from "@utils";
import i18n from "@i18n";

export function HeaderChangeLanguage(props) {
  const { initialSelectedLanguage } = props || {};

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    initialSelectedLanguage && setSelectedLanguage(initialSelectedLanguage);
  }, [initialSelectedLanguage]);

  const onChangeLanguage = (id) => {
    console.log({ id });
    setSelectedLanguage(id);
    i18n.changeLanguage(id);
  };

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
        selected={selectedLanguage}
        onChange={onChangeLanguage}
      />
    </Div>
  );
}
