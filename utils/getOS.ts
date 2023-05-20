import OperationSystems from "@constants/os";

const getOS = (userAgent?: string): OperationSystems => {
  const agent =
    userAgent ||
    (typeof window !== "undefined" ? window.navigator.userAgent : "");

  if (/iPad|iPhone|iPod/.test(agent)) return OperationSystems.IOS;
  if (/Android/.test(agent)) return OperationSystems.Android;
  if (/Win/.test(agent)) return OperationSystems.Windows;
  if (/Linux/.test(agent)) return OperationSystems.Linux;
  if (/Mac/.test(agent)) return OperationSystems.MacOs;
  return OperationSystems.Unknown;
};

export default getOS;
