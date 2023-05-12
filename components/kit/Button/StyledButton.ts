import Div from "@kits/Div";
import styled from "styled-components";
import setDimensions from "./setDimensions";
import setStyle from "./setStyle";
import setTextTypography from "@stylesheets/utils/setTextTypography";

const StyledButton = styled(Div).attrs((attrs) => ({
  as: "button",
  loading: attrs.loading ? "true" : undefined,
}))((props) => {
  const {
    text,
    loading,
    success,
    size,
    disabled,
    variant,
    css,
    block,
    width,
    height,
    ...rest
  } = props;

  const dimensions = setDimensions(props);
  const paints = setStyle({ variant, disabled });
  const firstChild = "& > *:first-child";
  return {
    ...dimensions,
    ...paints,
    "&, & *": {
      ...setTextTypography("md"),
      transition: "all 0.1s ease, background-color 1s",
    },
    [firstChild]: { transition: "margin-top 0.3s ease" },
    display: "block",
    borderRadius: `var(--curve-xlg)`,
    overflow: "hidden",
    ":focus": { outline: "none" },
    // color: "var(--color-text-primary)",
    ...(loading
      ? { [firstChild]: { marginTop: `-${dimensions.height}` } }
      : success
      ? {
          [firstChild]: {
            marginTop: `-${2 * dimensions.height.replace("px", "")}px`,
          },
        }
      : {}),
  };
});

export default StyledButton;
