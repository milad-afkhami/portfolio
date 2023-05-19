/**
 * @see https://commitlint.js.org/#/reference-configuration
 * @type {import("@commitlint/types").UserConfig}
 */
const Configuration = {
  extends: ["@commitlint/config-conventional"],
  /**
   * Any rules defined here will override rules from @commitlint/config-conventional
   *
   * @see https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js#L3
   */
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "fix",
        "feat",
        "refactor",
        "perf",
        "style",
        "test",
        "docs",
        "build",
        "ops",
        "chore",
        "revert",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        // components:
        "components",
        "kits",
        "layout",
        "cards",

        "configs",
        "constants",
        "contexts",
        "data",
        "helpers",
        "hooks",
        "pages",
        "api",
        "scripts",
        "services",
        "stylesheets",
        "types",
        "utils",
        "validators",
        "models",

        "i18n",
        "git",

        // public:
        "assets",
        "fonts",
        "icons",

        // docs:
        "adr",
        "seo",
        "style-guide",
      ],
    ],
  },
  ignores: [
    // the commit is the very first initial commit
    (commit) =>
      ["initial commit", "༼ つ ◕_◕ ༽つ  initial commit"].includes(commit),
    // the commit has a `docs` type
  ],
  // defaultIgnores: true,
  helpUrl:
    "https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js",
};

module.exports = Configuration;
