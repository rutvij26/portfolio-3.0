import { render, screen } from "@testing-library/react";
import SkillsPage from "../skills/page";
import { skills } from "@/lib/data";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock("@/components/SkillIcon", () => ({
  SkillIcon: ({ skillName }: { skillName: string }) => (
    <span data-testid={`icon-${skillName}`}>{skillName}</span>
  ),
}));

describe("SkillsPage", () => {
  it("should render skills page with title", () => {
    render(<SkillsPage />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(
      screen.getByText("Technologies and tools I work with")
    ).toBeInTheDocument();
  });

  it("should render all skills", () => {
    render(<SkillsPage />);
    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it("should render skills by category", () => {
    render(<SkillsPage />);
    const categories = [...new Set(skills.map((s) => s.category))];
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});

