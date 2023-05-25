import { useEffect, useRef } from "react";

interface EventListenerHook {
  (
    eventName: string,
    listener: EventListener,
    element?: ReturnType<typeof document.querySelector> | Window
  ): void;
}

const useEventListener: EventListenerHook = (
  eventName,
  listener,
  element = window
) => {
  const handlerRef = useRef<EventListener>();

  useEffect(() => {
    handlerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    const eventListener = (event: Event) => handlerRef.current?.(event);

    element.addEventListener(eventName, eventListener);

    // eslint-disable-next-line consistent-return
    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
};

export default useEventListener;
