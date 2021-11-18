import { createPortal } from "react-dom";
import { isClient } from "@utils";

export function useIsomorphicPortal(children, selector) {
  if (!isClient()) return null;

  return createPortal(children, document.querySelector(selector));
}
