/**
 * @deprecated
 */
export default class Color {
  main: string;

  hover: string | undefined;

  light: string | undefined;

  lighter: string | undefined;

  dark: string | undefined;

  darker: string | undefined;

  pale: string | undefined;

  paler: string | undefined;

  variant: string | undefined;

  /**
   * Color variants class
   * @param {string} main 1. main version
   * @param {string} [hover] 2. hover version
   * @param {string} [light] 3. light version
   * @param {string} [lighter] 4. lighter version
   * @param {string} [dark] 5. dark version
   * @param {string} [darker] 6. darker version
   * @param {string} [pale] 7. pale version
   * @param {string} [paler] 8. paler version
   * @param {string} [variant] 9. variant version
   */
  constructor(
    /** 1. main version */
    main: Required<string>,
    /** 2. hover version */
    hover?: string,
    /** 3. light version */
    light?: string,
    /** 4. lighter version */
    lighter?: string,
    /** 5. dark version */
    dark?: string,
    /** 6. darker version */
    darker?: string,
    /** 7. pale version */
    pale?: string,
    /** 8. paler version */
    paler?: string,
    /** 9. variant version */
    variant?: string
  ) {
    this.main = main;
    this.hover = hover;
    this.light = light;
    this.lighter = lighter;
    this.dark = dark;
    this.darker = darker;
    this.pale = pale;
    this.paler = paler;
    this.variant = variant;
  }
}

// export function AppColor(surface, text, nav, navText) { this.surface = surface || "#ff0000"; this.text = text || "#ff0000"; this.nav = nav || "#ff0000"; this.navText = navText || "#ff0000"; }
