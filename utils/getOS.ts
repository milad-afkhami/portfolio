import { OS } from "@constants";

const getOS = (userAgent) => {
  const agent =
    userAgent || (process.browser ? window.navigator.userAgent : "");

  return /iPad|iPhone|iPod/.test(agent)
    ? OS.IOS
    : /Android/.test(agent)
    ? OS.ANDROID
    : /Win/.test(agent)
    ? OS.WINDOWS
    : /Linux/.test(agent)
    ? OS.LINUX
    : /Mac/.test(agent)
    ? OS.MACOS
    : OS.UNKNOWN;
};

export default getOS;
