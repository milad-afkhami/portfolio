import { createPortal } from "react-dom";
import isClient from "./isClient";

const isomorphicPortal=(children, selector) =>{
  if (!isClient()) return null;

  const destEl = selector ? document.querySelector(selector) : null;

  return createPortal(children, destEl || document.body);
}

export default isomorphicPortal