import { useState, useEffect, type RefObject } from "react";

interface Options extends IntersectionObserverInit {
  defaultValue: boolean;
}

type IntersectorHook = (ref: RefObject<Element>, options?: Options) => boolean;

const useIntersector: IntersectorHook = function (ref, options) {
  const {
    defaultValue = false,
    rootMargin = "0px",
    root,
    threshold,
  } = options || {};
  const [isIntersecting, setIntersecting] = useState(defaultValue);

  const rootObserver = () =>
    new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin, root, threshold }
    );

  useEffect(() => {
    if (window.IntersectionObserver) {
      if (ref.current) rootObserver().observe(ref.current);

      return () => rootObserver()?.disconnect?.();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isIntersecting;
};

export default useIntersector;
