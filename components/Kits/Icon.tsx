import { Icon as UiWizIcon, type IconProps } from "ui-wiz";
import type { FC, ReactElement } from "react";

export type { IconProps };

const Icon: FC<IconProps> = (props): ReactElement => (
  <UiWizIcon prefix="mili" suffix="icon" {...props} />
);

export default Icon;
