const justifyValues = {
  center: "center",
  end: "flex-end",
  "flex-end": "flex-end",
  start: "flex-start",
  "flex-start": "flex-start",
  around: "space-around",
  "space-around": "space-around",
  between: "space-between",
  "space-between": "space-between",
};
const alignValues = {
  center: "center",
  end: "flex-end",
  "flex-end": "flex-end",
  start: "flex-start",
  "flex-start": "flex-start",
};

export const flex = (align, justify, dir = "row", wrap) => ({
  display: "flex",
  ...(align ? { alignItems: alignValues[align] } : {}),
  ...(justify ? { justifyContent: justifyValues[justify] || justify } : {}),
  ...(dir ? { flexDirection: dir } : {}),
  ...(wrap ? { flexWrap: wrap } : {}),
});
