import type { FC } from "react";
import type { CSSAttribute } from "goober";

type HRProps = Pick<CSSAttribute, "borderStyle" | "borderWidth"> & {
  type: "light" | "dark";
};

const HR: FC<HRProps> = (props) => {
  const { type = "light", borderStyle = "solid", borderWidth = "1px" } = props;

const HR = styled(Div).attrs(() => ({
  as: "hr",
}))(({ type = "light", borderStyle = "solid", borderWidth = 1 }) => ({
  borderColor: `var(--color-border-${type})`,
  borderStyle: borderStyle,
  borderWidth: borderWidth + "px",
  borderTop: "none",
}));

export default HR;
