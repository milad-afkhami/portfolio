import { createPortal } from "react-dom";
import useClientDetect from "@hooks/useClientDetect";
import type { HOCFunctionalComponent } from "@_types/components";

type Component = HOCFunctionalComponent<{ selector?: string }>;

const IsomorphicPortal: Component = function ({ children, selector }) {
  const isClient = useClientDetect();

  if (!isClient) return null;

  let destEl;
  if (selector) {
    destEl = document.querySelector(selector);
  }
  destEl ??= document.body;

  return createPortal(children, destEl);
};

export default IsomorphicPortal;
