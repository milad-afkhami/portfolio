import { renderHook } from "@testing-library/react";
import useDeepEffect from "@hooks/useDeepEffect";

describe("hooks useDeepEffect", () => {
  it("Should handles changing values as expected", () => {
    const callback = jest.fn();
    let deps = [{ a: "b" }];

    const { rerender } = renderHook(() => useDeepEffect(callback, deps));

    expect(callback).toHaveBeenCalledTimes(1);

    deps = [{ a: "b" }];

    rerender();
    expect(callback).toHaveBeenCalledTimes(1);

    deps = [{ a: "c" }];

    rerender();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
