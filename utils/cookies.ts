import __get from "lodash-es/get";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import INTERVALS from "@constants/interval";
import type { NextPageContext } from "next";

type GetCookieMethod = (
  name: string,
  ctx: Nullable<NextPageContext>,
  options?: Parameters<typeof parseCookies>[1]
) => string;
type SetCookieMethod = (
  name: string,
  value: string,
  ctx: Nullable<NextPageContext>,
  options?: Parameters<typeof setCookie>[3]
) => void;
type RemoveCookieMethod = (
  key: string,
  ctx: Nullable<NextPageContext>,
  options: Parameters<typeof destroyCookie>[2]
) => void;

export default class Cookies {
  /**
   * Parses cookies.
   */
  static get: GetCookieMethod = (name, ctx = null, options) =>
    parseCookies(ctx, options)[name];

  /**
   * Sets a cookie.
   * @param name The name of your cookie
   * @param value The value of your cookie
   * @param ctx NextJS page or API context, express context, null or undefined
   * @param options Options that we pass down to `nookies` library
   */
  static set: SetCookieMethod = (name, value, ctx, options = {}) =>
    setCookie(ctx, name, value, {
      maxAge: INTERVALS.Month,
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
