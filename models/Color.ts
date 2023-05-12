export default function Color(main, hover, light, lighter, dark, pale, paler, variant) {
  this.main = main;
  this.hover = hover;
  this.light = light;
  this.lighter = lighter;
  this.dark = dark;
  this.pale = pale;
  this.paler = paler;
  this.variant = variant;
}

export function AppColor(surface, text, nav, navText) {
  this.surface = surface || "#ff0000";
  this.text = text || "#ff0000";
  this.nav = nav || "#ff0000";
  this.navText = navText || "#ff0000";
}
