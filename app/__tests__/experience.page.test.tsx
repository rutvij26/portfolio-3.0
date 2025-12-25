import { render, screen } from "@testing-library/react";
import ExperiencePage from "../experience/page";
import { experiences } from "@/lib/data";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock("@/components/ResumeDownload", () => ({
  ResumeDownload: () => <button>Download Resume</button>,
}));

describe("ExperiencePage", () => {
  it("should render experience page with title", () => {
    render(<ExperiencePage />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(
      screen.getByText("A timeline of my professional journey")
    ).toBeInTheDocument();
  });

  it("should render all experience entries", () => {
    render(<ExperiencePage />);
    experiences.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
      expect(
        screen.getByText(`${exp.startDate} – ${exp.endDate}`)
      ).toBeInTheDocument();
      expect(screen.getByText(exp.employmentType)).toBeInTheDocument();
    });
  });

  it("should render experience bullets", () => {
    render(<ExperiencePage />);
    const firstExp = experiences[0];
    firstExp.bullets.forEach((bullet) => {
      expect(screen.getByText(bullet)).toBeInTheDocument();
    });
  });

  it("should render resume download button", () => {
    render(<ExperiencePage />);
    expect(screen.getByText("Download Resume")).toBeInTheDocument();
  });
});

