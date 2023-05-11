import { useEffect, useLayoutEffect } from "@hooks";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
