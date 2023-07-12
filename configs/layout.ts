const navItems: Array<INavItem> = [
  { link: "/", label: "home" },
  { link: "/about", label: "about" },
  // { link: "/courses", label: "courses" },
  { link: "/blog", label: "blog" },
  { link: "/packages", label: "packages" },
  { link: "/projects", label: "projects" },
  { link: "/gists", label: "gists" },
  { link: "/favourites", label: "favourites" },
];

const toastDuration = 3000;

const headerNavResponsiveBreakpoint: Breakpoints = "lg";

export { navItems, toastDuration, headerNavResponsiveBreakpoint };
