export const getCssVariableValue = (name, callback = (_) => _) => {
  if (!process.browser) return "";
  const domStyles = getComputedStyle(document.documentElement);
  const value = domStyles.getPropertyValue(name).trim();
  return callback(value);
};
