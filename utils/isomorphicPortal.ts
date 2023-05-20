import { createPortal } from "react-dom";
import isClient from "./isClient";
import type { PropsWithChildren, ReactPortal } from "react";

type IsomorphicPortal = (
  children: PropsWithChildren["children"],
  selector: string
) => ReactPortal | null;

const isomorphicPortal: IsomorphicPortal = function (children, selector) {
  if (!isClient()) return null;

  const destEl = selector ? document.querySelector(selector) : null;

  return createPortal(children, destEl || document.body);
};

export default isomorphicPortal;
