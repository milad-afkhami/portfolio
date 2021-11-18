export const setInputNumberValue = (value) => {
  let numberPattern = /[\u06f0-\u06f9]|[0-9]/;
  if (value.match(numberPattern)) {
    return value
      .replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
  } else {
    return "";
  }
};
