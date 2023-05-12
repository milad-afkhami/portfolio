const setDimensions = ({ size, block, width, height, fixedWidth }) => {
  const minWidth = "140px";
  const _width = width || (block ? "100%" : fixedWidth ? minWidth : undefined);
  const _height =
    height || (size === "lg" ? "64px" : size === "md" ? "56px" : "48px");
  return {
    minWidth,
    ...(_width ? { width: _width } : {}),
    height: _height,
  };
};

export default setDimensions;
