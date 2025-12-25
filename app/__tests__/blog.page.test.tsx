import { render, screen } from "@testing-library/react";
import BlogPage from "../blog/page";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

describe("BlogPage", () => {
  it("should render blog page with coming soon message", () => {
    render(<BlogPage />);
    expect(
      screen.getByText(/coming soon/i)
    ).toBeInTheDocument();
  });
});

