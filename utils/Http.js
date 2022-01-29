import axios from "axios";
import { apiBaseURL, externalApiBaseURL } from "@config";
import { formData } from "@utils";

/**
 * @typedef {("GET" | "POST" | "PUT" | "PATCH" | "DELETE")} Method
 * @typedef {{baseURL:string, url:string, method:Method, headers:Object, params: Object, type: "formData"|null, proxyLayer: boolean}} FetchOptions
 */

export class Http {
  /**
   * Performs an HTTP options request
   * @method
   * @param {FetchOptions} options
   * @returns {Promise}
   */
  static get = (options) => {
    const config = typeof options === "string" ? { url: options } : options;

    return this.request({ method: "GET", ...config });
  };

  /**
   * Performs an HTTP POST request
   * @method
   * @param {FetchOptions} options
   * @returns {Promise}
   */
  static post = (options = {}) => this.request({ method: "POST", ...options });

  /**
   * Performs an HTTP PATCH request
   * @method
   * @param {FetchOptions} options
   * @returns {Promise}
   */
  static patch = (options = {}) =>
    this.request({ method: "PATCH", ...options });

  /**
   * Performs an HTTP DELETE request
   * @method
   * @param {FetchOptions} options
   * @returns {Promise}
   */
  static delete = (options = {}) =>
    this.request({ method: "DELETE", ...options });

  /**
   * Performs an HTTP request
   * @method
   * @param {FetchOptions} options
   * @returns {Promise}
   */
  static request = async (options) => {
    const {
      // proxyLayer property is useful when we don't want our request to pass through the proxy layer, e.g. build time and server-side requests.
      proxyLayer = true,
      baseURL = proxyLayer ? apiBaseURL : externalApiBaseURL,
      url,
      method = "GET",
      headers,
      data,
      params,
      type,
    } = options;
    const isFormData = type === "formData";
    const _data = isFormData ? formData(data) : data;

    const _headers = {
      Accept: "application/json",
      ...(isFormData ? { "content-type": "multipart/*" } : {}),
      ...headers,
    };

    const response = await axios.request({
      method,
      url,
      baseURL,
      params,
      ...(_headers ? { headers: _headers } : {}),
      ...(_data ? { data: _data } : {}),
    });

    return response.data;
  };
}
