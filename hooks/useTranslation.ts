import { useTranslation as useNINTranslation } from "next-i18next";
import type { UseTranslationResponse } from "react-i18next";

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
  options?: Parameters<typeof useNINTranslation>[1]
): UseTranslationResponse<T> {
  return useNINTranslation(ns, {
    // nsMode: "fallback",
    ...(options || {}),
  });
}

export default useTranslation;

// type HookValue<T> = UseTranslationResponse<T>;
// type HookValue = Extract<ReturnType<typeof useNINTranslation>, Record<string, unknown>>;
// type HookValue = Exclude<ReturnType<typeof useNINTranslation>, Array<unknown>>;
// type HookValue = Pick<ReturnType<typeof useNINTranslation>, "t" | "i18n" | "ready">;
