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

const contactOptions = [
  { type: "email", value: "miladmaps@gmail.com" },
  {
    type: "linkedin",
    label: "milad-afkhami-pour-71b86a18b",
    value: "https://www.linkedin.com/in/milad-afkhami-pour-71b86a18b/",
  },
  {
    type: "skype",
    label: "join.skype.com/invite/pRe4UIXrDeTj",
    value: "https://join.skype.com/invite/pRe4UIXrDeTj",
  },
  { type: "telegram", label: "@mili_u", value: "https://telegram.me/mili_u" },
  {
    type: "whatsapp",
    label: "+98 939 284 0749",
    value: "+989392840749",
    private: true,
  },
];

const aboutTimelineSections = [
  // { year: 2022, items: ["ielts"] },
  { year: 2021, items: ["about.timeline.becomingTeamLead"] },
  {
    year: 2020,
    items: ["about.timeline.startingAtArshCo"],
  },
  {
    year: 2019,
    items: [
      "about.timeline.changingField",
      "about.timeline.growingMyHair",
      "about.timeline.leftMyFirstJob",
      "about.timeline.startingAtAppTech",
    ],
  },
  {
    year: 2018,
    items: [
      "about.timeline.university",
      "about.timeline.tookCoupleOfSemestersOff",
      "about.timeline.firstDayAtWork",
    ],
  },
  { year: 2014, items: ["about.timeline.choosingNationalExamPath"] },
  { year: 2008, items: ["about.timeline.firstComputer"] },
  { year: 2004, items: ["about.timeline.startingSchool"] },
  { year: 2003, items: ["about.timeline.earlySchool"] },
  { year: 1998, items: ["about.timeline.born"] },
];

const workExperienceTimelineSections = [
  { year: "JUL 2020 - Present", items: ["about.workExperience.4"] },
  { year: "AUG 2019 - JUN 2020", items: ["about.workExperience.3"] },
  { year: "APR 2019 - JUL 2019", items: ["about.workExperience.2"] },
  { year: "NOV 2017 - MAR 2019", items: ["about.workExperience.1"] },
];

const educationTimelineSections = [
  { year: "From 2020", items: ["about.education.2"] },
  { year: "2017 - 2019", items: ["about.education.1"] },
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
  contactOptions,
  aboutTimelineSections,
  workExperienceTimelineSections,
  educationTimelineSections,
};
