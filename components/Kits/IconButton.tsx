import { IconButton as UiWizIconButton, type IconButtonProps } from "ui-wiz";
import type { FC } from "react";

export type { IconButtonProps };

const IconButton: FC<IconButtonProps> = (props) => (
  <UiWizIconButton prefix="mili" suffix="icon" {...props} />
);

export default IconButton;
