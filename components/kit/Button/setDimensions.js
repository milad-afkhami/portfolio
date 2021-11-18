export const setDimensions = ({ size, block, width, height }) => ({
  width: width || (block ? "100%" : "155px"),
  height: height || (size === "lg" ? "64px" : size === "md" ? "56px" : "48px"),
});
