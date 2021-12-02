import React from "react";
import { useState, useEffect, useMemo } from "@hooks";
import { Div, DropDown } from "@kits";
import { languages as languagesList } from "@constants";
import { __map } from "@utils";

export function HeaderChangeLanguage(props) {
  const { initialSelectedLanguage } = props || {};

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    initialSelectedLanguage && setSelectedLanguage(initialSelectedLanguage);
  }, [initialSelectedLanguage]);

  const onChangeLanguage = () => {};

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
      <DropDown items={dropDownItems} selected={selectedLanguage} />
    </Div>
  );
}
