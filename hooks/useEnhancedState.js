import {
  useState,
  useCallback,
  useDebugValue,
  useRef,
  MutableRefObject,
} from "react";

type StateHook = [any, () => void, any, MutableRefObject];

export function useEnhancedState(initialState): StateHook {
  const [state, setState] = useState(initialState);
  const [prevState, setPrevState] = useState();
  const stateRef = useRef();

  useDebugValue({ state, prevState });

  const handleSetState = useCallback(
    (payload) =>
      setState((prevState) => {
        setPrevState(prevState);

        const isFunctionalUpdate = typeof payload === "function";

        const newState = isFunctionalUpdate ? payload(prevState) : payload;

        stateRef.current = state;

        return newState;
      }),
    []
  );

  return [state, handleSetState, prevState, stateRef];
}
