// import "i18next";
// import type common from "../public/locales/en/common.json";
// import type layout from "../public/locales/en/layout.json";
// import type home from "../public/locales/en/home.json";
// import type projects from "../public/locales/en/projects.json";
// import type about from "../public/locales/en/about.json";
// import type favouritesCommon from "../public/locales/en/favourites.common.json";
// import type favouritesAnimations from "../public/locales/en/favourites.animations.json";
// import type favouritesArtists from "../public/locales/en/favourites.artists.json";
// import type favouritesAnime from "../public/locales/en/favourites.anime.json";
// import type favouritesBooks from "../public/locales/en/favourites.books.json";
// import type favouritesPlaylists from "../public/locales/en/favourites.playlists.json";
// import type favouritesPoems from "../public/locales/en/favourites.poems.json";
// import type favouritesSeries from "../public/locales/en/favourites.series.json";
// import type favouritesWriters from "../public/locales/en/favourites.writers.json";

// interface I18nResources {
//   common: typeof common;
//   layout: typeof layout;
//   home: typeof home;
//   projects: typeof projects;
//   about: typeof about;
//   "favourites.common": typeof favouritesCommon;
//   "favourites.animations": typeof favouritesAnimations;
//   "favourites.artists": typeof favouritesArtists;
//   "favourites.anime": typeof favouritesAnime;
//   "favourites.books": typeof favouritesBooks;
//   "favourites.playlists": typeof favouritesPlaylists;
//   "favourites.poems": typeof favouritesPoems;
//   "favourites.series": typeof favouritesSeries;
//   "favourites.writers": typeof favouritesWriters;
// }

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    // resources: I18nResources;
  }
}
