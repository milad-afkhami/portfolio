// #region imports
import colorVar from "@stylesheets/utils/var/color";
import { styled } from "goober";
import type { ToastProps } from "./props";
// #endregion

interface ToastWrapperProps {
  type: ToastProps["type"];
}

const ToastWrapper = styled<ToastWrapperProps>("div")`
  width: var(--toast-width);
  padding: var(--spacing-2) var(--spacing-4);
  background-color: ${({ type }) => colorVar(`assistive-${type}-main`)};
  color: ${({ type }) =>
    type === "warning"
      ? colorVar("text-primary-main")
      : colorVar("bg-primary-main")};
  border-radius: var(--curve-xsm);
`;

export default ToastWrapper;
