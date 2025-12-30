import { render, screen } from "@testing-library/react";
import ResumePage from "../resume/page";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

describe("ResumePage", () => {
  it("should render resume page", () => {
    render(<ResumePage />);
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("should render resume iframe", () => {
    render(<ResumePage />);
    const iframe = screen.getByTitle("Resume Preview");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "/api/resume");
  });
});
