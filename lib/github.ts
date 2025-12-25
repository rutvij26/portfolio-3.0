import { Project } from "@/types";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  default_branch: string;
}

const EXCLUDED_REPOS = ["portfolio-2.0", "portfolio-3.0"];

const EXCLUDED_KEYWORDS = [
  "tutorial",
  "course",
  "learning",
  "practice",
  "test",
  "demo",
  "example",
  "boilerplate",
  "template",
  "starter",
];

function isWorthyProject(repo: GitHubRepo): boolean {
  // Exclude forks without significant changes
  if (repo.fork && repo.stargazers_count === 0 && repo.forks_count === 0) {
    return false;
  }

  // Exclude archived or disabled repos
  if (repo.archived || repo.disabled) {
    return false;
  }

  // Exclude specific repos
  if (EXCLUDED_REPOS.includes(repo.name)) {
    return false;
  }

  // Exclude repos with excluded keywords in name
  const lowerName = repo.name.toLowerCase();
  if (EXCLUDED_KEYWORDS.some((keyword) => lowerName.includes(keyword))) {
    return false;
  }

  // Must have description or meaningful name
  if (!repo.description && repo.name.length < 3) {
    return false;
  }

  // Check for real-world relevance
  const hasDescription = repo.description && repo.description.length > 20;
  const hasTopics = repo.topics && repo.topics.length > 0;
  const hasStars = repo.stargazers_count > 0;
  const hasActivity =
    new Date(repo.updated_at) >
    new Date(Date.now() - 365 * 24 * 60 * 60 * 1000); // Updated in last year

  // Project is worthy if it meets most criteria
  const criteria = [hasDescription, hasTopics, hasStars, hasActivity];
  const metCriteria = criteria.filter(Boolean).length;

  return metCriteria >= 2;
}

function generateSummary(repo: GitHubRepo): string {
  if (repo.description) {
    return repo.description.length > 150
      ? repo.description.substring(0, 150) + "..."
      : repo.description;
  }

  // Generate summary from name and topics
  const topics = repo.topics.slice(0, 3).join(", ");
  return `A ${repo.language || "software"} project${
    topics ? ` focusing on ${topics}` : ""
  }.`;
}

function extractTechnologies(repo: GitHubRepo): string[] {
  const techs: string[] = [];

  if (repo.language) {
    techs.push(repo.language);
  }

  // Add relevant topics as technologies
  const relevantTopics = repo.topics.filter(
    (topic) => !["web", "app", "project", "code"].includes(topic.toLowerCase())
  );
  techs.push(...relevantTopics.slice(0, 5));

  return techs;
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  const username = process.env.GITHUB_USERNAME || "rutvij26";
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers,
        // Cache for 1 hour in Next.js
        ...(typeof window === "undefined" && { next: { revalidate: 3600 } }),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter and transform repos
    const projects = repos
      .filter(isWorthyProject)
      .map(
        (repo, index): Project => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || "",
          summary: generateSummary(repo),
          url: repo.homepage || undefined,
          githubUrl: repo.html_url,
          language: repo.language || "Other",
          technologies: extractTechnologies(repo),
          featured: index < 3, // Top 3 are featured
          slug: repo.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        })
      )
      .slice(0, 20); // Limit to 20 projects

    return projects;
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchGitHubProjects();
  return projects.filter((p) => p.featured).slice(0, 3);
}
