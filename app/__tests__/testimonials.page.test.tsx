import { render, screen } from "@testing-library/react";
import TestimonialsPage from "../testimonials/page";
import { testimonials } from "@/lib/data";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

describe("TestimonialsPage", () => {
  it("should render testimonials page with title", () => {
    render(<TestimonialsPage />);
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
  });

  it("should render all testimonials", () => {
    render(<TestimonialsPage />);
    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.text)).toBeInTheDocument();
      expect(
        screen.getByText(`${testimonial.role} @ ${testimonial.company}`)
      ).toBeInTheDocument();
    });
  });
});

