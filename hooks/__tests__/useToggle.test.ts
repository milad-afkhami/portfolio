import { renderHook, act } from "@testing-library/react";
import useToggle from "@hooks/useToggle";

it.each`
  initialValue | expected
  ${true}      | ${false}
  ${false}     | ${true}
  ${undefined} | ${true}
  ${""}        | ${true}
  ${null}      | ${true}
`(
  "should be $expected after toggling with $initialValue initialValue",
  ({ initialValue, expected }) => {
    const { result } = renderHook(() => useToggle(initialValue));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(expected);
  }
);
