import {
  useState,
  useCallback,
  useDebugValue,
  useRef,
  MutableRefObject,
} from "react";

/**
 * An enhanced version of react useState hook that gives us a more practical way to deal with state in functional components.
 * @param {any} [initialState]
 * @returns {[any, Function, any, MutableRefObject]}
 */

export function useEnhancedState(initialState) {
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
