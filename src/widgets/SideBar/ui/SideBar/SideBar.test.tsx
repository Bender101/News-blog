import {fireEvent, screen} from "@testing-library/react";
import { SideBar } from "./SideBar";
import {renderWithTranslation} from "../../../../shared/lib/renderWithTranlation/renderWithTranlation";

describe("SideBar", () => {
  test("render sidebar", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test('sidebar-collapsed', () => {
    renderWithTranslation(<SideBar/>)
    const toggleBtn = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
});
