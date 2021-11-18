import { faDigitsDict } from "@constants";

export class FaHelper {
  static toPersianNumber = (str = "") =>
    `${str}`.replace(/[0-9]/g, (v) => faDigitsDict[v] || v);
}
