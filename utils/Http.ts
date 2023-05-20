import axios, { type AxiosRequestHeaders } from "axios";
import { apiBaseURL } from "@configs/urls";
import formData from "@utils/formData";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions {
  baseURL?: string;
  url?: string;
  method?: Method;
  headers?: AxiosRequestHeaders;
  params?: Dictionary;
  data?: Dictionary<unknown>;
  type?: "formData" | null;
}

export interface HTTPResponse<Data = unknown> {
  data?: Data;
  meta: { status_code: number; paginated?: boolean; detail?: string };
}

export default class Http {
  static async get<T>(options: FetchOptions | string) {
    const config = typeof options === "string" ? { url: options } : options;

    return this.request<T>({ method: "GET", ...config });
  }

  static async post<T>(options: FetchOptions) {
    return this.request<T>({ method: "POST", ...(options || {}) });
  }

  static async patch<T>(options: FetchOptions) {
    return this.request<T>({ method: "PATCH", ...(options || {}) });
  }

  static async delete<T>(options: FetchOptions) {
    return this.request<T>({ method: "DELETE", ...(options || {}) });
  }

  static async request<T>(options: FetchOptions) {
    const {
      baseURL = apiBaseURL,
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

    const response = await axios.request<T>({
      method,
      url,
      baseURL,
      params,
      ...(_headers ? { headers: _headers } : {}),
      ...(_data ? { data: _data } : {}),
    });

    return response.data;
  }
}
