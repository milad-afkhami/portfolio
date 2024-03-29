/** @type {Languages} */
const defaultLanguage = "en";

/** @type {Record<Languages, LanguageConfig>} */
const languages = {
  en: {
    id: 1,
    name: "en",
    fullName: "English",
    displayName: "English",
    flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCA0OCc+PHBhdGggZmlsbD0nIzAwMjc4MScgZD0nTTQ2LDZIMkMwLjg5Niw2LDAsNi44OTYsMCw4djMyYzAsMS4xMDQsMC44OTYsMiwyLDJoNDRjMS4xMDQsMCwyLTAuODk2LDItMlY4QzQ4LDYuODk2LDQ3LjEwNCw2LDQ2LDZ6Jy8+PHBhdGggZmlsbD0nI0U2RTZFNicgZD0nTTQ4LDhjMC0xLjEwNC0wLjg5Ni0yLTItMmgtNS4xNjFMMjgsMTUuODc2VjZoLTh2OS44NzZMNy4xNjEsNkgyQzAuODk2LDYsMCw2Ljg5NiwwLDh2Mi41ODZMMTIuMjM5LDIwSDB2OCBoMTIuMjM5TDAsMzcuNDE1VjQwYzAsMS4xMDQsMC44OTYsMiwyLDJoNS4xNjFMMjAsMzIuMTI0VjQyaDh2LTkuODc2TDQwLjgzOSw0Mkg0NmMxLjEwNCwwLDItMC44OTYsMi0ydi0yLjU4NUwzNS43NjEsMjhINDh2LTggSDM1Ljc2MUw0OCwxMC41ODZWOHonLz48cG9seWdvbiBmaWxsPScjRDEwRDI0JyBwb2ludHM9JzQ4LDIyIDI2LDIyIDI2LDYgMjIsNiAyMiwyMiAwLDIyIDAsMjYgMjIsMjYgMjIsNDIgMjYsNDIgMjYsMjYgNDgsMjYgJy8+PHBhdGggZmlsbD0nI0QxMEQyNCcgZD0nTTQ3LjAwMSw2LjMwN0wyOS4yLDIwaDMuMjhMNDgsOC4wNjJWOEM0OCw3LjI2OCw0Ny41ODcsNi42NTYsNDcuMDAxLDYuMzA3eicvPjxwYXRoIGZpbGw9JyNEMTBEMjQnIGQ9J00zMi40OCwyOEgyOS4ybDE3LjgwMSwxMy42OTNDNDcuNTg3LDQxLjM0NCw0OCw0MC43MzIsNDgsNDB2LTAuMDYyTDMyLjQ4LDI4eicvPjxwYXRoIGZpbGw9JyNEMTBEMjQnIGQ9J00xNS41MiwyOEwwLDM5LjkzOFY0MGMwLDAuNzMyLDAuNDEzLDEuMzQ0LDAuOTk5LDEuNjkzTDE4LjgsMjhIMTUuNTJ6Jy8+PHBhdGggZmlsbD0nI0QxMEQyNCcgZD0nTTE1LjUyLDIwaDMuMjhMMC45OTksNi4zMDdDMC40MTMsNi42NTYsMCw3LjI2OCwwLDh2MC4wNjJMMTUuNTIsMjB6Jy8+PC9zdmc+",
    direction: "ltr",
  },
  // de: {
  //   id: 2,
  //   name: "de",
  //   fullName: "Deutsch",
  //   displayName: "Deutsch",
  //   flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCA0OCc+PHBhdGggZD0nTTQ4LDE4SDBWOGMwLTEuMTA1LDAuODk1LTIsMi0yaDQ0YzEuMTA1LDAsMiwwLjg5NSwyLDJWMTh6Jy8+PHJlY3QgeT0nMTgnIGZpbGw9JyNFRTAwMDAnIHdpZHRoPSc0OCcgaGVpZ2h0PScxMicvPjxwYXRoIGZpbGw9JyNGRENGMDAnIGQ9J000OCw0MGMwLDEuMTA1LTAuODk1LDItMiwySDJjLTEuMTA1LDAtMi0wLjg5NS0yLTJWMzBoNDhWNDB6Jy8+PC9zdmc+",
  //   direction: "ltr",
  // },
  // fr: {
  //   id: 3,
  //   name: "fr",
  //   fullName: "French",
  //   displayName: "Français",
  //   flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCA0OCc+PHBhdGggZmlsbD0nIzAxMjA5RicgZD0nTTE2LDQySDJjLTEuMTA1LDAtMi0wLjg5NS0yLTJWOGMwLTEuMTA1LDAuODk1LTIsMi0yaDE0VjQyeicvPjxwYXRoIGZpbGw9JyNFRjQyMzQnIGQ9J000OCw0MGMwLDEuMTA1LTAuODk1LDItMiwySDMyVjZoMTRjMS4xMDUsMCwyLDAuODk1LDIsMlY0MHonLz48cmVjdCB4PScxNicgeT0nNicgZmlsbD0nI0U2RTZFNicgd2lkdGg9JzE2JyBoZWlnaHQ9JzM2Jy8+PC9zdmc+",
  //   direction: "ltr",
  // },
  // fa: { id: 4, name: "fa", fullName: "Persian", displayName: "فارسی", flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCA0OCc+PHBhdGggZmlsbD0nIzAwMjc4MScgZD0nTTQ2LDZIMkMwLjg5Niw2LDAsNi44OTYsMCw4djMyYzAsMS4xMDQsMC44OTYsMiwyLDJoNDRjMS4xMDQsMCwyLTAuODk2LDItMlY4QzQ4LDYuODk2LDQ3LjEwNCw2LDQ2LDZ6Jy8+PHBhdGggZmlsbD0nI0U2RTZFNicgZD0nTTQ4LDhjMC0xLjEwNC0wLjg5Ni0yLTItMmgtNS4xNjFMMjgsMTUuODc2VjZoLTh2OS44NzZMNy4xNjEsNkgyQzAuODk2LDYsMCw2Ljg5NiwwLDh2Mi41ODZMMTIuMjM5LDIwSDB2OCBoMTIuMjM5TDAsMzcuNDE1VjQwYzAsMS4xMDQsMC44OTYsMiwyLDJoNS4xNjFMMjAsMzIuMTI0VjQyaDh2LTkuODc2TDQwLjgzOSw0Mkg0NmMxLjEwNCwwLDItMC44OTYsMi0ydi0yLjU4NUwzNS43NjEsMjhINDh2LTggSDM1Ljc2MUw0OCwxMC41ODZWOHonLz48cG9seWdvbiBmaWxsPScjRDEwRDI0JyBwb2ludHM9JzQ4LDIyIDI2LDIyIDI2LDYgMjIsNiAyMiwyMiAwLDIyIDAsMjYgMjIsMjYgMjIsNDIgMjYsNDIgMjYsMjYgNDgsMjYgJy8+PHBhdGggZmlsbD0nI0QxMEQyNCcgZD0nTTQ3LjAwMSw2LjMwN0wyOS4yLDIwaDMuMjhMNDgsOC4wNjJWOEM0OCw3LjI2OCw0Ny41ODcsNi42NTYsNDcuMDAxLDYuMzA3eicvPjxwYXRoIGZpbGw9JyNEMTBEMjQnIGQ9J00zMi40OCwyOEgyOS4ybDE3LjgwMSwxMy42OTNDNDcuNTg3LDQxLjM0NCw0OCw0MC43MzIsNDgsNDB2LTAuMDYyTDMyLjQ4LDI4eicvPjxwYXRoIGZpbGw9JyNEMTBEMjQnIGQ9J00xNS41MiwyOEwwLDM5LjkzOFY0MGMwLDAuNzMyLDAuNDEzLDEuMzQ0LDAuOTk5LDEuNjkzTDE4LjgsMjhIMTUuNTJ6Jy8+PHBhdGggZmlsbD0nI0QxMEQyNCcgZD0nTTE1LjUyLDIwaDMuMjhMMC45OTksNi4zMDdDMC40MTMsNi42NTYsMCw3LjI2OCwwLDh2MC4wNjJMMTUuNTIsMjB6Jy8+PC9zdmc+", direction: "rtl" }
};

module.exports = { languages, defaultLanguage };
