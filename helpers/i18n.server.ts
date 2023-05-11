import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import I18nHelper from "@helpers/i18n";
// import type { SSRConfig } from "next-i18next/dist/types/types";

type SSRConfig = UnPromise<ReturnType<typeof serverSideTranslations>>;

export default class I18nSSRHelper {
  static async t9n(
    locale?: string,
    ...namespaces: Array<I18NNameSpaces>
  ): Promise<Maybe<SSRConfig>> {
    let t9n;
    if (locale) {
      t9n = await serverSideTranslations(locale, [
        "common",
        ...namespaces.map(I18nHelper.concatenateNamespace),
      ]);
    }

    return t9n;
  }
}
