import { useTranslation as useNINTranslation } from "next-i18next";
import type { KeyPrefix } from "i18next";
import type {
  UseTranslationOptions,
  UseTranslationResponse,
} from "react-i18next";

/**
 * @extends useNINTranslation
 *
 * Custom useTranslation hook
 * which extends a hook with same name from
 * [next-i18next](https://www.npmjs.com/package/next-i18next)
 * and enhances it with some additional functionalities.
 *
 * This solution is according to [Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
 * which future-proves our code against upcoming challenges.
 *
 * For now added functionalities are:
 * * Being more precise about static typing of namespaces
 */
function useTranslation<T extends I18NNameSpaces>(
  ns: I18NNameSpaces = "common",
  options?: UseTranslationOptions<KeyPrefix<I18NNameSpaces>> // Parameters<typeof useNINTranslation>[1]
): UseTranslationResponse<T> {
  return useNINTranslation(ns, options);
}

export default useTranslation;
