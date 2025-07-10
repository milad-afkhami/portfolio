/* eslint-disable @typescript-eslint/only-throw-error */
import type { Dictionary, Maybe } from "ts-wiz";
import { HttpStatusCode } from "@/constants/http";
import { backendBaseUrl } from "@/configs/general";
import {
  NotFoundError,
  ForbiddenError,
  BadRequestError,
  TemporaryRedirect,
  PermanentRedirect,
  UnauthorizedError,
  InternalServerError,
} from "./models";

type InternalFetchOptions<
  Params extends Maybe<Dictionary> = Dictionary,
  Body extends Maybe<Dictionary | Array<unknown>> = undefined,
> = Omit<RequestInit, "body"> & {
  url: string;
  params?: Params;
  baseUrl?: string;
  body?: Body;
};

type FetchOptions<
  Params extends Maybe<Dictionary> = Dictionary,
  Body extends Maybe<Dictionary | Array<unknown>> = undefined,
> = Omit<InternalFetchOptions<Params, Body>, "method">;

class HttpClient {
  /**
   * Prepares headers for HTTP requests with defaults and authentication settings
   * @abstract
   * @protected
   * @param headers - Initial headers to be included in the request
   * @returns Headers object with all necessary headers set
   */
  private static prepareHeaders(headers: FetchOptions["headers"]): Headers {
    const customHeaders = new Headers(headers);
    customHeaders.set("Content-Type", "application/json");

    // const accessToken = Cookies.get<string>(ACCESS_TOKEN_STORAGE_KEY);
    // if (accessToken) customHeaders.set("Authorization", `Bearer ${accessToken}`);

    return customHeaders;
  }

  /**
   * Handles HTTP error responses and throws appropriate errors
   * @abstract
   * @protected
   * @param response - The fetch Response object
   * @throws Various HTTP errors defined in `packages/utils/http/models.ts` based on status code
   */
  private static async handleErrorResponse(response: Response): Promise<never> {
    const responseData = response.headers.get("content-type")?.includes("application/json")
      ? ((await response.json()) as Maybe<Dictionary>)
      : ((await response.text()) as Maybe<string>);

    switch (response.status as HttpStatusCode) {
      case HttpStatusCode.PermanentRedirect:
        throw new PermanentRedirect(responseData);
      case HttpStatusCode.TemporaryRedirect:
        throw new TemporaryRedirect(responseData);
      case HttpStatusCode.NotFound:
        throw new NotFoundError(undefined, responseData);
      case HttpStatusCode.BadRequest:
        throw new BadRequestError(undefined, responseData);
      case HttpStatusCode.Unauthorized:
        // handle logout here
        throw new UnauthorizedError("Session expired 🕵️‍♂️");
      case HttpStatusCode.Forbidden:
        throw new ForbiddenError("Access denied 🙅‍♂️");
      default:
        throw new InternalServerError(undefined, responseData);
    }
  }

  private static async request<
    Data extends Maybe<Dictionary> = Dictionary,
    Params extends Maybe<Dictionary> = Dictionary,
    Body extends Maybe<Dictionary | Array<unknown>> = undefined,
  >(options: InternalFetchOptions<Params, Body>): Promise<Data> {
    const { url, params, baseUrl = backendBaseUrl, headers, body, ...restOptions } = options;

    const myHeaders = this.prepareHeaders(headers);

    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : "";
    const fullUrl = `${baseUrl}${url}${queryString}`;

    const response = await fetch(fullUrl, {
      ...restOptions,
      headers: myHeaders,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) await this.handleErrorResponse(response);

    return response.json() as Promise<Data>;
  }

  public static get<Data extends Maybe<Dictionary> = Dictionary, Params extends Maybe<Dictionary> = Dictionary>(
    options: Omit<FetchOptions<Params>, "method">,
  ): Promise<Data> {
    return this.request<Data, Params>({ ...options, method: "GET" });
  }

  public static post<
    Data extends Maybe<Dictionary> = Dictionary,
    Params extends Maybe<Dictionary> = Dictionary,
    Body extends Dictionary | Array<unknown> = Dictionary,
  >(options: Omit<FetchOptions<Params, Body>, "method">): Promise<Data> {
    return this.request<Data, Params, Body>({ ...options, method: "POST" });
  }

  public static patch<
    Data extends Maybe<Dictionary> = Dictionary,
    Params extends Maybe<Dictionary> = Dictionary,
    Body extends Dictionary | Array<unknown> = Dictionary,
  >(options: Omit<FetchOptions<Params, Body>, "method">): Promise<Data> {
    return this.request<Data, Params, Body>({ ...options, method: "PATCH" });
  }

  public static put<
    Data extends Maybe<Dictionary> = Dictionary,
    Params extends Maybe<Dictionary> = Dictionary,
    Body extends Dictionary | Array<unknown> = Dictionary,
  >(options: Omit<FetchOptions<Params, Body>, "method">): Promise<Data> {
    return this.request<Data, Params, Body>({ ...options, method: "PUT" });
  }

  public static del<Data extends Maybe<Dictionary> = Dictionary, Params extends Maybe<Dictionary> = Dictionary>(
    options: Omit<FetchOptions<Params>, "method">,
  ): Promise<Data> {
    return this.request<Data, Params>({ ...options, method: "DELETE" });
  }
}

export default HttpClient;
