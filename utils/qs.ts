import * as qs from "query-string";

export class QS {
  /**
   * @param {*} params Stringify an object into a query string and sort the keys.
   * @returns
   */
  static stringify = (params) => qs.stringify(params);

  /**
   * @param {*} params Parse a query string into an object.
   * @returns
   */
  static parse = (params) => qs.parse(params);

  static set = () => {};
}
