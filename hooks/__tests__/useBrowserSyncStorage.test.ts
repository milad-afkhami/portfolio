import { act, renderHook } from "@testing-library/react";
import useBrowserSyncStorage from "@hooks/useBrowserSyncStorage";

describe("hooks useBrowserSyncStorage", () => {
  const storeKey = "name";
  const storeValue = "Mostafa";
  const storageType = "Local";
  it("Should get value from local storage key", () => {
    const { result } = renderHook(() =>
      useBrowserSyncStorage(storageType, storeKey, storeValue)
    );
    expect(result.current[0]).toEqual(storeValue);
    expect(result.current[2].current).toEqual(storeValue);
  });

  it("Should set value in exist local storage key", () => {
    const { result } = renderHook(() =>
      useBrowserSyncStorage(storageType, storeKey, "")
    );
    act(() => {
      result.current[1](storeValue);
    });
    expect(result.current[0]).toEqual(storeValue);
  });
});
