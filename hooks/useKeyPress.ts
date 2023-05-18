import { useEffect, useCallback } from "react";

type KeyPressHook = (key: string, callback: () => void) => void;

const useKeyPress: KeyPressHook = function (key, callback) {
  const eventHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === key) callback?.();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", eventHandler);

    return () => {
      window.removeEventListener("keyup", eventHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, callback]);
};

export default useKeyPress;
