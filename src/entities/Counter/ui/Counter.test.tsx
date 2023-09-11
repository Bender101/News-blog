import { screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { Counter } from "./Counter";
import {userEvent} from "@storybook/testing-library";

describe("Counter_", () => {
  test("test render", () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test('increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
