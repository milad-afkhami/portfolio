import { useState, useCallback, useDebugValue } from "react";
import __cloneDeep from "lodash-es/cloneDeep";

/**
 * A simplified version of `useEnhancedState` hook
 *
 */

const useImmutableState = function <T>(
  initialState: T
): [T, (payload: T) => void] {
  const [state, setState] = useState(initialState);

  useDebugValue(state);

  const handleSetState = useCallback(
    (payload: T) =>
      setState((prevState: T) => {
        const isFunctionalUpdate = typeof payload === "function";

        const newState = isFunctionalUpdate
          ? payload(__cloneDeep(prevState))
          : payload;

        return newState;
      }),
    []
  );

  return [state, handleSetState];
};

export default useImmutableState;
