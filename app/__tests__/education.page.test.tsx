import { render, screen } from "@testing-library/react";
import EducationPage from "../education/page";
import { education } from "@/lib/data";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock("@/components/ResumeDownload", () => ({
  ResumeDownload: () => <button>Download Resume</button>,
}));

describe("EducationPage", () => {
  it("should render education page with title", () => {
    render(<EducationPage />);
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(
      screen.getByText("My academic journey and qualifications")
    ).toBeInTheDocument();
  });

  it("should render all education entries", () => {
    render(<EducationPage />);
    education.forEach((edu) => {
      expect(screen.getByText(edu.degree)).toBeInTheDocument();
      expect(screen.getByText(edu.institution)).toBeInTheDocument();
      expect(
        screen.getByText(`${edu.startDate} – ${edu.endDate}`)
      ).toBeInTheDocument();
    });
  });

  it("should render location when available", () => {
    render(<EducationPage />);
    const educationWithLocation = education.find((edu) => edu.location);
    if (educationWithLocation) {
      expect(
        screen.getByText(educationWithLocation.location!)
      ).toBeInTheDocument();
    }
  });

  it("should render resume download button", () => {
    render(<EducationPage />);
    expect(screen.getByText("Download Resume")).toBeInTheDocument();
  });
});

