import { styled } from "goober";
import type { ToastProps } from "./props";

interface ToastWrapperProps {
  type: ToastProps["type"];
}

const ToastWrapper = styled<ToastWrapperProps>("div")`
  width: var(--toast-width);
  padding: var(--spacing-2) var(--spacing-4);
  background-color: ${({ type }) => `var(--color-assistive-${type}-main)`};
  color: ${({ type }) => `var(--color-assistive-${type}-contrast)`};
  border-radius: var(--curve-xsm);
`;

export default ToastWrapper;
