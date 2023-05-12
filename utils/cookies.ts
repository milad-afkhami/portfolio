import __get from "lodash-es/get";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import INTERVALS from "@constants/interval";

export default  class Cookies {
  /**
   * Parses cookies.
   *
   * @param name The name of your cookie.
   * @param ctx NextJS page or API context, express context, null or undefined.
   * @param options Options that we pass down to parseCookies method of `cookie` library.
   */
  static get = (name, ctx = null, options) => __get(parseCookies(ctx), name);

  /**
   * Sets a cookie.
   * @param ctx NextJS page or API context, express context, null or undefined.
   * @param name The name of your cookie.
   * @param value The value of your cookie.
   * @param options Options that we pass down to `cookie` library.
   */
  static set = (
    ctx,
    name,
    value,
    options = { maxAge: INTERVALS.A_MONTH, path: "/" }
  ) => setCookie(ctx, name, value, options);

  static remove = (ctx, key, options = { path: "/" }) =>
    destroyCookie(ctx, key, options);

  /**
   * Indirectly check to see if an http cookie exists,
   * we can reach this by trying to set it to a value with javascript
   * if it can't be set, then the HTTP Only Cookie must be there (or the user is blocking cookies).
   * @param {String} cookieName
   * @returns
   */
  static httpCookieExistence = (cookieName) => {
    var date = new Date();
    date.setTime(date.getTime() + 1000);
    var expires = "expires=" + date.toUTCString();

    document.cookie = cookieName + "=new_value;path=/;" + expires;
    if (document.cookie.indexOf(cookieName + "=") == -1) return true;
    else return false;
  };
}
