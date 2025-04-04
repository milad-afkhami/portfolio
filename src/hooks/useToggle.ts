import { useState, useCallback, useDebugValue } from "react";

export default function useToggle(initialState?: boolean): [boolean, VoidFunction, VoidFunction, VoidFunction] {
  const [state, setState] = useState(initialState ?? false);

  const toggle = useCallback(() => {
    setState((currentState) => !currentState);
  }, []);

  const enable = useCallback(() => {
    setState(true);
  }, []);

  const disable = useCallback(() => {
    setState(false);
  }, []);

  useDebugValue(state);

  return [state, toggle, enable, disable];
}
