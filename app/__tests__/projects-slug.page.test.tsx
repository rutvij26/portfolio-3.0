import { render, screen } from "@testing-library/react";
import { notFound } from "next/navigation";
import ProjectDetailPage from "../projects/[slug]/page";
import { fetchGitHubProjects } from "@/lib/github";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

jest.mock("@/lib/github", () => ({
  fetchGitHubProjects: jest.fn(),
}));

const mockFetchGitHubProjects = fetchGitHubProjects as jest.MockedFunction<
  typeof fetchGitHubProjects
>;

describe("ProjectDetailPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render project details when project exists", async () => {
    const mockProject = {
      id: "1",
      name: "Test Project",
      description: "Test Description",
      summary: "Test Summary",
      githubUrl: "https://github.com/test",
      language: "TypeScript",
      technologies: ["React", "Next.js"],
      slug: "test-project",
    };

    mockFetchGitHubProjects.mockResolvedValue([mockProject] as any);

    const page = await ProjectDetailPage({ params: { slug: "test-project" } });
    render(page);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should call notFound when project does not exist", async () => {
    mockFetchGitHubProjects.mockResolvedValue([]);

    await expect(
      ProjectDetailPage({ params: { slug: "non-existent" } })
    ).rejects.toThrow();
    expect(notFound).toHaveBeenCalled();
  });
});

