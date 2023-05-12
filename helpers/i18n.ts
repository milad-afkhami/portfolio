import { currentPlatform } from "@configs/platforms";

export default class I18nHelper {
  /** concatenates platform suffix to namespace name
   * @example
   * concatenateNamespace("common");
   * // => common.VIRTIN
   */
  static concatenateNamespace(ns: I18NNameSpaces = "common") {
    return ns.concat(".", currentPlatform);
  }
}
