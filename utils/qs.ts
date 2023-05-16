import {
  stringify,
  stringifyUrl,
  parse,
  exclude,
  type ParseOptions,
} from "query-string";

type StringifyQSMethod = typeof stringify;
type StringifyUrlQSMethod = typeof stringifyUrl;
type ParseQSMethod = (
  params: Parameters<typeof parse>[0],
  options: ParseOptions
) => void;
type SetQSMethod = (uri: string, key: string, value: string) => string;

class QS {
  /**
   * @param params Stringify an object into a query string and sort the keys
   */
  static stringify: StringifyQSMethod = (params, options) =>
    stringify(params, options);

  /**
   * @param params Stringify an object into a URL with a query string and sorting the keys.
   */
  static stringifyUrl: StringifyUrlQSMethod = (params, options) =>
    stringifyUrl(params, options);

  /**
   * @param params Parse a query string into an object
   */
  static parse: ParseQSMethod = (params, options) => parse(params, options);

  /**
   * Adds or updates a query inside a url
   *
   * {@link https://stackoverflow.com/a/6021027/12322965|stackoverflow}
   */
  static set: SetQSMethod = (uri, key, value) => {
    const re = new RegExp(`([?&])${key}"=.*?(&|$)`, "i");

    /** add `&` if there is already some query parameters and `?` if there isn't any. */
    const separator = uri.indexOf("?") !== -1 ? "&" : "?";

    if (uri.match(re)) return uri.replace(re, `$1${key}=${value}$2`);

    return `${uri}${separator}${key}=${value}`;
  };

  /**
   * Exclude query parameters from a url.
   *
   * {@link https://github.com/sindresorhus/query-string#excludeurl-keys-options|query-string}
   */
  static exclude: typeof exclude = exclude;
}

export default QS;
