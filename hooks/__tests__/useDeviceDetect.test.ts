import { renderHook } from "@testing-library/react";
import useDeviceDetect from "@hooks/useDeviceDetect";

Object.defineProperty(
  window.navigator,
  "userAgent",
  ((value) => {
    let valueClone = value;
    return {
      get() {
        return valueClone;
      },
      set(v) {
        valueClone = v;
      },
    };
  })(window.navigator.userAgent)
);

describe("hooks useDeviceDetect", () => {
  it("Should detect desktop", () => {
    const { result } = renderHook(useDeviceDetect);
    expect(result.current.isDesktop).toBe(true);
  });

  it("Should detect mobile", () => {
    const userAgent =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
    // @ts-expect-error
    global.navigator.userAgent = userAgent;

    const { result } = renderHook(useDeviceDetect);
    expect(result.current.isMobile).toBe(true);
    expect(global.navigator.userAgent).toBe(userAgent);
  });
});
