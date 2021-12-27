const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
const appBaseURL = process.env.REACT_APP_BASE_URL;
const externalApiBaseURL = process.env.REACT_APP_EXTERNAL_API_BASE_URL;
const isDevelopment = process.env.NODE_ENV === "development";

const APP_WRAPPER_ELEMENT_ID = "app-wrapper";
const proxyBasePath = "/api/proxy";
const proxyBasePathRegExp = /^\/api\/proxy/;

const navLinks = [
  { link: "/", label: "home" },
  { link: "/about", label: "about" },
  // { link: "/courses", label: "courses" },
  { link: "/blog", label: "blog" },
  // { link: "/packages", label: "packages" },
  { link: "/projects", label: "projects" },
  { link: "/favourites", label: "favourites" },
  { link: "/gists", label: "gists" },
];

export {
  appBaseURL,
  externalApiBaseURL,
  apiBaseURL,
  isDevelopment,
  APP_WRAPPER_ELEMENT_ID,
  proxyBasePath,
  proxyBasePathRegExp,
  navLinks,
};
