import { parseCookies, setCookie, destroyCookie } from "nookies";
import Intervals from "@constants/interval";
import type { NextPageContext } from "next";

type GetCookieMethod = (
  name: string,
  ...rest: Parameters<typeof parseCookies>
) => string;
type SetCookieMethod = (...args: Parameters<typeof setCookie>) => void;
type RemoveCookieMethod = (
  key: string,
  ctx: Nullable<NextPageContext>,
  options: Parameters<typeof destroyCookie>[2]
) => void;

export default class Cookies {
  /**
   * Parses cookies.
   * @param name Name of the cookie
   * @param ctx NextJS page or API context, express context, null or undefined.
   * @param options Options that we pass down to `cookie` library.
   */
  static get: GetCookieMethod = (name, ctx, options) =>
    parseCookies(ctx || null, options)[name];

  /**
   * Sets a cookie.
   * @param ctx NextJS page or API context, express context, null or undefined
   * @param name Name of the cookie
   * @param value The value of your cookie
   * @param options Options that we pass down to `nookies` library
   */
  static set: SetCookieMethod = (ctx, name, value, options = {}) =>
    setCookie(ctx, name, value, {
      maxAge: Intervals.Month,
      path: "/",
      ...options,
    });

  /**
   * Removes a cookie.
   * @param key The key of your cookie
   * @param ctx NextJS page or API context, express context, null or undefined
   * @param options Options that we pass down to `nookies` library
   */

  static remove: RemoveCookieMethod = (key, ctx, options = { path: "/" }) =>
    destroyCookie(ctx, key, options);

  /**
   * Indirectly check to see if an http cookie exists,
   * we can reach this by trying to set it to a value with javascript
   * if it can't be set, then the HTTP Only Cookie must be there (or the user is blocking cookies).
   */
  static httpCookieExist = (cookieName: string) => {
    var date = new Date();
    date.setTime(date.getTime() + 1000);
    var expires = "expires=" + date.toUTCString();

    document.cookie = cookieName + "=new_value;path=/;" + expires;
    if (document.cookie.indexOf(cookieName + "=") == -1) return true;
    else return false;
  };
}
