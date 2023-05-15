const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import("jest").Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "@api/(.*)$": "<rootDir>/pages/api/$1",
    "@kits/(.*)$": "<rootDir>/components/Kits/$1",
    "@components/(.*)$": "<rootDir>/components/$1",
    "@validators/(.*)$": "<rootDir>/validators/$1",
    "@utils/(.*)$": "<rootDir>/utils/$1",
    "@models/(.*)$": "<rootDir>/models/$1",
    "@services/(.*)$": "<rootDir>/services/$1",
    "@constants/(.*)$": "<rootDir>/constants/$1",
    "@_types/(.*)$": "<rootDir>/types/$1",
    "@stylesheets/(.*)$": "<rootDir>/stylesheets/$1",
    "@helpers/(.*)$": "<rootDir>/helpers/$1",
    "@hooks/(.*)$": "<rootDir>/hooks/$1",
    "@configs/(.*)$": "<rootDir>/configs/$1",
    "@contexts/(.*)$": "<rootDir>/contexts/$1",
    "@images": "<rootDir>/public/images/index",
    "@data/(.*)$": "<rootDir>/data/$1",
    "@pages/(.*)$": "<rootDir>/pages/$1",

    /*
    Due to the conflict 'import' key of the 'lodash-es' with the 'jest',
    the 'lodash-es' mapped by 'lodash' to replace 'import' with 'require'.
    */
    "^lodash-es": "lodash",
  },
  transform: {},
  testEnvironment: "jest-environment-jsdom",
  // const { defaults } = require("jest-config");
  // moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
};

module.exports = createJestConfig(customJestConfig);
