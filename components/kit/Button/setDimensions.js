export const setDimensions = ({ size, block, width, height }) => ({
  width: width || (block ? "100%" : "140px"),
  height: height || (size === "lg" ? "64px" : size === "md" ? "56px" : "48px"),
});
