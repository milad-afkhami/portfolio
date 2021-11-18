import { useCallback, useDebugValue, useRef } from "react";

type ISetState = [any, () => void];

export function useState(initialState): ISetState {
  const [state, setState] = React.useState(initialState);
  const [prevState, setPrevState] = React.useState();
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
