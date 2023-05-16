import OperationSystems from "@constants/os";

const getOS = (userAgent) => {
  const agent =
    userAgent || (process.browser ? window.navigator.userAgent : "");

  return /iPad|iPhone|iPod/.test(agent)
    ? OperationSystems.IOs
    : /Android/.test(agent)
    ? OperationSystems.Android
    : /Win/.test(agent)
    ? OperationSystems.Windows
    : /Linux/.test(agent)
    ? OperationSystems.Linux
    : /Mac/.test(agent)
    ? OperationSystems.MacOs
    : OperationSystems.Unknown;
};

export default getOS;
