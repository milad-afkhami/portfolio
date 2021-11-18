import { __pick } from "@utils";

export const serializeError = (error) =>
  __pick(error, [
    "statusText",
    "status",
    "data",
    "config.headers",
    "config.method",
  ]);
