import { fetchGitHubProjects, getFeaturedProjects } from '../github';
import { Project } from '@/types';

// Mock fetch
global.fetch = jest.fn();

const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

describe('GitHub Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.GITHUB_USERNAME = 'testuser';
    process.env.GITHUB_TOKEN = 'test-token';
  });

  it('should fetch and filter GitHub projects', async () => {
    const mockRepos = [
      {
        id: 1,
        name: 'worthy-project',
        full_name: 'testuser/worthy-project',
        description: 'A meaningful project description',
        html_url: 'https://github.com/testuser/worthy-project',
        homepage: 'https://example.com',
        language: 'TypeScript',
        topics: ['react', 'nextjs'],
        stargazers_count: 10,
        forks_count: 5,
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        fork: false,
        archived: false,
        disabled: false,
        default_branch: 'main',
      },
      {
        id: 2,
        name: 'tutorial-project',
        full_name: 'testuser/tutorial-project',
        description: 'Tutorial project',
        html_url: 'https://github.com/testuser/tutorial-project',
        homepage: null,
        language: 'JavaScript',
        topics: [],
        stargazers_count: 0,
        forks_count: 0,
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        fork: false,
        archived: false,
        disabled: false,
        default_branch: 'main',
      },
    ];

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockRepos,
    } as Response);

    const projects = await fetchGitHubProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].name).toBe('worthy-project');
  });

  it('should handle API errors gracefully', async () => {
    mockFetch.mockRejectedValue(new Error('API Error'));
    const projects = await fetchGitHubProjects();
    expect(projects).toEqual([]);
  });

  it('should get featured projects', async () => {
    const mockProjects: Project[] = [
      {
        id: '1',
        name: 'Project 1',
        description: 'Description 1',
        summary: 'Summary 1',
        githubUrl: 'https://github.com/test/project1',
        language: 'TypeScript',
        technologies: ['React'],
        featured: true,
        slug: 'project-1',
      },
      {
        id: '2',
        name: 'Project 2',
        description: 'Description 2',
        summary: 'Summary 2',
        githubUrl: 'https://github.com/test/project2',
        language: 'JavaScript',
        technologies: ['Node.js'],
        featured: false,
      },
    ];

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => [],
    } as Response);

    // Mock the fetchGitHubProjects to return our mock projects
    jest.spyOn(require('../github'), 'fetchGitHubProjects').mockResolvedValue(mockProjects);

    const featured = await getFeaturedProjects();
    expect(featured.length).toBe(1);
    expect(featured[0].featured).toBe(true);
  });
});

