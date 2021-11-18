import { useState, useCallback, useDebugValue } from "@hooks";

type IToggleHook = [Boolean, () => void];

export function useToggle(initialState: Boolean = false): IToggleHook {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);
  useDebugValue(state);

  return [state, toggle];
}
