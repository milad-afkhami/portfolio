import __reduce from "lodash-es/reduce";
import type { Dictionary } from "ts-wiz";

const formData = (obj: Dictionary) =>
  __reduce(
    obj,
    (acc, cv) => {
      acc.append(cv as string, obj[cv as string] as string);
      return acc;
    },
    new FormData()
  );

export default formData;
