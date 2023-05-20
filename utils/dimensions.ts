import getOS from "@utils/getOS";
import isClient from "@utils/isClient";
import OperationSystems from "@constants/os";

// @ts-ignore
const isIos = () => getOS() === OperationSystems.IOS && !window.MSStream;

export const getWidth = (): Maybe<number> => {
  if (!isClient()) return undefined;

  if (isIos()) return window.screen.width;
  return window.innerWidth;
};

export const getHeight = (): Maybe<number> => {
  if (!isClient()) return undefined;

  if (isIos()) return window.screen.height;
  return window.innerHeight;
};
