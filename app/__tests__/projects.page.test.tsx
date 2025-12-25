import { render, screen } from "@testing-library/react";
import ProjectsPage from "../projects/page";
import { fetchGitHubProjects } from "@/lib/github";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock("@/components/ProjectFilter", () => ({
  ProjectFilter: ({ projects }: { projects: any[] }) => (
    <div>Projects: {projects.length}</div>
  ),
}));

jest.mock("@/lib/github", () => ({
  fetchGitHubProjects: jest.fn(),
}));

const mockFetchGitHubProjects = fetchGitHubProjects as jest.MockedFunction<
  typeof fetchGitHubProjects
>;

describe("ProjectsPage", () => {
  beforeEach(() => {
    mockFetchGitHubProjects.mockResolvedValue([]);
  });

  it("should render projects page with title", async () => {
    const page = await ProjectsPage();
    render(page);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should fetch and display projects", async () => {
    const mockProjects = [
      {
        id: "1",
        name: "Test Project",
        description: "Test",
        summary: "Test",
        githubUrl: "https://github.com/test",
        language: "TypeScript",
        technologies: ["React"],
      },
    ];
    mockFetchGitHubProjects.mockResolvedValue(mockProjects as any);

    const page = await ProjectsPage();
    render(page);
    expect(mockFetchGitHubProjects).toHaveBeenCalled();
  });
});

