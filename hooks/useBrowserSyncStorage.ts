import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type MutableRefObject,
} from "react";
import type { Nullable } from "ts-wiz";

enum BrowserSyncStorageType {
  Session = "sessionStorage",
  Local = "localStorage",
}

type BrowserSyncStorageHook = <T>(
  type: keyof typeof BrowserSyncStorageType,
  key: string,
  initialValue: T
) => [Nullable<T>, (value: T) => T, MutableRefObject<Nullable<T>>];

type SetValueProps<S> = S | ((value: Nullable<S>) => S);

/**
 * A better way to use browser synchronous storage APIs in react
 */
const useBrowserSyncStorage: BrowserSyncStorageHook = function <T>(
  type: keyof typeof BrowserSyncStorageType,
  key: string,
  initialValue: T
) {
  const [storedValue, setStoredValue] = useState<Nullable<T>>(null);
  const storedValueRef = useRef<Nullable<T>>(storedValue);

  const handleSettingStoredValue = useCallback(
    (state: T, shouldSetStorage = false) => {
      setStoredValue(state);
      storedValueRef.current = state;
      if (shouldSetStorage) {
        window?.[BrowserSyncStorageType[type]]?.setItem?.(
          key,
          JSON.stringify(state)
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const setValue = (value: SetValueProps<T>) => {
    const valueToStore =
      value instanceof Function ? value?.(storedValueRef.current) : value;

    handleSettingStoredValue(valueToStore, true);
    return valueToStore;
  };

  useEffect(() => {
    try {
      const item = window?.[BrowserSyncStorageType[type]]?.getItem?.(key);
      const value = item ? JSON.parse(item) : initialValue;
      handleSettingStoredValue(value, true);
    } catch (error) {
      handleSettingStoredValue(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue, storedValueRef];
};

export default useBrowserSyncStorage;
