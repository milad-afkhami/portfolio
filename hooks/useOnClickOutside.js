import { useEffect } from "@hooks";

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) =>
      !ref.current || ref.current.contains(event.target)
        ? null
        : handler(event);

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
