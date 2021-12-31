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

const aboutTimelineSections = [
  { year: 2022, items: ["ielts"] },
  { year: 2021, items: ["startingAtArshCo", "becomingTeamLead"] },
  {
    year: 2020,
    items: ["growingMyHair", "leftMyFirstJob", "startingAtAppTech"],
  },
  { year: 2019, items: ["changingField", "firstDayAtWork"] },
  { year: 2018, items: ["university", "tookCoupleOfSemestersOff"] },
  { year: 2014, items: ["choosingNEAPath"] },
  { year: 2008, items: ["firstComputer"] },
  { year: 2004, items: ["startingSchool"] },
  { year: 2003, items: ["earlySchool"] },
  { year: 1998, items: ["born"] },
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
  aboutTimelineSections,
};
