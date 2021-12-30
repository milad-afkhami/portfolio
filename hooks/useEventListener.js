import { useEffect, useRef } from "@hooks";

interface A extends HTMLElementEventMap {}

export function useEventListener(eventName: A, handler, element = window) {
  const handlerRef = useRef();

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => handlerRef.current(event);

    element.addEventListener(eventName, eventListener);

    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
}
