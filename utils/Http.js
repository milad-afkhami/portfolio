import axios from "axios";
import { apiBaseURL, externalApiBaseURL } from "@config";
import { formData } from "@utils";

interface FetchOptions {
  baseURL?: String;
  url?: String;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Object;
  data?: Object;
  params?: Object;
  type?: "formData" | null;
  proxyLayer?: Boolean; // useful when we don't want our request to pass through the proxy layer, e.g. build time requests.
}

export class Http {
  static get = (options: FetchOptions | String) => {
    const config = typeof options === "string" ? { url: options } : options;

    return this.request({ method: "GET", ...config });
  };

  static post = (options: FetchOptions = {}) =>
    this.request({ method: "POST", ...options });

  static patch = (options: FetchOptions = {}) =>
    this.request({ method: "PATCH", ...options });

  static delete = (options: FetchOptions = {}) =>
    this.request({ method: "DELETE", ...options });

  static request = async (options: FetchOptions) => {
    const {
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
