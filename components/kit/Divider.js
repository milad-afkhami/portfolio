import { Div } from "@kits";

type DividerProps = {
  width?: String,
  height?: String,
  color?: String,
  orientation?: "vertical" | "horizontal",
};

export const Divider = ({
  color = "border-light",
  length = "100%",
  thickness = "1px",
  orientation = "horizontal",
}): DividerProps => {
  return <Div width={width} height={height} bg={color} />;
};
