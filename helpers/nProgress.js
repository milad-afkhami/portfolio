import * as nProgress from "nprogress";
import { __get } from "@utils";

const nProgressHelper = {
  start: (...values) =>
    !__get(values, "[1].shallow") && nProgress.start(...values),
  done: (...values) =>
    !__get(values, "[1].shallow") && nProgress.done(...values),
};

export { nProgressHelper as nProgress };
