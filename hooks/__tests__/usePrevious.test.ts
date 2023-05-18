import { renderHook } from "@testing-library/react";
import usePrevious from "@hooks/usePrevious";

describe("hooks usePrevious", () => {
  let value = "test";
  const cloneValue = value;
  it("Should get previouse state from updated state", () => {
    const { result, rerender } = renderHook(() => usePrevious(value));
    value = "test 2";
    rerender();
    expect(result.current).toEqual(cloneValue);
  });
});
