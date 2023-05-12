import { useEffect, useRef } from "@hooks";



const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

            export default usePrevious;