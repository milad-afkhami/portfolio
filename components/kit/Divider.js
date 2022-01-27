import { Div } from "@kits";

/**
 * Renders a divider
 * @param {{ width:string, height:string, color:string, orientation: ("vertical"|"horizontal") }} props
 */
export const Divider = ({
  color = "border-light",
  length = "100%",
  thickness = "1px",
  orientation = "horizontal",
}) => {
  return <Div width={width} height={height} bg={color} />;
};
