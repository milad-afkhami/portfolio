import { css } from "goober";
import type { FC } from "react";
import type { CSSAttribute } from "goober";

type HRProps = Pick<CSSAttribute, "borderStyle" | "borderWidth"> & {
  type: "light" | "dark";
};

const HR: FC<HRProps> = (props) => {
  const { type = "light", borderStyle = "solid", borderWidth = "1px" } = props;

  return (
    <hr
      className={css({
        borderColor: `var(--color-border-${type})`,
        borderStyle,
        borderWidth,
        borderTop: "none",
      })}
    />
  );
};

export default HR;
