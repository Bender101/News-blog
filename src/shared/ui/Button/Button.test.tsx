import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("render button", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("add class button", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
