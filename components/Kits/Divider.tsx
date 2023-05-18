import Div from "@kits/Div";
import Orientations from "@constants/orientations";
import type { FC } from "react";

interface DividerProps {
  thickness?: string;
  color?: Colors;
  orientation?: Orientations;
}

const Divider: FC<DividerProps> = (props) => {
  const {
    color = "border-light-main",
    thickness = "1px",
    orientation = Orientations.Horizontal,
  } = props;

  return (
    <Div
      {...(orientation === Orientations.Vertical
        ? { width: thickness, height: "100%" }
        : { height: thickness, width: "100%" })}
      bg={color}
    />
  );
};

export default Divider;
