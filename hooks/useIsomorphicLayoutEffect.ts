import { useEffect, useLayoutEffect } from "@hooks";



const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

            export default useIsomorphicLayoutEffect;