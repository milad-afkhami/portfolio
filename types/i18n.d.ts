type I18NNameSpaces = "common" | "layout";

type Languages = "en"; // | "de" | "fr";

type LanguageConfig = {
  id: number;
  /** @deprecated */
  name: Languages;
  fullName: string;
  displayName: string;
  flag: string;
  direction: "rtl" | "ltr";
  font: string;
};

// declare module "next-i18next" {
//   import NextI18n, { useTranslation } from "next-i18next";
//   interface I18n extends NextI18n {
//     languages: Array<Languages>;
//     language: Languages;
//   }
//   export { useTranslation };
//   export default I18n;
// }
