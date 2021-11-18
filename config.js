const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
const appBaseURL = process.env.REACT_APP_BASE_URL;
const isDevelopment = process.env.NODE_ENV === "development";

const APP_WRAPPER_ELEMENT_ID = "app-wrapper";
const proxyBasePath = "/api/proxy";
const proxyBasePathRegExp = /^\/api\/proxy/;

export {
  appBaseURL,
  apiBaseURL,
  isDevelopment,
  APP_WRAPPER_ELEMENT_ID,
  proxyBasePath,
  proxyBasePathRegExp,
};
