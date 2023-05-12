import Div from "@kits/Div";

/**
 * Renders a divider
 * @param {{ width:string, height:string, color:string, orientation: ("vertical"|"horizontal") }} props
 */

const Divider = ({
  color = "border-light",
  length = "100%",
  thickness = "1px",
  orientation = "horizontal",
}) => {
  return <Div width={width} height={height} bg={color} />;
};


            
                
            
            
            
            export default Divider;