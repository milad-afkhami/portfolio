export const formData = (obj) =>
  Object.keys(obj).reduce((acc, cv) => {
    acc.append(cv, obj[cv]);
    return acc;
  }, new FormData());
