type I18NNameSpaces =
  | "common"
  | "layout"
  | "home"
  | "projects"
  | "about"
  | "packages"
  | "favourites.common"
  | "favourites.playlists";

type Languages = "en"; // | "de" | "fr";

type LanguageConfig = Readonly<{
  id: number;
  name: Languages;
  fullName: string;
  displayName: string;
  flag: string;
  direction: "rtl" | "ltr";
  font?: string;
}>;

// declare module "next-i18next" {
//   import NextI18n, { useTranslation } from "next-i18next";
//   interface I18n extends NextI18n {
//     languages:Languages[];
//     language: Languages;
//   }
//   export { useTranslation };
// }
