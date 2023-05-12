import { Color } from "@models";
import THEMES from "@constants/themes";

export const defaultTheme = THEMES.DARK;

// generate pallette variants from http://mcg.mbitson.com/

const themes = {
  [THEMES.LIGHT]: {
    brand: new Color(
      "#f6be89",
      "#E8AA77",
      "#F2CEAD",
      "#FAEADC",
      "#E5A26D",
      "#edb98ab2",
      "#edb98a66",
      "#E3944F"
    ),
    bg: {
      primary: new Color("#F5F5F5"),
      secondary: new Color("#EBEBEB", "#e1e1e1", "", "", "", "#EBEBEB87"),
      tertiary: new Color("#FBFAF7"),
      disabled: new Color("#656668"),
    },
    text: {
      primary: new Color("#151515"),
      secondary: new Color("#525252"),
      tertiary: new Color("#888888"),
      disabled: new Color("#D0D0D0"),
    },
    assistive: {
      success: new Color(
        "#27AE60",
        "#23A758",
        "#47BA78",
        "#93D7B0",
        "#1D9D4E",
        "#27AE60B2",
        "#27AE6066"
      ),
      error: new Color(
        "#EB5757",
        "#E94F4F",
        "#EE7070",
        "#F5ABAB",
        "#E54646",
        "#EB5757B2",
        "#EB575766"
      ),
      info: new Color(
        "#2D9CDB",
        "#2894D7",
        "#4DABE0",
        "#96CEED",
        "#228AD2",
        "#2D9CDBB2",
        "#2D9CDB66"
      ),
      warning: new Color(
        "#F2C94C",
        "#F0C345",
        "#F4D167",
        "#F9E4A6",
        "#ECB533",
        "#F2C94CB2",
        "#F2C94C66"
      ),
    },
    border: {
      dark: new Color("#B2B2B2"),
      light: new Color("#DDDDDD"),
    },
  },
  [THEMES.DARK]: {
    brand: new Color(
      "#f6be89",
      "#E8AA77",
      "#F2CEAD",
      "#FAEADC",
      "#E5A26D",
      "#edb98ab2",
      "#edb98a66",
      "#E3944F"
    ),
    bg: {
      primary: new Color(
        "#141416",
        "#0B0B0C",
        "#373739",
        "#8A8A8B",
        "#0B0B0C",
        "#141416B2",
        "#14141666"
      ),
      secondary: new Color(
        "#232228",
        "#1F1E24",
        "#444348",
        "#919194",
        "#151418",
        "#232228B2",
        "#23222866"
      ),
      tertiary: new Color(
        "#33313A",
        "#2E2C34",
        "#525058",
        "#706F75",
        "#27252C",
        "#33313AB2",
        "#33313A66"
      ),
      disabled: new Color("#656668"),
    },
    text: {
      primary: new Color("#FFFFFF"),
      secondary: new Color("#A9A9A9", "", "", "#3C3C3C"),
      tertiary: new Color("#8C8C8C"),
      disabled: new Color("#3E3E3E"),
    },
    assistive: {
      success: new Color(
        "#27AE60",
        "#23A758",
        "#47BA78",
        "#93D7B0",
        "#1D9D4E",
        "#27AE60B2",
        "#27AE6066"
      ),
      error: new Color(
        "#EB5757",
        "#E94F4F",
        "#EE7070",
        "#F5ABAB",
        "#E54646",
        "#EB5757B2",
        "#EB575766"
      ),
      info: new Color(
        "#2D9CDB",
        "#2894D7",
        "#4DABE0",
        "#96CEED",
        "#228AD2",
        "#2D9CDBB2",
        "#2D9CDB66"
      ),
      warning: new Color(
        "#F2C94C",
        "#F0C345",
        "#F4D167",
        "#F9E4A6",
        "#ECB533",
        "#F2C94CB2",
        "#F2C94C66"
      ),
    },
    border: {
      dark: new Color("#30303166"),
      light: new Color("#ffffff1a", "#ffffff2a"),
    },
  },
};

/**
 * @typedef {("brand"|"brand-main"|"brand-hover"|"brand-light"|"brand-lighter"|"brand-dark"|"brand-pale"|"brand-paler"|"brand-variant"|"bg-primary"|"bg-primary-main"|"bg-primary-hover"|"bg-primary-light"|"bg-primary-lighter"|"bg-primary-dark"|"bg-primary-pale"|"bg-primary-paler"|"bg-primary-variant"|"bg-secondary"|"bg-secondary-main"|"bg-secondary-hover"|"bg-secondary-light"|"bg-secondary-lighter"|"bg-secondary-dark"|"bg-secondary-pale"|"bg-secondary-paler"|"bg-secondary-variant"|"bg-tertiary"|"bg-tertiary-main"|"bg-tertiary-hover"|"bg-tertiary-light"|"bg-tertiary-lighter"|"bg-tertiary-dark"|"bg-tertiary-pale"|"bg-tertiary-paler"|"bg-tertiary-variant"|"bg-disabled"|"bg-disabled-main"|"bg-disabled-hover"|"bg-disabled-light"|"bg-disabled-lighter"|"bg-disabled-dark"|"bg-disabled-pale"|"bg-disabled-paler"|"bg-disabled-variant"|"text-primary"|"text-primary-main"|"text-primary-hover"|"text-primary-light"|"text-primary-lighter"|"text-primary-dark"|"text-primary-pale"|"text-primary-paler"|"text-primary-variant"|"text-secondary"|"text-secondary-main"|"text-secondary-hover"|"text-secondary-light"|"text-secondary-lighter"|"text-secondary-dark"|"text-secondary-pale"|"text-secondary-paler"|"text-secondary-variant"|"text-tertiary"|"text-tertiary-main"|"text-tertiary-hover"|"text-tertiary-light"|"text-tertiary-lighter"|"text-tertiary-dark"|"text-tertiary-pale"|"text-tertiary-paler"|"text-tertiary-variant"|"text-disabled"|"text-disabled-main"|"text-disabled-hover"|"text-disabled-light"|"text-disabled-lighter"|"text-disabled-dark"|"text-disabled-pale"|"text-disabled-paler"|"text-disabled-variant"|"assistive-success"|"assistive-success-main"|"assistive-success-hover"|"assistive-success-light"|"assistive-success-lighter"|"assistive-success-dark"|"assistive-success-pale"|"assistive-success-paler"|"assistive-success-variant"|"assistive-error"|"assistive-error-main"|"assistive-error-hover"|"assistive-error-light"|"assistive-error-lighter"|"assistive-error-dark"|"assistive-error-pale"|"assistive-error-paler"|"assistive-error-variant"|"assistive-info"|"assistive-info-main"|"assistive-info-hover"|"assistive-info-light"|"assistive-info-lighter"|"assistive-info-dark"|"assistive-info-pale"|"assistive-info-paler"|"assistive-info-variant"|"assistive-warning"|"assistive-warning-main"|"assistive-warning-hover"|"assistive-warning-light"|"assistive-warning-lighter"|"assistive-warning-dark"|"assistive-warning-pale"|"assistive-warning-paler"|"assistive-warning-variant"|"border-dark"|"border-dark-main"|"border-dark-hover"|"border-dark-light"|"border-dark-lighter"|"border-dark-dark"|"border-dark-pale"|"border-dark-paler"|"border-dark-variant"|"border-light"|"border-light-main"|"border-light-hover"|"border-light-light"|"border-light-lighter"|"border-light-dark"|"border-light-pale"|"border-light-paler"|"border-light-variant")} Colors
 */
export default themes;
