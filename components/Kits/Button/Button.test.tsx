import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";
import type IconProps from "@kits/Icon/props";

describe("Button ui component tests", () => {
  const buttonText = "testButton";
  const mockFn = jest.fn();

  it("Should render with text", () => {
    render(<Button text={buttonText} />);
    expect(screen.getByText(buttonText)).toHaveTextContent(buttonText);
  });

  it("Should render with loading", () => {
    render(<Button className={buttonText} text={buttonText} loading />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("Should render with icon", () => {
    const iconName = "chevron-right";
    render(<Button text={buttonText} icon={iconName} />);
    expect(screen.getByTitle(iconName)).toBeInTheDocument();
  });

  it("Should render with trailing icon", () => {
    const iconName = "chevron-left" as IconProps["name"];
    render(<Button text={buttonText} trailingIcon={iconName} />);
    expect(screen.getByTitle(iconName)).toBeInTheDocument();
  });

  it("Should be disabled", () => {
    const { getByTestId } = render(
      <Button disabled text={buttonText} onClick={() => mockFn()} />
    );
    expect(getByTestId("kitButton")).toHaveAttribute("disabled");

    getByTestId("kitButton").click();
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it("Should not be clickable when is loading", () => {
    const { getByTestId } = render(
      <Button loading text={buttonText} onClick={() => mockFn()} />
    );
    getByTestId("kitButton").click();
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it("Should render with children", () => {
    render(
      <Button>
        <span>title</span>
      </Button>
    );
    expect(screen.getByText("title")).toBeInTheDocument();
  });
});
