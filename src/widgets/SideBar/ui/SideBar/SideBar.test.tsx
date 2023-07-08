import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { ComponentRender } from "shared/lib/ComponentRender/ComponentRender";

describe("SideBar", () => {
  test("render sidebar", () => {
    ComponentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("sidebar-collapsed", () => {
    ComponentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
