import { useTranslation as i18nextUseTranslation } from "react-i18next";
interface UseTranslationOptions {
  ns?: string;
  variables?: object;
}

export const useTranslation = (
  path: string | Array<string>,
  options: UseTranslationOptions
) => {
  const { ns, variables = {} } = options || {};
  return i18nextUseTranslation(ns || "common").t(path, { ...variables });
};
