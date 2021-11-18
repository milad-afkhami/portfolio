// SEE docs/http-proxy.md FOR MORE INFORMATION.

import httpProxy from "http-proxy";
import url from "url";
import { INTERVALS, TOKEN_COOKIE_KEY } from "@constants";
import {
  externalApiBaseURL,
  headerTokenKey,
  proxyBasePath,
  proxyBasePathRegExp,
} from "@config";
import * as Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const pathname = url.parse(req.url).pathname;
    const isSessionStart = pathname === proxyBasePath + "/session/start";
    // const isLogout = pathname === proxyBasePath + "/session/logout";

    const cookies = new Cookies(req, res);
    const token = cookies.get(TOKEN_COOKIE_KEY);

    req.url = req.url.replace(proxyBasePathRegExp, "");

    req.headers.cookie = "";

    if (token) req.headers[headerTokenKey] = token;

    if (isSessionStart) proxy.once("proxyRes", interceptSessionResponse);

    //  if (isLogout) { delete the token cookie }

    proxy.once("error", reject);

    proxy.web(req, res, {
      target: externalApiBaseURL,
      autoRewrite: false,
      selfHandleResponse: isSessionStart,
    });

    function interceptSessionResponse(proxyRes, req, res) {
      let apiResponseBody = "";
      proxyRes.on("data", (chunk) => {
        apiResponseBody += chunk;
      });
      proxyRes.on("end", () => {
        try {
          const response = JSON.parse(apiResponseBody);

          const token = response?.result?.session?.token;

          const cookies = new Cookies(req, res);
          cookies.set(TOKEN_COOKIE_KEY, token, {
            maxAge: INTERVALS.A_MONTH * 1000,
            httpOnly: true,
            sameSite: "lax",
          });

          delete response?.result?.session?.token;

          res.status(200).json(response);
          resolve(response);
        } catch (err) {
          reject(err);
        }
      });
    }
  });
};
