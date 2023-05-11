import { isNullish, __omit } from "@utils";
import { useTranslation as useNextExportUseTranslation } from "next-export-i18n";

/**
 * @typedef {Object} TranslationOptions
 * @property {string} [defaultValue]
 *
 * @typedef {Object} HookOptions
 * @property {string} [keyPrefix]
 */

/**
 * A hook to enhance the weak translation hook from `next-export-i18n`
 * @param {HookOptions} props
 * @return {{ t: (key:string, options:TranslationOptions) => string }}
 */
export function useTranslation(props) {
  const t = useNextExportUseTranslation().t;
  return {
    t(key, options = {}) {
      // const countSuffix = options.count > 1 ? "_plural" : "";
      const _key = (props?.keyPrefix || "") + key;
      const value = t(_key, __omit(options, ["defaultValue"]));
      const notFound = value === _key;

      if (notFound && !isNullish(options.defaultValue)) {
        return options.defaultValue;
      }

      return value;
    },
  };
}
