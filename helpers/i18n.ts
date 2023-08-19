import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { FlatNamespace } from "i18next";
// import type { SSRConfig } from "next-i18next/dist/types/types";

type SSRConfig = UnPromise<ReturnType<typeof serverSideTranslations>>;

export default class I18nHelper {
  static async ssrT9n(
    locale?: string,
    ...namespaces: FlatNamespace[]
  ): Promise<Maybe<SSRConfig>> {
    let t9n;
    if (locale) {
      t9n = await serverSideTranslations(locale, ["common", ...namespaces]);
    }

    return t9n;
  }
}
