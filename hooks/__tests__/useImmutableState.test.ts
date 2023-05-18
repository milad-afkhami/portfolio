import { renderHook, act } from "@testing-library/react";
import useImmutableState from "@hooks/useImmutableState";

describe("hooks useImmutableState", () => {
  const initState = { name: "mostafa" };

  it("Should by default set initState", () => {
    const { result } = renderHook(() => useImmutableState(initState));
    expect(result.current[0]).toMatchObject(initState);
  });
  it("Should set 'new state value' and return updated value", () => {
    const { result } = renderHook(() => useImmutableState(initState));
    const newState = { name: "milad" };
    act(() => {
      result.current[1](newState);
    });
    expect(result.current[0]).toMatchObject(newState);
  });
});
