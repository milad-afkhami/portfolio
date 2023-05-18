import { useEffect, useRef, useMemo } from "react";
import deepEqual from "fast-deep-equal/react";

type DeepEffectHook = (
  callback: Parameters<typeof useEffect>[0],
  dependencies: Parameters<typeof useEffect>[1]
) => ReturnType<typeof useEffect>;

/**
 * react `useEffect` hook with fast and deep comparison on its dependencies.
 *
 * ⚠️ Usage with **no** dependencies or **primitive** ones is not allowed
 */
const useDeepEffect: DeepEffectHook = function useDeepEffect(
  callback,
  dependencies
) {
  const ref = useRef(dependencies);
  const signalRef = useRef(0);

  if (!deepEqual(dependencies, ref.current)) {
    ref.current = dependencies;
    signalRef.current += 1;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deps = useMemo(() => ref.current, [signalRef.current]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, deps);
};

export default useDeepEffect;
