import __reduce from "lodash-es/reduce";

const formData = (obj: Dictionary<unknown>) =>
  __reduce(
    obj,
    (acc, cv) => {
      acc.append(cv as string, obj[cv as string] as string);
      return acc;
    },
    new FormData()
  );

export default formData;
