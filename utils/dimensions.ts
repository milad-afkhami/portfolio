import getOS from "./getOS";
import OS from "@constants/os";

const isIos = () => getOS() === OS.IOS && !window.MSStream;

export const getWidth = () =>
  process.browser ? (isIos() ? window.screen.width : window.innerWidth) : NaN;

export const getHeight = () =>
  process.browser ? (isIos() ? window.screen.height : window.innerHeight) : NaN;
